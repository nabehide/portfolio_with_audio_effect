import * as THREE from 'three';
import { flagAudio } from '~/assets/js/parameter';

const RESOLUTION = 128;

const DEFAULT_VERTEX_SHADER = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
const DEFAULT_FRAGMENT_SHADER = `
uniform vec2 resolution;
uniform float time;
void main() {
  vec2 pos = gl_FragCoord.xy / resolution.xy;
  float d = distance(pos, vec2(0.5)) + sin(time) * 0.1;
  float c = 1.0 - smoothstep(0.5, 0.501, d);
  gl_FragColor = vec4(0.0, c, c, 1.0);

  // vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  // gl_FragColor = vec4(sin(time), cos(time), -sin(time), 1.0);
}
`

export default class Three {
  constructor (store) {
    this.store = store;

    this.isMusicReady = false;
    this.isMicrophoneReady = false;
  }
  mounted () {
    this.initRenderer();
    this.initUniforms();
    this.initOthers();
    this.initShader();
    if ( flagAudio ) {
      this.initAudio();
    }

    this.animate();
  }
  initAudio () {
    this.mediaDevices = navigator.mediaDevices || ((navigator.mozGetUserMedia || navigator.webkitGetUserMedia) ? {
      getUserMedia: function(c) {
        return new Promise(function(y, n) {
          (navigator.mozGetUserMedia ||
           navigator.webkitGetUserMedia).call(navigator, c, y, n);
        });
      }
    } : null);

    if (!this.mediaDevices) {
      console.log("getUserMedia() not supported.");
    } else {
      this.mediaDevices.getUserMedia({audio: true}).then(evt => {
        document.getElementById("button").addEventListener("click", () => {

          const audioSource = this.store.getters["general/state"].audioSource;
          if ( audioSource === "music" ) {
            this.stopMicrophone();
            this.isMicrophoneReady = false;
            this.isMusicReady = false;

            const audioFileName = "mece.m4a";
            const listener = new THREE.AudioListener();
            this.sound = new THREE.Audio(listener);
            this.audioLoader = new THREE.AudioLoader();
            this.audioLoader.load(audioFileName, (buffer) => {
              this.sound.setBuffer(buffer);
              this.sound.setLoop(true);
              this.sound.play();

              this.analyser = new THREE.AudioAnalyser(this.sound, RESOLUTION);
              this.tAudioData = this.analyser.data;
              this.uniforms.tAudioData = {
                value: new THREE.DataTexture( this.tAudioData, RESOLUTION / 2, 1, THREE.LuminanceFormat )
              };

              this.initShader();

              this.isMusicReady = true;
            })

            /*
            this.uniforms.tAudioData = {
              value: new DataTexture( this.tAudioData, RESOLUTION / 2, 1, THREE.LuminanceFormat )
            }
            */

          } else if ( audioSource === "microphone" ) {
            this.stopMusic();
            this.isMusicReady = false;
            this.isMicrophoneReady = false;

            // const audioCtx = (window.AudioContext) ? new AudioContext : new webkitAudioContext
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const options = {mediaStream: evt};
            const src = audioCtx.createMediaStreamSource(evt);

            this.analyserMicrophone = audioCtx.createAnalyser(evt);
            this.analyserMicrophone.fftSize = RESOLUTION/2.;
            src.connect(this.analyserMicrophone);
            this.dataMicrophone = new Uint8Array(this.analyserMicrophone.fftSize);
            this.tAudioData = this.dataMicrophone;
            this.uniforms.tAudioData = {
              value: new THREE.DataTexture( this.tAudioData, RESOLUTION / 2, 1, THREE.LuminanceFormat )
            }

            this.initShader();

            this.isMicrophoneReady = true;
          } else {
            this.stopMusic();
            this.stopMicrophone();
            this.isMusicReady = false;
            this.isMicrophoneReady = false;
          }

        });
      });
    }
  }
  initRenderer () {
    this.scene = new THREE.Scene();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width/this.height;

    this.camera = new THREE.OrthographicCamera(-this.aspect, this.aspect, 1, -1, 0.1, 10)
    this.camera.position.set(0, 0, 1)
    this.camera.lookAt(this.scene.position)
    this.scene.add(this.camera)

    const canvas = document.getElementById("canvas")
    canvas.width = this.width
    canvas.height = this.height
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      width: this.width,
      height: this.height,
    })
  }
  initUniforms () {
    this.uniforms = {}
    const DEFAULT_UNIFORMS = {
      time: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(this.width, this.height)},
    }
    this.uniforms = Object.assign(DEFAULT_UNIFORMS, this.uniforms)

    for (let effect in this.store.state.uniforms) {
      for (let name in this.store.state.uniforms[effect]) {
        const a = {}
        const { type, value } = this.store.state.uniforms[effect][name]
        a[name] = { type: type, value: value }
        this.uniforms = Object.assign(a, this.uniforms)
      }
    }
  }
  initOthers () {
    window.onresize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width / this.height;

      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.aspect;

      // this.uniforms.resolution.value = new THREE.Vector2(this.width, this.height);
    }

    this.fps = 1000.0 / 30.;
    this.past = new Date().getTime();
  }
  initShader () {
    if (this.plane) {
      this.scene.remove(this.plane)
    }

    const fragmentShader = require('@/assets/glsl/' + "orb" + '/source.frag')
    const material = new THREE.ShaderMaterial({
      vertexShader: DEFAULT_VERTEX_SHADER,
      fragmentShader: fragmentShader || DEFAULT_FRAGMENT_SHADER,
      uniforms: this.uniforms,
    });
    const geometry = new THREE.PlaneGeometry(2 * this.aspect, 2);
    this.plane = new THREE.Mesh(geometry, material);
    this.scene.add(this.plane);
  }
  animate () {
    requestAnimationFrame(this.animate.bind(this));

    this.now = new Date().getTime();
    this.fps = 1000.0 / 30.;
    if (this.fps < this.now - this.past) {
      this.updateUniforms()

      this.past = this.now;

      this.renderer.render(this.scene, this.camera);
    }
  }
  updateUniforms () {
    if ( !this.store.state.uniforms.time.isStopped.value ) {
      this.uniforms.time.value += (this.now - this.past)*0.001 * Number(this.store.state.uniforms.time.speed.value);
      // this.uniforms.time.value += (this.now - this.past)*0.001;
    }

    if ( flagAudio ) {
      const audioSource = this.store.getters["general/state"].audioSource
      if ( audioSource === "music" && this.isMusicReady ) {
        this.analyser.getFrequencyData()
        this.tAudioData = this.analyser.data
        this.uniforms.tAudioData.value.needsUpdate = true
        console.log(this.tAudioData);
      } else if ( audioSource === "microphone" && this.isMicrophoneReady ) {
        this.analyserMicrophone.getByteFrequencyData(this.dataMicrophone);
        this.tAudioData = this.dataMicrophone;
        this.uniforms.tAudioData.value.needsUpdate = true
        console.log(this.dataMicrophone);
      }
    }

    for (let effect in this.store.state.uniforms) {
      for (let name in this.store.state.uniforms[effect]) {
        this.uniforms[name].value = this.store.state.uniforms[effect][name].value
      }
    }
  }
  stopMusic () {
    if ( this.sound ) {
      this.sound.stop();
    }
    this.resetAudioData();
  }
  stopMicrophone () {
    this.resetAudioData();
  }
  resetAudioData () {
    if ( this.tAudioData ) {
      for (let i=0; i<this.tAudioData.length; i++) {
        this.tAudioData[i] = 0.;
      }
      this.uniforms.tAudioData.value.needsUpdate = true
    }
  }
}
