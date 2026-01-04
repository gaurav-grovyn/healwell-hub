import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function Pill({ position, rotation, color, scale = 1 }: { 
  position: [number, number, number]; 
  rotation?: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <capsuleGeometry args={[0.3, 0.8, 8, 16]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
      </mesh>
    </Float>
  );
}

function PillHalf({ position, color, scale = 1, isTop = true }: {
  position: [number, number, number];
  color: string;
  scale?: number;
  isTop?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, isTop ? Math.PI / 2 : Math.PI]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
    </Float>
  );
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const points: JSX.Element[] = [];
  for (let i = 0; i < 20; i++) {
    const t = i * 0.5;
    const x1 = Math.cos(t) * 0.5;
    const z1 = Math.sin(t) * 0.5;
    const x2 = Math.cos(t + Math.PI) * 0.5;
    const z2 = Math.sin(t + Math.PI) * 0.5;
    const y = i * 0.15 - 1.5;

    points.push(
      <mesh key={`sphere1-${i}`} position={[x1, y, z1]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#4A7C6F" roughness={0.3} />
      </mesh>,
      <mesh key={`sphere2-${i}`} position={[x2, y, z2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#6BA396" roughness={0.3} />
      </mesh>
    );
  }

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[2, 0, -2]}>
        {points}
      </group>
    </Float>
  );
}

function Heart() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[-2.5, 1, -1]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial color="#E07A5F" speed={2} distort={0.3} radius={1} />
      </mesh>
    </Float>
  );
}

function MedicalCross() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.7}>
      <group ref={groupRef} position={[2.5, 1.5, -3]}>
        <mesh>
          <boxGeometry args={[0.15, 0.6, 0.1]} />
          <meshStandardMaterial color="#4A7C6F" roughness={0.2} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.6, 0.15, 0.1]} />
          <meshStandardMaterial color="#4A7C6F" roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export function MedicationScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4A7C6F" />
          
          {/* Pills */}
          <Pill position={[-2, -1, 0]} color="#4A7C6F" scale={1.2} />
          <Pill position={[1.5, 2, -1]} rotation={[0.5, 0.3, 0.8]} color="#6BA396" scale={0.8} />
          <Pill position={[-1, 2.5, -2]} rotation={[0.2, 0.8, 0.4]} color="#E07A5F" scale={0.6} />
          <Pill position={[3, -1.5, -1.5]} rotation={[0.7, 0.2, 0.5]} color="#81B0A4" scale={0.9} />
          
          {/* DNA Helix */}
          <DNAHelix />
          
          {/* Heart */}
          <Heart />
          
          {/* Medical Cross */}
          <MedicalCross />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MedicationScene;
