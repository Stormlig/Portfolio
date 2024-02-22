import NavFloating from './NavFloating'

const Nav = () => {
  return (
    <>
      <NavFloating />
      <nav className="fixed w-[100%] pt-8 pb-6 -top-2  md:pt-14 md:pb-12 bg-[#141c27] shadow-md z-10">
        <ul className="flex items-center justify-between w-[80%] mx-auto h-full" >

          <h1 className="flex-[0.8] cursor-pointer text-[25px] md:text-[30px] text-white font-primary">
            Herrison
            <span className="text-yellow-300">Souza</span>
          </h1>

          <li className="nav-link"><a href="#home">Início</a></li>
          <li className="nav-link"><a href="#about">Sobre mim</a></li>
          {/* <li className="nav-link"><a href="#skills">Ferramentas</a></li> */}
          <li className="nav-link"><a href="#project">Projetos</a></li>
          <li className="nav-link"><a href="#contact">Contato</a></li>
          {/* <li className="nav-link"><a href="#home3d">Versão 3D</a></li> */}

        </ul>
      </nav>
    </>
  )
}

export default Nav
