#ifdef GL_ES
precision mediump float;
#define GLSLIFY 1
#endif

uniform float time;
uniform vec2  resolution;

uniform sampler2D tAudioData;
varying vec2 vUv;

vec3 backgroundColor = vec3(0.5, 0.5, 0.5);
vec3 color = vec3(1.0, 1.0, 1.0);

void main(void){
    float f = texture2D(tAudioData, vec2(vUv.x, 0.0)).r;

    float i = step(vUv.y, f) * step(f - 0.0125, vUv.y);

    gl_FragColor = vec4(mix(backgroundColor, color, i), 1.0);
    /*
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    float f = texture2D(tAudioData, vec2(p.x, -1.0)).r * 2.0;

    float w = 0.0125;
    float h = 0.9;
    float i = step(p.y, f - h) * step(f - h - w, p.y);

    gl_FragColor = vec4(mix(backgroundColor, color, i), 1.0);
    */
}
