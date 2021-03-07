import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

//Styles
import "../styles/RecommendedSlider.scss";

//Assets
import SliderImage3 from "../assets/img/slider1-2.jpeg";
import NextImage from "../assets/img/next.png";

const RecommendedSlider = () => {
  let slides = [];

  for (let i = 0; i <= 15; i++) {
    slides.push(
      <SwiperSlide tag="li">
        <div className="slide-container">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <div className="img-container">
              <img src={SliderImage3} alt="slider" />
            </div>
            <div className="content">
              <h2>Title goes here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis.
              </p>
            </div>
            <div className="footer">
              <p>775 SAR</p>
              <p>15% OFF</p>
            </div>
          </a>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="recommended-slider">
      <h1>
        Recommended For You<span></span>
      </h1>
      <Swiper
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        tag="section"
        wrapperTag="ul"
        navigation={{
          prevEl: ".next",
          nextEl: ".prev",
        }}
        pagination
      >
        {slides}
        <div className="prev">
          <img src={NextImage} alt="prev"/>
        </div>
        <div className="next">
          <img src={NextImage} alt="next"/>
        </div>
      </Swiper>
    </div>
  );
};

export default RecommendedSlider;
