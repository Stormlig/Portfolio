/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useEffect, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useControls } from '../../hook/useControls'
import { Quaternion, Vector3 } from 'three'
import { useWheels } from '../../hook/useWheels'
import FoamParticles from './FoamParticles'

export function Boat ({ thirdPerson }: { thirdPerson: any }) {
  const result = useLoader(GLTFLoader, '/pirate_ship_rigged.glb').scene

  const position: [number, number, number] = [-1.5, 0.5, 3]
  const width: number = 0.15
  const height: number = 0.07
  const front: number = 0.15
  const wheelRadius: number = 0.05

  const chassisBodyArgs: [number, number, number] = [width, height, front * 2]

  const [chassisBody, chassisApi] = useBox<any>(
    () => ({
      allowSleep: false,
      args: chassisBodyArgs,
      mass: 1000,
      position
    }),
    useRef(null)
  )

  const { wheels, wheelInfos } = useWheels(width, height, front, wheelRadius)

  const [vehicle, vehicleApi] = useRaycastVehicle<any>(
    () => ({
      chassisBody,
      wheelInfos,
      wheels
    }),
    useRef(null)
  )

  useControls(vehicleApi, chassisApi)

  // camera
  useFrame((state) => {
    if (!thirdPerson) return

    const position = new Vector3(0, 0, 0)
    position.setFromMatrixPosition(chassisBody.current!.matrixWorld)

    const quaternion = new Quaternion(0, 0, 0)
    quaternion.setFromRotationMatrix(chassisBody.current!.matrixWorld)

    const wDir = new Vector3(0, 0, -1)
    wDir.applyQuaternion(quaternion)
    wDir.normalize()

    const CameraPosition = position
      .clone()
      .add(wDir.clone().multiplyScalar(-1).add(new Vector3(0, 0.3, 0)))

    state.camera.position.copy(CameraPosition)
    state.camera.lookAt(position)
  })

  useEffect(() => {
    if (!result) return

    result.scale.set(0.035, 0.035, 0.035)
    result.children[0].position.set(0, -2.1, 0)
  }, [result])

  return (
    <group ref={vehicle} name="vehicle">
      <group ref={chassisBody} name="chassisBody">
        <primitive
          object={result}
          rotation-y={Math.PI}
          position={[0, -0.09, 0]}
        />
        <FoamParticles position={position} />
      </group>
    </group>
  )
}
