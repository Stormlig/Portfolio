const FooterNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#141c27] opacity-90 shadow-md text-white z-10">
      <ul className="flex justify-between mx-auto py-4 w-[80%]">

        <li className="nav-link-floating"><a href="#home">Início</a></li>
        <li className="nav-link-floating"><a href="#about">Sobre</a></li>
        <li className="nav-link-floating"><a href="#skills">Ferramentas</a></li>
        <li className="nav-link-floating"><a href="#project">Projetos</a></li>
        <li className="nav-link-floating"><a href="#contact">Contato</a></li>
        {/* <li className="nav-link-floating"><a href="#home3d">Versão 3D</a></li> */}
      </ul>
    </nav>
  )
}

export default FooterNav
