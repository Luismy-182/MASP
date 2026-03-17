
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { useRef } from "react"
import { useState } from "react"


import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ChevronLeft, ChevronRight } from "lucide-react"

const ProjectSlider = ({ images = [] }) => {

  const [current, setCurrent] = useState(1); //diapositivas
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative h-full group">

      <button
        ref={prevRef}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:scale-110 hover:cursor-pointer "
      >
        <ChevronLeft className="w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow " />
      </button>

      <button
        ref={nextRef}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:scale-110 hover:cursor-pointer "
      >
        <ChevronRight className="w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow" />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}

        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation
        className="h-full"
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
      >

        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                loading="lazy"
                src={img}
                className="object-contain w-full h-full bg-neutral-900  p-2 cursor-grab active:cursor-grabbing"
                alt="imagen-portafolio"
              />


            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-3 right-3 z-10 text-xs bg-black/60 text-white px-2 py-1 rounded-md backdrop-blur-sm">
        {current} / {images.length}
      </div>


    </div>
  )
}

export default ProjectSlider
