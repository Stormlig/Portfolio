import Slider from 'react-slick'

const ProjectMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <article className="flex flex-col justify-center items-center w-[80%] pt-16 md:pt-32 pb-20 mx-auto">
      <h1 className="heading">
        Meus <span className="text-[#b6e655]">Projetos</span>
      </h1>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[3rem] mt-[4rem] text-white md:mx-auto xl:mx-auto 2xl:mx-auto">
        {/* Seu código de grid original aqui */}
      </div>

      <div className="md:hidden">
        <Slider {...settings}>
          {/* Adicione um slide para cada projeto */}
          <div>
            <img src="/devorum.png" alt="Devorum" />
            <a href="https://devorum.vercel.app/">Link para acesso</a>
          </div>
          {/* Repita para outros projetos */}
        </Slider>
      </div>

      <p>ADD um SLIDE para exibir mais cards</p>
    </article>
  )
}

export default ProjectMobile
