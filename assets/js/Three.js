import * as THREE from 'three'

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

  constructor(store) {
    this.scene  = new THREE.Scene()
    this.store = store
  }

  mounted () {
    this.initRenderer()
    this.initUniforms()
    this.initOthers()
    this.setScene()
    this.setAudio()

    this.animate()
  }

  initRenderer () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height

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

    for (let effect in this.store.state.parameters) {
      for (let name in this.store.state.parameters[effect]) {
        const type = this.store.state.parameters[effect][name].type
        const a = {}
        a[name] = { type: type, value: this.store.state.parameters[effect][name][name] }
        this.uniforms = Object.assign(a, this.uniforms)
      }
    }
  }

  initOthers () {
    window.onresize = () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.aspect = this.width / this.height

      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.aspect
    }

    this.fps = 1000.0 / this.store.state.canvasParameters.fps.fps
    this.past = this.getTime()
  }

  setScene () {
    if (this.plane) {
      this.scene.remove(this.plane)
    }

    const canvasParameters = this.store.getters["canvasParameters/state"]

    const fragmentShader = require('@/assets/glsl/' + canvasParameters.scene.scene + '/source.frag')
    const vertexShader = require('@/assets/glsl/' + canvasParameters.scene.scene + '/source.vert')

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader || DEFAULT_VERTEX_SHADER,
      fragmentShader: fragmentShader || DEFAULT_FRAGMENT_SHADER,
      uniforms: this.uniforms,
    })
    const geometry = new THREE.PlaneGeometry(2 * this.aspect, 2)
    this.plane = new THREE.Mesh(geometry, material)
    this.scene.add(this.plane)
  }

  animate () {
    requestAnimationFrame(this.animate.bind(this))

    this.now = this.getTime()
    this.fps = 1000.0 / this.store.state.canvasParameters.fps.fps
    if (this.fps < this.now - this.past) {
      this.updateUniforms()

      this.past = this.now

      this.renderer.render(this.scene, this.camera)
    }
  }

  updateUniforms () {
    if(!this.store.state.parameters.time.isStopped.isStopped) {
      this.uniforms.time.value += (this.now - this.past)*0.001 * Number(this.store.state.parameters.time.speed.speed)
    }

    this.analyser.getFrequencyData()
    this.uniforms.tAudioData.value.needsUpdate = true

    for (let p in this.store.state.parameters) {
      for (let name in this.store.state.parameters[p]) {
        this.uniforms[name].value = this.store.state.parameters[p][name][name]
      }
    }
  }

  getTime () {
    const now = window.performance && ( performance.now )
    return (now && now.call( performance )) && ( new Date().getTime() )
  }

  setAudio () {
    const audioFileName = "gpe.m4a"
    const listener = new THREE.AudioListener()
    const audio = new THREE.Audio(listener)
    this.mediaElement = new Audio(audioFileName)
    this.mediaElement.loop = true
    audio.setMediaElementSource(this.mediaElement)

    const fftSize = 128
    this.analyser = new THREE.AudioAnalyser(audio, fftSize)
    this.uniforms = Object.assign({
      tAudioData: {
        value: new THREE.DataTexture( this.analyser.data, fftSize / 2, 1, THREE.LuminanceFormat )
      } }, this.uniforms)
  }
}
