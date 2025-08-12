import React, { useRef, useMemo } from "react";
import { useFrame, RootState } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticleFieldProps {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
}

const ParticleField = ({ mousePosition, isHovering }: ParticleFieldProps) => {
  const ref = useRef<THREE.Points>(null);

  // Generate random particles
  const particles = useMemo(() => {
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const neonColors = [
      new THREE.Color("#00D9FF"), // Electric blue
      new THREE.Color("#B845ED"), // Purple
      new THREE.Color("#FF1CF7"), // Magenta
      new THREE.Color("#00FFAA"), // Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      // Random position in a large sphere with varying density
      const radius = Math.random() * 20 + 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random color from neon palette
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state: RootState) => {
    if (ref.current) {
      // Dynamic rotation based on hover state
      const rotationSpeed = isHovering ? 0.002 : 0.0005;
      ref.current.rotation.x += rotationSpeed;
      ref.current.rotation.y += rotationSpeed * 2;

      // Enhanced floating motion with mouse interaction
      const baseFloat = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      const mouseInfluence = isHovering ? mousePosition.y * 0.3 : 0;
      ref.current.position.y = baseFloat + mouseInfluence;

      // Mouse parallax effect on particles
      ref.current.position.x = mousePosition.x * 0.5;
      ref.current.position.z = mousePosition.y * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        size={isHovering ? 0.08 : 0.05}
        sizeAttenuation
        transparent
        opacity={isHovering ? 0.8 : 0.5}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default ParticleField;
