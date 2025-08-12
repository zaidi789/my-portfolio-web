import React, { Suspense, useState, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  Loader,
} from "@react-three/drei";
import NeuralNetwork from "./NeuralNetwork";
import ParticleField from "./ParticleField";

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative cursor-pointer transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovering ? "scale(1.02)" : "scale(1)",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="bg-transparent"
      >
        <Suspense fallback={null}>
          {/* Camera setup with dynamic FOV */}
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 8]}
            fov={isHovering ? 65 : 60}
            near={0.1}
            far={1000}
          />

          {/* Enhanced lighting setup */}
          <ambientLight intensity={isHovering ? 0.3 : 0.2} color="#1a1a2e" />

          <directionalLight
            position={[10, 10, 5]}
            intensity={isHovering ? 0.7 : 0.5}
            color="#00D9FF"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          <pointLight
            position={[-10, -10, -5]}
            intensity={isHovering ? 0.5 : 0.3}
            color="#B845ED"
          />

          <pointLight
            position={[0, 0, 0]}
            intensity={isHovering ? 0.6 : 0.4}
            color="#FF1CF7"
          />

          {/* Dynamic point light that follows mouse */}
          <pointLight
            position={[mousePosition.x * 5, mousePosition.y * 5, 2]}
            intensity={isHovering ? 0.8 : 0.4}
            color="#00D9FF"
            distance={10}
            decay={2}
          />

          {/* 3D Objects */}
          <NeuralNetwork
            mousePosition={mousePosition}
            isHovering={isHovering}
          />
          <ParticleField
            mousePosition={mousePosition}
            isHovering={isHovering}
          />

          {/* Environment */}
          <Environment preset="night" />

          {/* Interactive controls */}
          <OrbitControls
            enabled={isHovering}
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={!isHovering}
            autoRotateSpeed={0.5}
            minDistance={6}
            maxDistance={12}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 4}
          />
        </Suspense>
      </Canvas>

      {/* Interactive hint */}
      <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/60 transition-opacity duration-300">
        {isHovering ? "Drag to rotate • Scroll to zoom" : "Hover to interact"}
      </div>

      {/* Loading component */}
      <Loader
        containerStyles={{
          backgroundColor: "transparent",
        }}
        dataStyles={{
          color: "#00D9FF",
        }}
      />
    </div>
  );
};

export default Scene3D;
