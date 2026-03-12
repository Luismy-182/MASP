import { Swiper, SwiperSlide } from "swiper/react"
import {Navigation, Pagination} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation'; //para la navegacion
import 'swiper/css/pagination'; //para la navegacion


const ProjectSlider = ({ images }) => {



  return (
    <>

      <Swiper
      modules={[Navigation, Pagination]}
        // spaceBetween={50} solo funciona cuando se muestran 2 juntas  o más
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}
      // onSlideChange={() => console.log('Slide change')} solo para debugging
      // onSwiper={(Swiper) => console.log(Swiper)}
      >

        {
          images.map((image, index) => {

          return <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
              loading="lazy"
                src={image}
                className="object-cover w-full h-full"
                alt="imagen-portafolio"
              />

            </div>
          </SwiperSlide>



        })
        }


      </Swiper>
    </>
  )
}

export default ProjectSlider