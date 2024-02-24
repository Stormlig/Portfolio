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
        <div className="relative">
          <img
            src={project.media}
            className="w-full h-[510px] md:h-[800px] object-cover blur-sm opacity-20 rounded-md"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-1 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-4">{project.title}</h1>
          <p className="mx-2 leading-7 max-sm:text-[19px] md:text-[24px] xl:w-2/4 cursor-default ">{project.description}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 py-2 px-7 rounded-md font-bold mt-20 transition-all"
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
