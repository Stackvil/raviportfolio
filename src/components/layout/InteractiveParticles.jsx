import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform vec3 uMouse;
  attribute vec3 aRandom;
  varying float vDistance;

  void main() {
    vec3 pos = position;
    
    // Calculate distance to mouse
    float dist = distance(pos, uMouse);
    vDistance = dist;
    
    // Attraction force
    // Particles within radius get pulled towards mouse with some curl
    float radius = 5.0; // Interaction radius
    
    if (dist < radius) {
      float strength = (1.0 - dist / radius);
      
      // Pull towards
      vec3 direction = uMouse - pos;
      pos += direction * strength * 0.5;
      
      // Curl/Swirl
      pos.x += cos(uTime * 2.0 + pos.y) * strength * 0.5;
      pos.y += sin(uTime * 2.0 + pos.x) * strength * 0.5;
    }
    
    // Ambient floating
    pos.x += sin(uTime * 0.3 + aRandom.x * 10.0) * 0.1;
    pos.y += cos(uTime * 0.5 + aRandom.y * 10.0) * 0.1;
    pos.z += sin(uTime * 0.4 + aRandom.z * 10.0) * 0.1;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    float size = 50.0;
    gl_PointSize = size * (1.0 / -mvPosition.z);
    
    // Increase size near mouse
    if (dist < radius) {
      gl_PointSize *= (1.0 + (radius - dist) * 0.5);
    }
  }
`;

const fragmentShader = `
  varying float vDistance;
  uniform float uTime;
  
  void main() {
    // Circle shape
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 3.0);
    
    if (strength < 0.1) discard;

    // Dynamic color
    vec3 color1 = vec3(0.0, 0.5, 1.0); // Blue
    vec3 color2 = vec3(0.5, 0.0, 1.0); // Purple
    vec3 color3 = vec3(0.0, 1.0, 0.8); // Cyan
    
    // Mix based on distance to mouse
    float radius = 5.0;
    float mixFactor = clamp(1.0 - vDistance / radius, 0.0, 1.0);
    
    vec3 finalColor = mix(color1, color3, mixFactor);
    
    // Add pulsing to alpha
    float alpha = 0.6 + sin(uTime * 2.0) * 0.2;
    
    gl_FragColor = vec4(finalColor, strength * alpha);
  }
`;

export const InteractiveParticles = () => {
    const points = useRef();

    // Create thousands of random points
    const count = 2000;
    const positions = useMemo(() => {
        const array = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            array[i * 3] = (Math.random() - 0.5) * 25; // x spread
            array[i * 3 + 1] = (Math.random() - 0.5) * 15; // y spread
            array[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // z spread
        }
        return array;
    }, []);

    const randoms = useMemo(() => {
        const array = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            array[i * 3] = Math.random();
            array[i * 3 + 1] = Math.random();
            array[i * 3 + 2] = Math.random();
        }

        return array;
    }, []);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector3(0, 0, 0) },
        }),
        []
    );

    useFrame((state) => {
        const { clock, pointer, viewport } = state;

        if (points.current) {
            points.current.material.uniforms.uTime.value = clock.getElapsedTime();

            // Calculate mouse position in world space at z=0 plane approx
            const x = (pointer.x * viewport.width) / 2;
            const y = (pointer.y * viewport.height) / 2;

            // Smoothly interpolate mouse position
            const targetMouse = new THREE.Vector3(x, y, 0);
            points.current.material.uniforms.uMouse.value.lerp(targetMouse, 0.1);
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    count={count}
                    array={randoms}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                vertexColors
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
            />
        </points>
    );
};
