import { SiLinkedin, SiGithub, SiDiscord } from 'react-icons/si'
import { linkedin, github } from '../../../../utils/socials'
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

          <div className='absolute flex justify-between text-[45px] text-white right-64 mx-auto max-[768px]:hidden lg:hidden'>
            <li className='mx-4 hover:text-yellow-100 duration-300'>
              <a href={linkedin} target="_blank"
                rel="noopener noreferrer">
                <SiLinkedin />
              </a>
            </li>

            <li className='mx-4 hover:text-yellow-100 duration-300'>
              <a href={github} target="_blank"
                rel="noopener noreferrer">
                <SiGithub />
              </a>
            </li>

            <li className='mx-4 hover:text-yellow-100 duration-300'>
              <a href="" target="_blank"
                rel="noopener noreferrer">
                <SiDiscord />
              </a>
            </li>
          </div>

          <img className='rounded-full absolute right-10 md:right-16  lg:hidden w-4/4 h-3/4 ' src="https://avatars.githubusercontent.com/u/114263838?s=400&u=80660d84dad59c4193624bf00b3b2f03dbccb3b5&v=4" alt="foto" />

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
