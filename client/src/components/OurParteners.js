import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

//Styles
import "../styles/OurParteners.scss";

//Assets 
import NextImage from "../assets/img/next.png";

const OurParteners = () => {
  SwiperCore.use([Navigation, Pagination]);

  let slides = [];

  for (let i = 0; i <= 20; i++) {
    slides.push(
      <SwiperSlide>
        <div className="partener"></div>
      </SwiperSlide>
    );
  }

  return (
    <div className="our-parteners">
      <h1>
        Our Parteners<span></span>
      </h1>
      <Swiper
        slidesPerView={8}
        tag="section"
        wrapperTag="ul"
        navigation={{
          prevEl: ".next-partener",
          nextEl: ".prev-partener",
        }}
        pagination
      >
        {slides}
        <div className="prev-partener">
          <img src={NextImage} alt="previous"/>
        </div>
        <div className="next-partener">
          <img src={NextImage} alt="next"/>
        </div>
      </Swiper>
    </div>
  );
};

export default OurParteners;
