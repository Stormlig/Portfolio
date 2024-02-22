const About = () => {
  return (
    <section id="about" className='flex flex-col h-full bg-[#04012a] pt-[4rem] pb-[4rem]'>
      <div className=' w-[80%] mx-auto items-center'>

        <div className='md:w-[70%]'>
          <h1 className='text-[45px] font-bold uppercase text-[#b6e655] mb-6 max-sm:text-[35px]'>
            Sobre mim
          </h1>

          <h2 className='text-[20px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] mt-[2rem] mb-[1rem] font-bold text-white'>
            Primeiros  <span className="text-yellow-300">passos</span>
          </h2>

          <div className='mb-[2rem] flex items-center md:space-x-10'>
            <p className='text-[18px] md:text-[22px] text-[#ffffffc7] '>
              Olá eu sou o <span>Herrison Souza</span>.
              O Começo da jornada no mundo da programação foi em 2022.
              Lá, construí relacionamentos significativos com colegas de classe que hoje são excelentes profissionais em suas respectivas áreas. Essa rede de contatos não apenas enriqueceu minha experiência de aprendizado, mas também me proporcionou oportunidades valiosas de colaboração e crescimento profissional.
            </p>
          </div>
        </div>

        {/* cap 2 */}
        <div className='flex mt-20 items-center  text-left 2xl:ml-[42rem] xl:ml-[25rem] md:ml-[6rem] '>
          <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 roubded-sm mr-[3rem] mt-[4rem]'></span>

          <div className='md:w-[80%] '>
            <h2 className='whitespace-nowrap text-[22px] md:text-[35px] lg:text-[45px] font-bold text-white leading-[4rem]'>
              O <span className='text-yellow-300'>caminho</span>
            </h2>

            <p className='text-[18px] md:text-[22px] text-[#ffffffc7] '>
              Estou comprometido em continuar minha jornada de aprendizado e desenvolvimento, explorando novas tecnologias e desafios, e contribuindo para projetos que tenham um impacto positivo em nossa comunidade.
            </p>
          </div>
        </div>

        {/* cap 3 */}
        <div className='flex mt-20 items-center'>
          <div className='md:w-[70%]'>
            <h2 className='whitespace-nowrap text-[22px] md:text-[35px] lg:text-[45px] font-bold text-white leading-[5rem] max-sm:text-[20px]'>
              O <span className='text-yellow-300'> amante </span>
            </h2>

            <p className='text-[18px] md:text-[22px] text-[#ffffffc7]'>
              De livros, esportes, investimento e empreendedorismo,
              sou um autodidata dedicado a explorar e absorver conhecimento de diversas áreas. Meu amor pela leitura me transporta para mundos diferentes, enquanto a prática de esportes me mantém ativo e equilibrado. Além disso, procuro constantemente oportunidades de investimento e aprendizado no campo do empreendedorismo, sempre buscando expandir meus horizontes e alcançar novos patamares de sucesso.
            </p>
          </div>
        </div>

        {/* cap 4 */}
        <div className='flex mt-20 items-center  text-left 2xl:ml-[42rem] xl:ml-[25rem] md:ml-[6rem] '>

          <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 roubded-sm mr-[3rem] mt-[6rem]'></span>

          <div className='md:w-[80%]'>

            <h2 className='whitespace-nowrap text-[22px] md:text-[35px] lg:text-[45px] font-bold text-white leading-[4rem]'>
              O <span className='text-yellow-300'>horizonte</span>
            </h2>

            <p className='text-[18px] md:text-[22px] text-[#ffffffc7]'>
              Além disso, estou sempre aberto a novas oportunidades e desafios, buscando constantemente expandir meus horizontes e aprimorar minhas habilidades para me tornar um profissional mais completo e eficaz
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
