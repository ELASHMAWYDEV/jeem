import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";

//Assets
// @ts-ignore
import SliderImage3 from "../../assets/img/slider1-2.jpeg";
// @ts-ignore
import NextImage from "../../assets/img/next.png";

const RecommendedSlider = () => {
  const { t, i18n } = useTranslation("translations");

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
              <h2>{t("PRODUCT_TITLE")}</h2>
              <p>{t("LOREM_IPSUM")}</p>
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
        dir={i18n.dir()}
      >
        {slides}
        <div className="prev">
          <img src={NextImage} alt="prev" />
        </div>
        <div className="next">
          <img src={NextImage} alt="next" />
        </div>
      </Swiper>
    </div>
  );
};

export default RecommendedSlider;
