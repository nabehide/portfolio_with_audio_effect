<template>
  <div id="container">
    <canvas id="canvas"/>
  </div>
</template>

<script>
import * as THREE from 'three'

import KeyEventListener from '~/assets/js/keyEventListener'

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

export default {
  computed: {
  },
  data () {
    const parameters = this.$store.getters["parameters/state"]
    const scene  = new THREE.Scene()

    return {
      scene: scene,
      parameters: parameters,
    }
  },
  created () {
  },
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height

    this.camera = new THREE.OrthographicCamera(-this.aspect, this.aspect, 1, -1, 0.1, 10)
    this.camera.position.set(0, 0, 1)
    this.camera.lookAt(this.scene.position)

    this.uniforms = {}
    const DEFAULT_UNIFORMS = {
      time: {type: 'f', value: 0.0},
      resolution: {type: 'v2', value: new THREE.Vector2(this.width, this.height)},
    }
    this.uniforms = Object.assign(DEFAULT_UNIFORMS, this.uniforms)

    for (let effect in this.parameters) {
      for (let name in this.parameters[effect]) {
        const type = this.parameters[effect][name].type
        const a = {}
        a[name] = { type: type, value: this.parameters[effect][name][name] }
        this.uniforms = Object.assign(a, this.uniforms)
      }
    }

    const fragmentShader = require('@/assets/glsl/' + 'curves' + '/source.frag')

    const material = new THREE.ShaderMaterial({
      vertexShader: DEFAULT_VERTEX_SHADER,
      fragmentShader: fragmentShader || DEFAULT_FRAGMENT_SHADER,
      uniforms: this.uniforms,
    })
    const geometry = new THREE.PlaneGeometry(2 * this.aspect, 2)
    this.plane = new THREE.Mesh(geometry, material)

    const kel = new KeyEventListener(this.$store)
    // kel.setup()

    const canvas = document.getElementById("canvas")
    canvas.width = this.width
    canvas.height = this.height

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      width: this.width,
      height: this.height,
    })

    this.scene.add(this.camera)
    this.scene.add(this.plane)

    window.onresize = () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.aspect = this.width / this.height

      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.aspect
    }

    this.fps = 1000.0 / 30.0
    this.past = this.getTime()
    this.animate()
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)

      this.now = this.getTime()
      if (this.fps < this.now - this.past) {
        this.updateUniforms()

        this.past = this.now

        this.renderer.render(this.scene, this.camera)
      }
    },
    updateUniforms () {
      if(!this.parameters.time.isStopped.isStopped) {
        // this.uniforms.time.value += (this.now - this.past)*0.001 * 0.5
        this.uniforms.time.value += (this.now - this.past)*0.001 * Number(this.parameters.time.speed.speed)
      }

      for (let p in this.parameters) {
        for (let name in this.parameters[p]) {
          this.uniforms[name].value = this.parameters[p][name][name]
        }
      }
    },

    getTime () {
      const now = window.performance && ( performance.now )
      return (now && now.call( performance )) && ( new Date().getTime() )
    },
  },
  updated () {
  },
}
</script>

<style scoped lang="scss">
.container {
}
#canvas {
}
/*
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
*/
</style>
