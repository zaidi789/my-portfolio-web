import React, { useRef, useMemo } from "react";
import { useFrame, RootState } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

interface NeuralNetworkProps {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
}

const NeuralNetwork = ({ mousePosition, isHovering }: NeuralNetworkProps) => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate neural network nodes
  const nodes = useMemo(() => {
    const nodeArray = [];
    const nodeCount = 25;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const radius = 3 + Math.sin(i * 0.5) * 0.5;
      const x = Math.cos(theta) * Math.sin(phi) * radius;
      const y = Math.sin(theta) * Math.sin(phi) * radius;
      const z = Math.cos(phi) * radius;

      nodeArray.push({
        position: [x, y, z] as [number, number, number],
        id: i,
        color: i % 3 === 0 ? "#00D9FF" : i % 3 === 1 ? "#B845ED" : "#FF1CF7",
        baseIntensity: 0.3 + Math.random() * 0.3,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    return nodeArray;
  }, []);

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const connectionArray = [];
    const maxDistance = 3.2;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
            Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
            Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );

        if (distance < maxDistance) {
          connectionArray.push({
            start: nodes[i].position,
            end: nodes[j].position,
            id: `${i}-${j}`,
            distance,
            pulseSpeed: 0.5 + Math.random() * 1.5,
          });
        }
      }
    }

    return connectionArray;
  }, [nodes]);

  useFrame((state: RootState) => {
    if (groupRef.current) {
      // Dynamic rotation based on hover state
      const rotationSpeed = isHovering ? 0.01 : 0.005;
      groupRef.current.rotation.y += rotationSpeed;
      groupRef.current.rotation.x += rotationSpeed * 0.4;

      // Enhanced mouse parallax effect
      const parallaxStrength = isHovering ? 0.15 : 0.08;
      const smoothing = isHovering ? 0.08 : 0.05;

      groupRef.current.rotation.x +=
        (mousePosition.y * parallaxStrength - groupRef.current.rotation.x) *
        smoothing;
      groupRef.current.rotation.y +=
        (mousePosition.x * parallaxStrength - groupRef.current.rotation.y) *
        smoothing;

      // Enhanced floating animation
      const floatIntensity = isHovering ? 0.5 : 0.3;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * floatIntensity;

      // Subtle breathing effect
      const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      groupRef.current.scale.setScalar(
        isHovering ? breathingScale * 1.1 : breathingScale
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Neural network nodes */}
      {nodes.map((node, index) => {
        // Calculate distance from mouse for highlighting effect
        const mouseDistance = Math.sqrt(
          Math.pow(mousePosition.x * 5 - node.position[0], 2) +
            Math.pow(mousePosition.y * 5 - node.position[1], 2)
        );
        const proximityFactor = Math.max(0, 1 - mouseDistance / 8);

        return (
          <Sphere
            key={node.id}
            position={node.position}
            args={[isHovering ? 0.1 + proximityFactor * 0.05 : 0.08, 16, 16]}
          >
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={
                node.baseIntensity +
                (isHovering ? 0.3 : 0) +
                proximityFactor * 0.4 +
                Math.sin(Date.now() * 0.003 + node.pulseOffset) * 0.1
              }
              transparent
              opacity={0.8 + proximityFactor * 0.2}
            />
          </Sphere>
        );
      })}

      {/* Connections between nodes with animated pulses */}
      {connections.map((connection) => {
        const pulseIntensity =
          Math.sin(Date.now() * 0.002 * connection.pulseSpeed) * 0.5 + 0.5;
        return (
          <Line
            key={connection.id}
            points={[connection.start, connection.end]}
            color={isHovering ? "#00D9FF" : "#0099CC"}
            lineWidth={isHovering ? 2 : 1}
            transparent
            opacity={0.3 + pulseIntensity * 0.3 + (isHovering ? 0.2 : 0)}
          />
        );
      })}

      {/* Central core sphere with enhanced effects */}
      <Sphere position={[0, 0, 0]} args={[isHovering ? 0.35 : 0.3, 32, 32]}>
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={
            0.5 + (isHovering ? 0.3 : 0) + Math.sin(Date.now() * 0.004) * 0.2
          }
          transparent
          opacity={0.6 + (isHovering ? 0.2 : 0)}
        />
      </Sphere>

      {/* Energy rings around the core */}
      {isHovering &&
        [1, 2, 3].map((ring) => (
          <mesh
            key={ring}
            position={[0, 0, 0]}
            rotation={[0, 0, (ring * Math.PI) / 3]}
          >
            <ringGeometry args={[1.5 + ring * 0.5, 1.6 + ring * 0.5, 32]} />
            <meshBasicMaterial
              color="#00D9FF"
              transparent
              opacity={0.1 - ring * 0.02}
              side={2}
            />
          </mesh>
        ))}
    </group>
  );
};

export default NeuralNetwork;
