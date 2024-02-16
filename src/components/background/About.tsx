const About = () => {
  return (
    <article className='flex flex-col h-full bg-[#04012a] pt-[4rem] pb-[4rem]'>
      <div className=' w-[80%] mx-auto items-center'>

        <div className='md:w-[55%]'>
          <h1 className='text-[45px] font-bold uppercase text-[#b6e655] mb-6 max-sm:text-[35px]'>
            Sobre mim
          </h1>

          <h2 className='text-[20px] md:text-[30px] lg:text-[45px] md:leading-[3rem] leading-[2rem]  mb-[2rem] font-bold text-white '>
            Amplie seu campo <span className='text-yellow-300'> de visão </span>
          </h2>

          <div className='mb-[2rem] flex items-center md:space-x-10'>
            <span className='w-[120px] hidden md:block h-[5px] bg-slate-400 roubded-sm'></span>
            <p className='text-[18px] text-[#ffffff92] w-[80%]'>
              Nada é perfeito, nada está completo, tudo está em constante movimento, e o que fica parado se torna obsoleto.
            </p>
          </div>
        </div>

        <div className='flex mt-20 items-center  text-left 2xl:ml-[42rem] xl:ml-[25rem] md:ml-[12rem] '>
          <span className='w-[120px] hidden md:block h-[5px] bg-slate-400 roubded-sm mr-[3rem] mt-[6rem]'></span>

          <div className='w-[85%]'>
            <h2 className='whitespace-nowrap text-[22px] md:text-[35px] lg:text-[45px] font-bold text-white leading-[4rem]'>
              O  <span className='text-yellow-300'>começo</span>
            </h2>

            <p className='text-[18px] text-[#ffffff92]  '>
              Eu sou o  <span className='text-yellow-300'>Herrison Souza</span>,
              desde janeiro de 2023, passei a me interessar pelo amplo mundo da tecnologia, tive a oportunidade de meses depois ingressar em um curso na <a href="">Cubos</a>,

              onde tive o auxilio inicial para construir uma base solida de conhecimento, me dando também o presente de conhecer pessoas e excelentes profissionais.
            </p>
          </div>
        </div>

        <div className='flex mt-20 items-center'>
          <span className='w-[120px] hidden md:block h-[5px] bg-slate-400 roubded-sm mr-[3rem] mt-[6rem]'></span>

          <div className='w-[50%] max-sm:w-[80%]'>
            <h2 className='whitespace-nowrap text-[22px] md:text-[35px] lg:text-[45px] font-bold text-white leading-[5rem] max-sm:text-[20px]'>
              Amante de <span className='text-yellow-300'>livros e esportes</span>
            </h2>

            <p className='text-[18px] text-[#ffffff92]  '>
              Pratico  <span className='text-yellow-300'>diariamente</span>,
              esportes, a natação e a leitura é onde busco, equilibrar corpo e alma com intuito de enfrentar os desafios do cotidiano.
            </p>
          </div>
        </div>

        <div className='flex mt-20 items-center  text-left 2xl:ml-[42rem] xl:ml-[25rem] md:ml-[12rem] '>

          <span className='w-[120px] hidden md:block h-[5px] bg-slate-400 roubded-sm mr-[3rem] mt-[6rem]'></span>

          <div className='w-[85%]'>

            <h2 className='whitespace-nowrap text-[22px] md:text-[35px] lg:text-[45px] font-bold text-white leading-[4rem]'>
              Olhando o <span className='text-yellow-300'>futuro</span>
            </h2>

            <p className='text-[18px] text-[#ffffff92]'>
              Olhando para o <span className='text-yellow-300'>horizonte</span>, almejo evoluir e empreender,
              desenvolvendo projetos robustos e eficientes com o propósito de beneficiar o máximo de pessoas possível.
              Investir em estudos sobre segurança cibernética e inteligências artificiais que possam contribuir significativamente para a sociedade
              é uma meta que estabeleço para meu caminho futuro.
            </p>
          </div>

        </div>

      </div>
    </article >
  )
}

export default About
