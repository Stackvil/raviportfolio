import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { InteractiveParticles } from "./InteractiveParticles";

// Floating Cube (Docker-like)
const FloatingCube = () => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x += 0.002;
        meshRef.current.rotation.y += 0.002;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={[2, 2, -5]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#007bff" wireframe opacity={0.3} transparent />
            </mesh>
            {/* Inner solid for better visibility */}
            <mesh position={[2, 2, -5]} scale={0.9}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#004ea2" opacity={0.1} transparent />
            </mesh>
        </Float>
    );
};

// Abstract Tech Ring (Torus)
const TechRing = () => {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.z -= 0.001;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[-3, -1, -8]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#ff6a00" emissive="#ff6a00" emissiveIntensity={0.5} />
            </mesh>
        </Float>
    );
};

// Code Symbol </>
const CodeSymbol = () => {
    return (
        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <group position={[-4, 3, -6]} rotation={[0, 0.5, 0]}>
                <Text
                    fontSize={1}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={0.2}
                >
                    {"</>"}
                </Text>
            </group>
        </Float>
    );
};

// Network Lines
const NetworkLines = () => {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 20; i++) {
            p.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10 - 5
                )
            );
        }
        return p;
    }, []);

    const lineGeo = useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return geo;
    }, [points]);

    return (
        <group>
            {/* This is a simplified lines illustration. For real "connected" lines we'd need line segments.
                 Instead, let's use a Points system for a "data cloud" look which is more performant and cleaner. */}
            <points>
                <bufferGeometry attach="geometry" {...lineGeo} />
                <pointsMaterial
                    attach="material"
                    color="#ff6a00"
                    size={0.05}
                    sizeAttenuation
                    transparent
                    opacity={0.4}
                />
            </points>
        </group>
    );
}

// Main Scene
const Scene = () => {
    return (
        <group>
            <InteractiveParticles />
            <FloatingCube />
            <TechRing />
            <CodeSymbol />
            <NetworkLines />

            {/* Cloud-like clusters */}
            <Float speed={1} rotationIntensity={0.1} floatIntensity={2}>
                <mesh position={[4, -3, -10]}>
                    <dodecahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#1a1a1a" wireframe emissive="#333" />
                </mesh>
            </Float>

            {/* Atmosphere */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

export const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ff6a00" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#007bff" />

                <Scene />

                <fog attach="fog" args={['#050505', 5, 20]} />
            </Canvas>
        </div>
    );
};
