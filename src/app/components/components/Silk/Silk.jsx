/* eslint-disable react/no-unknown-property */
'use client';

import { Canvas, useFrame, useThree, invalidate } from '@react-three/fiber';
import { forwardRef, useRef, useLayoutEffect, useEffect } from 'react';
import { Color } from 'three';

/* ================= UTIL ================= */

const hexToNormalizedRGB = hex => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

/* ================= SHADERS ================= */

const vertexShader = `
precision highp float;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  vec2 r = (e * sin(e * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv  = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float t  = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - t);

  float pattern =
    0.6 +
    0.4 *
      sin(
        5.0 *
          (tex.x +
            tex.y +
            cos(3.0 * tex.x + 5.0 * tex.y) +
            0.02 * t) +
          sin(20.0 * (tex.x + tex.y - 0.1 * t))
      );

  vec4 col = vec4(uColor * pattern, 1.0);
  col.rgb -= rnd * 0.066 * uNoiseIntensity;

  gl_FragColor = col;
}
`;

/* ================= PLANE ================= */

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  // Scale once per resize
  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.scale.set(viewport.width, viewport.height, 1);
  }, [viewport.width, viewport.height]);

  // Manual animation loop (background-safe)
  useFrame((_, delta) => {
    if (!ref.current?.material?.uniforms) return;

    ref.current.material.uniforms.uTime.value += delta * 0.1;

    // Request next frame only
    invalidate();
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});

SilkPlane.displayName = 'SilkPlane';

/* ================= BACKGROUND ================= */

export default function SilkBackground({
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5,
  rotation = 0
}) {
  const meshRef = useRef();

  // Stable uniforms (NEVER recreated)
  const uniforms = useRef({
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoiseIntensity: { value: noiseIntensity },
    uColor: { value: new Color(...hexToNormalizedRGB(color)) },
    uRotation: { value: rotation },
    uTime: { value: 0 }
  });

  // Update values without recreating uniforms
  useEffect(() => {
    uniforms.current.uSpeed.value = speed;
    uniforms.current.uScale.value = scale;
    uniforms.current.uNoiseIntensity.value = noiseIntensity;
    uniforms.current.uRotation.value = rotation;
    uniforms.current.uColor.value.set(color);
  }, [speed, scale, noiseIntensity, rotation, color]);

  // Cleanup on unmount (mobile critical)
  useEffect(() => {
    return () => {
      if (!meshRef.current) return;
      meshRef.current.geometry.dispose();
      meshRef.current.material.dispose();
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 1.75]}                     // mobile-safe
      frameloop="demand"          // background-only
      gl={{ powerPreference: 'high-performance' }}
    >
      <SilkPlane ref={meshRef} uniforms={uniforms.current} />
    </Canvas>
  );
}
