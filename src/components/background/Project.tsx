const Project = () => {
  return (
    <article className="flex flex-col justify-center items-center w-[80%] pt-16 md:pt-32 pb-20 mx-auto">
      <h1 className="heading">
        Meus <span className="text-[#b6e655]">Projetos</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[3rem] mt-[4rem] text-white md:mx-auto xl:mx-auto 2xl:mx-auto">

        <div className="text-center text-[20px] ">

          <div className="card">
            <div className="front">
              <img className="bg-contain h-full w-full" src="/devorum.png" alt="imagem pagina de login" />

            </div>
            <div className="back flex flex-col justify-center  ">
              <img className="bg-contain h-full " src="/backend-devorum.png" alt="" />

              <a href="https://devorum.vercel.app/">
                Link para acesso
              </a>

            </div>
          </div>

        </div>

        <div className=" text-center text-[20px]   ">

          <div className="card">
            <div className="front">
              <img className="bg-contain h-full" src="/SmartManager.png" alt="imagem tela inicial" />
            </div>

            <div className="back">
              <a href="https://github.com/Vortex-Technology/SmartManager-HJV-Electron">
                Link do repositório
              </a>
            </div>
          </div>

        </div>

        <div className=" text-center text-[20px]  ">

          <div className="card">
            <div className="front">
              <img className="bg-contain h-full" src="/game-car.png" alt="imagem do game-car" />
            </div>
            <div className="back">
              <a href="https://portfolio-game-mu-93.vercel.app/">Link para acesso</a>
            </div>
          </div>

        </div>

        <div className=" text-center text-[20px]   ">

          <div className="card">
            <div className="front">
              <img className="bg-cover h-full" src="/e-commerce.png" alt="" />
            </div>
            <div className="back"><a href="https://e-commerce-six-red.vercel.app/">Link para acesso</a></div>
          </div>

        </div>

        <div className=" text-center text-[20px]   ">

          <div className="card">
            <div className="front">
              <img className="bg-cover h-full w-full" src="/first-web-site.png" alt="" />
            </div>
            <div className="back"><a href="https://stormlig.github.io/Projeto-Website/index.html#">Link para acesso</a></div>
          </div>

        </div>

      </div>

      <p>ADD um SLIDE para exibir mais cards</p>

    </article>
  )
}

export default Project
