import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNavigate } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { IoMdStar } from "react-icons/io";

//Components
import {
  Header,
  Footer,
  // Loading,
  SubCategoryItem,
  ReviewItem,
} from "../components/index";

//Styles
import "../styles/Product.screen.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import ProductImage from "../assets/img/subcategory-img.png";

SwiperCore.use([Pagination]);

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="product-container">
        <div className="product-header">
          <Link to="/category">
            <h2>Turnkey Contractor</h2>
          </Link>
          <IoMdNavigate className="arrow-icon" />
          <Link to="/subcategory">
            <h3>Gold Key</h3>
          </Link>
          <IoMdNavigate className="arrow-icon" />
          <Link to="/subcategory">
            <h3>Carmela Hand</h3>
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
            <h1 className="product-title">Carmela Hand</h1>
            <h5 className="mini-desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis
            </h5>
            <h3 className="semi-title">Product Description</h3>
            <h4 className="product-desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est,
            </h4>
            <div className="product-footer">
              <div>
                <h3 className="semi-title">Seller</h3>
                <h4 className="seller">Jeem Building Solutions</h4>
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
                Add to cart <FaShoppingCart />
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
            <h2>Reviews</h2>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
          <div className="similar-container">
            <h2>Similar Products</h2>
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
