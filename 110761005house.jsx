/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/110761005house.glb 
Author: gilbert890612 (https://sketchfab.com/gilbert890612)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/110761005house-38e9c8d906a54ae4a99e693bfd653d71
Title: 110761005HOUSE
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/110761005house.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[2.428, 0.559, 0]} scale={[1.328, 1, 1.099]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.house_color} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
      </group>
      <group position={[1.319, 2.478, 0.142]} rotation={[0.432, 0, 0]} scale={[0.181, 0.175, 0.104]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.roof} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.roof} />
      </group>
      <group position={[2.428, 0.559, 0]} scale={[1.328, 1, 1.099]}>
        <mesh geometry={nodes.Object_36.geometry} material={materials.window} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_38.geometry} material={materials['Material.002']} />
      </group>
      <group position={[2.497, 0.684, 1.214]}>
        <mesh geometry={nodes.Object_40.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_41.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} position={[2.428, 0.559, 0]} scale={[1.433, 1.079, 1.186]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.001']} position={[1.067, 2.486, 0]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['Material.001']} position={[1.095, 0.119, 1.072]} scale={0.174} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['Material.001']} position={[2.442, 1.538, 1.126]} rotation={[0, 0, -Math.PI / 2]} scale={[0.114, 1.295, 0.114]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['Material.001']} position={[3.845, 1.278, -0.005]} rotation={[-Math.PI / 2, 0.982, 0]} scale={[0.128, 1.151, 0.101]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials['Material.001']} position={[1.028, 1.829, 1.264]} rotation={[0.629, 0, 0]} scale={[0.05, 0.119, 0.101]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.lantern} position={[1.004, 1.244, 1.314]} scale={0.129} />
      <mesh geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[2.497, 0.684, 1.214]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['Material.001']} position={[2.494, 1.385, 1.246]} rotation={[0, 0, -Math.PI / 2]} scale={[0.082, 0.372, 0.047]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials['Material.001']} position={[0.81, 0.226, -0.374]} scale={[0.193, 0.228, 0.193]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials['Material.001']} position={[0.78, 0.134, -0.878]} scale={[0.245, 0.158, 0.245]} />
      <mesh geometry={nodes.Object_32.geometry} material={materials['Material.001']} position={[1.034, 0.907, 0.002]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.358, 0.314, 0.309]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials['Material.004']} position={[2.424, -0.071, 0.157]} />
      <mesh geometry={nodes.Object_43.geometry} material={materials['Material.001']} position={[2.497, 0.684, 1.157]} />
      <mesh geometry={nodes.Object_45.geometry} material={materials['Material.001']} position={[1.095, -1.481, 1.072]} scale={[0.174, 0.15, 0.174]} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.water} position={[5.352, -1.153, 0]} />
    </group>
  )
}

useGLTF.preload('/110761005house.glb')
