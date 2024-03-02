import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { allProjects } from '../data/allProjects'
import 'swiper/css'
import 'swiper/css/pagination'
import { useMemo } from 'react'

const Carousel = () => {
  const slides = useMemo(() => {
    return allProjects.map((project, index) => (
      <SwiperSlide key={index}>
        <div className="relative flex justify-center">
          <img
            src={project.media}
            className=" h-[420px] md:h-[850px] md:w-[650px]  min-[769px]:h-[900px] xl:h-[1200px] xl:w-[820px]  object-cover blur-sm opacity-20 rounded-md"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-1 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-4">{project.title}</h1>
          <p className="mx-4 leading-7 max-sm:text-[19px] min-[429px]:w-[50%] md:text-[24px] xl:w-[42%] cursor-default ">{project.description}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-600 py-3 px-9 rounded-md font-extrabold mt-20 transition-all text-gray-800 "
          >
            Confira
          </a>

        </div>
      </SwiperSlide>
    ))
  }, [allProjects])

  return (
    <section id="project" className="w-[80%]  pb-28 pt-20 md:pt-44 mx-auto">
      <h1 className="heading mb-20">
        Meus <span className="text-[#b6e655]">Projetos</span>
      </h1>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </section>
  )
}

export default Carousel
