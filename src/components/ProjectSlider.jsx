import { Swiper, SwiperSlide } from "swiper/react"
import 'Swiper/css';


const ProjectSlider = ({ images }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('Slide change')}
        onSwiper={(Swiper) => console.log(Swiper)}
      >
        <SwiperSlide>
          <div className="object-cover w-full h-full">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover w-full h-full">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover w-full h-full">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover w-full h-full">
            Slide 4
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default ProjectSlider