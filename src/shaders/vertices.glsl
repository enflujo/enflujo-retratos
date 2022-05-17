#version 300 es

// Atributes (a_): datos que llegan al shader por medio de los "buffers"
// Uniforms (u_): Variables que vienen desde JS.
// Varyings (v_): Valores que se pasan desde Vertices a Fragmentos. Estos valores son interpolados entre vertices de cáda pixel.
// https://webgl2fundamentals.org/webgl/lessons/webgl-how-it-works.html


in vec2 a_position;
in vec2 a_texCoord;

// resolución del lienzo
uniform vec2 u_resolution;

out vec2 v_texCoord;

void main() {
  // convert the position from pixels to 0.0 to 1.0
  vec2 zeroToOne = a_position / u_resolution;
  // convert from 0->1 to 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;
  // convert from 0->2 to -1->+1 (clipspace)
  vec2 clipSpace = zeroToTwo - 1.0;
  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  v_texCoord = a_texCoord;
}