import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import { Home3D } from '../pages/home3D/Home3D'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3d" element={<Home3D />} />
      </Routes>
    </Router>
  )
}
