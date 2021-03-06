import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Parallax } from "swiper";
import { useTranslation } from "react-i18next";

//Components
import { SubCategoryItem, RectProduct } from "../";

//Style
import "./style.scss";

SwiperCore.use([Autoplay, Parallax]);

const RectSlider = () => {
  const { i18n } = useTranslation("translations");

  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const products = [
    {
      active: true,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
  ];

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 1280 && width > 1024) {
      setSlidesPerView(3);
    } else if (width < 1024 && width > 768) {
      setSlidesPerView(4);
    }
  }, []);
  return (
    <div className="rect-slider-container">
      <SubCategoryItem />
      <Swiper
        className="rects-slider"
        spaceBetween={100}
        parallax={true}
        dir={i18n.dir()}
        breakpoints={{
          1280: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          520: {
            slidesPerView: 3.5,
          },
          480: {
            slidesPerView: 2.5,
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
        {products &&
          products.map((item, i) => (
            <SwiperSlide onClick={() => setActiveSlide(i)}>
              <RectProduct active={i == activeSlide} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RectSlider;
