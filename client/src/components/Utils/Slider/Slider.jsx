import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slider.scss";
const Slider = ({images}) => {


  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={20}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    
    >
      {images.map((image)=>{
        return (
        <SwiperSlide><img src={image.photo} alt="" /></SwiperSlide>)
      })}

    </Swiper>
  );
};

export default Slider;
