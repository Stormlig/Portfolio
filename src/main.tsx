import ReactDOM from 'react-dom/client'
import './index.css'
// import { Home3D } from './pages/home3D/Home3D'
// import { Physics } from '@react-three/cannon'
// import { Canvas } from '@react-three/fiber'
import Home from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Canvas style={{ height: '100vh' }}>
  //   <Physics broadphase="SAP" gravity={[0, -2, 0]}>
  //     <Home3D />

  //   </Physics>

  // </Canvas>
  <Home />
)
