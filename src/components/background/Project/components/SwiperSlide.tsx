import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { allProjects } from '../data/allProjects'
import 'swiper/css'
import 'swiper/css/pagination'

const Carousel = () => {
  return (
    <section id="project" className="w-[80%]  pb-24 pt-20 md:pt-52 mx-auto">
      <h1 className="heading mb-10">
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
        {allProjects.map((project, index) => (
          <SwiperSlide key={index}>

            <div v-if={project.media !== null} className="relative">
              <img src={project.media}
                className="w-full h-[510px] md:h-[800px] object-cover blur-sm opacity-20 rounded-md"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-4">
                {project.title}
              </h1>

              <p className="mx-2 leading-7 max-sm:text-[19px] md:text-[24px] xl:w-2/4 cursor-default ">
                {project.description}
              </p>

              <a v-if={project.link !== null}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 py-2 px-7 rounded-md font-bold mt-20 transition-all"
              >
                Confira
              </a>
            </div>

          </SwiperSlide>

        ))}
      </Swiper>

    </section >
  )
}

export default Carousel