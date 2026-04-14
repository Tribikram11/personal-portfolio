import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

function FloatingShape({ position, scale, speed, color, distort }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
        }
    });

    return (
        <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <torusKnotGeometry args={[1, 0.35, 128, 32]} />
                <MeshDistortMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.3}
                    roughness={0.2}
                    metalness={0.8}
                    distort={distort}
                    speed={2}
                    transparent
                    opacity={0.7}
                />
            </mesh>
        </Float>
    );
}

function SmallOrb({ position, color, scale = 0.15 }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
        }
    });
    return (
        <mesh ref={ref} position={position} scale={scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.6}
                transparent
                opacity={0.5}
            />
        </mesh>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#ff00ff" />
            <pointLight position={[-5, -3, 3]} intensity={0.8} color="#00eaff" />
            <pointLight position={[0, 3, -5]} intensity={0.5} color="#ff00ff" />

            <FloatingShape
                position={[2.5, 0.5, -2]}
                scale={0.8}
                speed={0.5}
                color="#ff00ff"
                distort={0.3}
            />
            <FloatingShape
                position={[-2.5, -0.5, -3]}
                scale={0.5}
                speed={0.7}
                color="#00eaff"
                distort={0.4}
            />

            {/* Small floating orbs */}
            <SmallOrb position={[4, 2, -1]} color="#ff00ff" scale={0.1} />
            <SmallOrb position={[-3, 1.5, -2]} color="#00eaff" scale={0.12} />
            <SmallOrb position={[1, -2, -1]} color="#ff00ff" scale={0.08} />
            <SmallOrb position={[-1, 2.5, -3]} color="#00eaff" scale={0.09} />
        </>
    );
}

function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default HeroScene;
