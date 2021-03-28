import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNavigate } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { IoMdStar } from "react-icons/io";
import { useTranslation } from "react-i18next";

//Components
import {
  Header,
  Footer,
  // Loading,
  SubCategoryItem,
  ReviewItem,
} from "../../components";

//Styles
import "./style.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// @ts-ignore
import ProductImage from "../../assets/img/subcategory-img.png";

SwiperCore.use([Pagination]);

const Product = () => {
  const { t, i18n } = useTranslation("translations");

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="product-container">
        <div className="product-header">
          <Link to="/category">
            <h2>{t("SUBCATEGORY_TITLE")}</h2>
          </Link>
          <IoMdNavigate className="arrow-icon" />
          <Link to="/subcategory">
            <h3>{t("SUBCATEGORY_TITLE")}</h3>
          </Link>
          <IoMdNavigate className="arrow-icon" />
          <Link to="/subcategory">
            <h3>{t("PRODUCT_TITLE")}</h3>
          </Link>
        </div>
        <div className="product-box">
          <div className="discount">%55 OFF</div>
          <div className="price">560 SAR</div>
          <div className="info-container">
            <div className="stars">
              <IoMdStar className="active" />
              <IoMdStar className="active" />
              <IoMdStar className="active" />
              <IoMdStar className="active" />
              <IoMdStar />
            </div>
            <h1 className="product-title">{t("PRODUCT_TITLE")}</h1>
            <h5 className="mini-desc">{t("LOREM_IPSUM")}</h5>
            <h3 className="semi-title">{t("PRODUCT_DESCRIPTION")}</h3>
            <h4 className="product-desc">
              {t("LOREM_IPSUM")}
              {t("LOREM_IPSUM")}
            </h4>
            <div className="product-footer">
              <div>
                <h3 className="semi-title">{t("SELLER")}</h3>
                <h4 className="seller">{t("JEEM_BUILDING_SOLUTIONS")}</h4>
              </div>
              <div className="quantity-container">
                <button
                  className="minus"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <h2>{quantity}</h2>
                <button
                  className="plus"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="cart-btn">
                {t("ADD_TO_CART")} <FaShoppingCart />
              </button>
            </div>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="images-container"
          >
            <SwiperSlide>
              <img src={ProductImage} alt="Product" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProductImage} alt="Product" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProductImage} alt="Product" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="product-page-footer">
          <div className="reviews-container">
            <h2>{t("REVIEWS")}</h2>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
          <div className="similar-container">
            <h2>{t("SIMILAR_PRODUCTS")}</h2>
            <SubCategoryItem />
            <SubCategoryItem />
            <SubCategoryItem />
            <SubCategoryItem />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
