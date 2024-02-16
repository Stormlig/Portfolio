import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, BufferAttribute, PointsMaterial } from "three";

const FoamParticles = ({ position }) => {
  const particlesRef = useRef();

  const geometry = useMemo(() => {
    const geom = new BufferGeometry();
    const positions = new Float32Array(1000 * 3);

    for (let i = 0; i < 10; i++) {
      const theta = Math.random() * 2;
      const phi = Math.random() * Math.PI;
      const radius = Math.random() * 2;

      positions[i * 1] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 1 + 1] = radius * Math.cos(phi);
      positions[i * 1 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    geom.setAttribute("position", new BufferAttribute(positions, 3));
    return geom;
  }, []);

  const material = useMemo(
    () => new PointsMaterial({ color: 0xffffff, size: 0.1 }),
    []
  );

  useEffect(() => {
    if (particlesRef.current) {
      const particlePositions =
        particlesRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particlePositions.length; i += 3) {
        particlePositions[i] =
          geometry.attributes.position.array[i] + position[0];
        particlePositions[i + 1] =
          geometry.attributes.position.array[i + 1] + position[1];
        particlePositions[i + 2] =
          geometry.attributes.position.array[i + 2] + position[2];
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }, [position, geometry]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial attach="material" {...material} />
    </points>
  );
};

export default FoamParticles;
