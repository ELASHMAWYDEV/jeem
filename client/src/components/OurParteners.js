import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

//Styles
import "../styles/OurParteners.scss";

//Assets
import NextImage from "../assets/img/next.png";
import SliderImage from "../assets/img/order-img.png";

const OurParteners = () => {
  SwiperCore.use([Navigation, Pagination]);

  let slides = [];

  for (let i = 0; i <= 20; i++) {
    slides.push(
      <SwiperSlide>
        <div className="partener">
          <img src={SliderImage} alt="" />
        </div>
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
        parallax={true}
        navigation={{
          prevEl: ".next-partener",
          nextEl: ".prev-partener",
        }}
        pagination
        breakpoints={{
          1280: {
            slidesPerView: 10,
          },
          1024: {
            slidesPerView: 7,
          },
          768: {
            slidesPerView: 5,
          },
          520: {
            slidesPerView: 3.5,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          360: {
            slidesPerView: 2.2,
          },
          100: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
        }}
      >
        {slides}
        <div className="prev-partener">
          <img src={NextImage} alt="previous" />
        </div>
        <div className="next-partener">
          <img src={NextImage} alt="next" />
        </div>
      </Swiper>
    </div>
  );
};

export default OurParteners;
