import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

//Components
import { SubCategoryItem } from "./";

//Style
import "../styles/TabSlider.scss";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Autoplay]);

const TabSlider = () => {
  useEffect(() => {}, []);
  return (
    <div className="tab-slider-container">
      <Swiper
        className="slider-container"
        autoplay={{ delay: Math.floor(Math.random() * 5000) + 2000 }}
        pagination={{
          clickable: true,
          bulletClass: "tabs-slider-tab",
          bulletElement: "div",

          bulletActiveClass: "tabs-slider-tab-active",
        }}
      >
        <SwiperSlide>
          <SubCategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <SubCategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <SubCategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <SubCategoryItem />
        </SwiperSlide>
      </Swiper>
      <div className="slider-footer">
        <h2>Best Seller</h2>
      </div>
    </div>
  );
};

export default TabSlider;
