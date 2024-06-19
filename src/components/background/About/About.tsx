const About = () => {
  return (
    <section id="about" className='flex flex-col h-full bg-[#04012a] pt-[4rem] pb-[4rem]'>
      <div className=' w-[80%] mx-auto items-center'>

        <h1 className='text-[45px] text-center md:text-[55px] font-bold uppercase text-[#b6e655] mb-6 max-sm:text-[35px]'>
          Sobre mim
        </h1>

        <div className='md:w-[70%]'>
          <h2 className='text-[20px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] mt-[2rem] mb-[1rem] font-bold text-white'>
            Primeiros  <span className="text-yellow-300">passos</span>
          </h2>

          <div className='mb-[2rem] flex items-center md:space-x-10'>
            <p className='text-[18px] md:text-[22px] text-[#ffffffc7] '>
              Eu sou o <span>Herrison Souza</span>.
              Começando minha jornada no mundo da programação lá em 2022, trilhei um caminho cheio de descobertas e aprendizados. Construí relacionamentos significativos com colegas de classe que, hoje, se tornaram excelentes profissionais em suas respectivas áreas. Essa rede de contatos não apenas enriqueceu minha experiência de aprendizado, mas também me proporcionou oportunidades valiosas de colaboração e crescimento profissional.
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
              Além <span className='text-yellow-300'> disso </span>
            </h2>

            <p className='text-[18px] md:text-[22px] text-[#ffffffc7]'>
              Sou amante de livros, esportes, investimento e empreendedorismo,
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
              Estou sempre aberto a novas oportunidades e desafios. Seja para colaborar em projetos, discutir ideias ou simplesmente trocar conhecimentos sobre finanças, filosofia ou qualquer outro tema interessante, estou pronto para embarcar nessa jornada ao seu lado.
            </p>

          </div>
        </div>

        <div className="flex justify-center items-center  my-40">
          <h2 className="text-slate-300 italic font-semibold text-[24px] w-[60%] md:w-[70%] md:text-center max-[360px]:text-[18px] max-sm:w-[100%] ">Então, vamos conversar? Estou ansioso para saber mais sobre você e como podemos colaborar juntos!</h2>
        </div>

      </div>
    </section>
  )
}

export default About
