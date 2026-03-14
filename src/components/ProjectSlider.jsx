
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { useRef } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ChevronLeft, ChevronRight } from "lucide-react"

const ProjectSlider = ({ images = [] }) => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative h-full">

      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
      >
        <ChevronLeft className="w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow" />
      </button>

      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
      >
        <ChevronRight className="w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow" />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                loading="lazy"
                src={img}
                className="object-fill w-full h-full"
                alt="imagen-portafolio"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default ProjectSlider
