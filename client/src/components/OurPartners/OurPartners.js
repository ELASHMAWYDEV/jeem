import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

//Assets
// @ts-ignore
import NextImage from "../../assets/img/next.png";
// @ts-ignore
import SliderImage from "../../assets/img/order-img.png";

const OurPartners = () => {
  // @ts-ignore
  const { t, i18n } = useTranslation("translations");

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
        {t("OUR_PARTNERS")}
        <span></span>
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
        dir={i18n.dir()}
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

export default OurPartners;
