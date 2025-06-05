"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Cube({
  rotationY,
  rotationX,
}: {
  rotationY: number;
  rotationX: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY;
      meshRef.current.rotation.x = rotationX;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}
export default function RotatingCube({ scrollY }: { scrollY: number }) {
  // Map scrollY to a rotation value (adjust divisor for speed)
  const rotationY = scrollY / 300;

  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <Cube rotationY={rotationY} rotationX={rotationY} />
    </Canvas>
  );
}
