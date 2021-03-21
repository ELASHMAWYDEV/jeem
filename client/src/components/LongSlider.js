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
            <div className="slide-bg"></div>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <div className="over-img-txt">
                <h1>Jeem Building Solutions</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium
                </p>
              </div>
              <img src={SliderImage1} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <div className="slide-bg"></div>

            <a href="/" onClick={(e) => e.preventDefault()}>
              <div className="over-img-txt">
                <h1>Jeem Building Solutions</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium
                </p>
              </div>
              <img src={SliderImage2} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <div className="slide-bg"></div>

            <a href="/" onClick={(e) => e.preventDefault()}>
              <div className="over-img-txt">
                <h1>Jeem Building Solutions</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium
                </p>
              </div>
              <img src={SliderImage3} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
            <div className="slide-bg"></div>

            <a href="/" onClick={(e) => e.preventDefault()}>
              <div className="over-img-txt">
                <h1>Jeem Building Solutions</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium
                </p>
              </div>
              <img src={SliderImage1} alt="" />
            </a>
          </div>
        </SwiperSlide>
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
