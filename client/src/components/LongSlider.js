import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

//Styles
import "../styles/LongSlider.scss";

//Assets
import SliderImage1 from "../assets/img/slider1.jpeg";
import SliderImage2 from "../assets/img/slider1-1.jpeg";
import SliderImage3 from "../assets/img/slider1-2.jpeg";
import NextImage from "../assets/img/next.png";

const LongSlider = () => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div className="long-slider">
      <Swiper
        slidesPerView={1}
        tag="section"
        wrapperTag="ul"
        navigation={{
          prevEl: ".next-img",
          nextEl: ".prev-img",
        }}
        pagination
      >
        <SwiperSlide tag="li">
          <div className="slider-slide">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <img src={SliderImage1} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <img src={SliderImage2} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <img src={SliderImage3} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <img src={SliderImage1} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <div className="prev-img">
          <img src={NextImage} alt=""/>
        </div>
        <div className="next-img">
          <img src={NextImage} alt=""/>
        </div>
      </Swiper>
    </div>
  );
};

export default LongSlider;
