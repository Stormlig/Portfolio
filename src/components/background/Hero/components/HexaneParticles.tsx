import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { tsParticles } from '@tsparticles/engine'
import { loadStarShape } from '@tsparticles/shape-star'

export default function HexaneParticles() {
  const particlesInit = useCallback(async (): Promise<void> => {
    loadStarShape(tsParticles)
  }, [])

  return (
    <Particles
      options={{ particles: { move: { enable: true } } }}
      init={particlesInit}
    />
  )
}
