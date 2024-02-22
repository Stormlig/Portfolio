import FooterNav from './NavFloating'

const Nav = () => {
  return (
    <>
      <FooterNav />
      <nav className="w-[100%] sticky top-0 h-[12vh] bg-[#141c27] shadow-md z-10">
        <ul className="flex items-center justify-between w-[80%] mx-auto h-full" >

          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-primary">
            Herrison
            <span className="text-yellow-300">Souza</span>
          </h1>

          <li className="nav-link"><a href="#home">Início</a></li>
          <li className="nav-link"><a href="#about">Sobre mim</a></li>
          <li className="nav-link"><a href="#skills">Ferramentas</a></li>
          <li className="nav-link"><a href="#project">Projetos</a></li>
          <li className="nav-link"><a href="#contact">Contato</a></li>
          <li className="nav-link"><a href="#home3d">Versão 3D</a></li>

        </ul>
      </nav>
    </>
  )
}

export default Nav
