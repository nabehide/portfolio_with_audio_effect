#ifdef GL_ES
precision mediump float;
#define GLSLIFY 1
#endif
uniform float time;
uniform vec2  resolution;

uniform float a1;
uniform float a2;
uniform float a3;
uniform float a4;

uniform int   d1;
uniform int   d2;
uniform int   d3;

uniform int   isColorInverted;
uniform int   isGlitched;
uniform float glitch;
uniform float zoom;

const float PI = 3.14159265;
const float period = 5.;
const float offset = period / 2.;

const int NFire = 1;

// const vec3 bg = vec3(0.0, 0.0, 0.0);

mat2 rot(float t){
  return mat2(cos(t),-sin(t),sin(t),cos(t));
}

float rand(vec2 co){
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(float s, float o, float period){
  float i = floor(s);
  float f = fract(s);
  float u = f * f * (3. - 2. * f);

  float s1 = rand(vec2(i/100.,i*o/100.));
  float s2;
  if(s < period-1.){
     s2 = rand(vec2((i+1.)/100.,(i+1.)*o/100.));
  }else{
     s2 = rand(vec2(0.,0.));
  }

  return mix(s1, s2, u);
}

float circle(vec2 p, float size, float a){
  return size-pow(length(p),a);
}

float line(vec2 p, float width){
  return (1.0 - step(width*0.5, abs(p.y)));
  // return (1.0 - step(width*0.5, abs(p.y))) * (1.0 - step(0.0, p.x));
}

void main(void){
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float t = mod(time, period);

  // zoom
  p *= zoom;

  // glich
  // if(d2 == 1){
  if(isGlitched == 1){
    // p.x += (rand(vec2(t))*2.-1.)*a4;
    for(int i=0; i<5; i++){
      float r1 = rand(vec2(t+0.0, float(i)))*2.-1.;
      float r2 = rand(vec2(t+0.1, float(i)))*2.-1.;
      // float intensity = rand(vec2(t+0.2, float(i)))*a4/255.;
      float intensity = rand(vec2(t+0.2, float(i)))*glitch/255.;
      if(min(r1, r2)<p.y && p.y<max(r1, r2)){
        p.x += intensity;
      }
    }
  }

  vec3 draw = vec3(0.);

  float lines = 0.0;

  // noise
  // vec2 start = vec2(noise(t,0.0,period), noise(t,0.1,period));
  // vec2 center = vec2(noise(t,0.2,period), noise(t,0.2,period));
  // float r = noise(t,0.3,period) * 10. + (-5.);

  float a = 0.4;
  float b = t*PI*a+offset;
  float s = sin(b);
  float c = cos(b);
  float ms = sin(-b);

  vec2 start = vec2(0.);
  // vec2 start = vec2(cos(t*PI*0.8+offset), sin(t*PI*0.8+offset));
  vec2 center = vec2(c, s);
  float r = s * 2. + (-1.0);

  vec2 pos = (p-start);
  pos = vec2(pos.x*(sin(pos.x+offset)+(c+1.)/2.), pos.y*(sin(pos.y+offset)+(s+1.)/2.));
  pos *= rot(0.5*PI) * rot(r*length(p-center));

  lines += line(pos, 0.01) * (s+1.0)/2.0;

  // vec2 pos2 = vec2(p.x+sin(p.y+b)*2., p.y+cos(p.x+b)*2.);
  vec2 pos2 = p;
  pos2 = (pos2+start) * rot(0.5*PI) * rot(-r*length(pos2+center));
  lines += line(pos2, 0.01) * (ms+1.0)/2.0;

  // vec3 color = vec3(a1, a2, a3);
  vec3 color = vec3(255.0, 1.0, 1.0);
  draw += lines * color/255.;

  // invert color
  // if(d1 == 1){
  if(isColorInverted == 0){
    draw = 1.0 - draw;
  }

  float alpha = 1.;
  // if(draw==vec3(0.)){
  //   alpha = 0.;
  // }

  gl_FragColor = vec4(draw,alpha);
}
