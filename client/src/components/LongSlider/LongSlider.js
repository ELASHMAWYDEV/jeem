import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

//Assets
// @ts-ignore
import SliderImage1 from "../../assets/img/slider1.jpeg";
// @ts-ignore
import SliderImage2 from "../../assets/img/slider1-1.jpeg";
// @ts-ignore
import SliderImage3 from "../../assets/img/slider1-2.jpeg";
// @ts-ignore
import NextImage from "../../assets/img/next.png";

const LongSlider = () => {
  const { t, i18n } = useTranslation("translations");

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
        loop
        dir={i18n.dir()}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide tag="li">
            <div className="slider-slide">
              <div className="slide-bg"></div>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <div className="over-img-txt">
                  <h1>{t("JEEM_BUILDING_SOLUTIONS")}</h1>
                  <p>{t("LOREM_IPSUM")}</p>
                </div>
                <img src={SliderImage1} alt="" />
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev-img">
          <img src={NextImage} alt="" />
        </div>
        <div className="next-img">
          <img src={NextImage} alt="" />
        </div>
      </Swiper>
    </div>
  );
};

export default LongSlider;
