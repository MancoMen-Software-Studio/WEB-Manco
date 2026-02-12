varying vec2 vUv;
varying float vDisplacement;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uAccentColor;

void main() {
  float intensity = smoothstep(-0.3, 0.8, vDisplacement);
  vec3 color = mix(uColor, uAccentColor, intensity);

  float fresnel = pow(1.0 - abs(dot(normalize(vec3(0.0, 0.0, 1.0)), normalize(vec3(vUv - 0.5, 1.0)))), 3.0);
  color += uAccentColor * fresnel * 0.5;

  float alpha = 0.85 + fresnel * 0.15;

  gl_FragColor = vec4(color, alpha);
}
