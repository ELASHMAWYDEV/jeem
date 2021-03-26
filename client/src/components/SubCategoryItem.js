import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { useTranslation } from "react-i18next";

//Style
import "../styles/SubCategoryItem.scss";

//Assets
// @ts-ignore
import SubCategoryImage from "../assets/img/subcategory-img.png";

const CategoryItem = () => {
  const { t, i18n } = useTranslation("translations");

  return (
    <Link to="/product" className="subcategory-item-container">
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
        <h1 className="title">{t("PRODUCT_TITLE")}</h1>
        <h5 className="description">{t("LOREM_IPSUM")}</h5>
      </div>
      <div className="img-container">
        <img src={SubCategoryImage} alt="Sub Category" />
      </div>
    </Link>
  );
};

export default CategoryItem;
