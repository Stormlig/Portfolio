import { useState, useLayoutEffect, memo } from 'react'

const FooterNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#141c27] opacity-90 shadow-md text-white z-10">
      <ul className="flex justify-between mx-auto py-4 w-[80%]">
        <li className="nav-link-floating"><a href="#home">Início</a></li>
        <li className="nav-link-floating"><a href="#about">Sobre</a></li>
        <li className="nav-link-floating"><a href="#project">Projetos</a></li>
        <li className="nav-link-floating"><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  )
}

const NavFloating = () => {
  const [showNav, setShowNav] = useState(true)

  useLayoutEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setShowNav(screenWidth < 1024)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // O array vazio garante que o efeito só seja executado uma vez

  return showNav ? <FooterNav /> : null
}

export default memo(NavFloating)
