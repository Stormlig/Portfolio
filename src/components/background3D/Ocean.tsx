/* eslint-disable @typescript-eslint/no-explicit-any */
import "./water.d.ts";
import { useRef } from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";
import { extend, useFrame, useLoader } from "@react-three/fiber";

extend({ Water });

export function Ocean() {
  const waterRef = useRef<any>();
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const config = {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 4.7,
    fog: false,
    wave: true,
    debugger: false,
    lengthScale: 10.0,
  };

  const waveAnimation = {
    time: 0,
    speed: 0.1, // Ajuste a velocidade conforme necessário
  };

  useFrame((_state, delta) => {
    waveAnimation.time += delta * waveAnimation.speed;

    if (waterRef.current) {
      waterRef.current.material.uniforms.time.value = waveAnimation.time;
    }
  });

  return (
    <water
      ref={waterRef}
      args={[new THREE.PlaneGeometry(5000, 5000), config]}
      rotation-x={-Math.PI / 2}
    />
  );
}
