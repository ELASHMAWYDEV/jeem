import { IoMdStar } from "react-icons/io";
import { useTranslation } from "react-i18next";

//Style
import "../styles/RectProduct.scss";

//Assets
// @ts-ignore
import SubCategoryImage from "../assets/img/subcategory-img.png";

const RectProduct = ({ active = false }) => {
  const { t, i18n } = useTranslation("translations");

  return (
    <div className={`rect-product-container ${active ? "active" : ""}`}>
      <div className="stars">
        <IoMdStar className="active" />
        <IoMdStar className="active" />
        <IoMdStar className="active" />
        <IoMdStar className="active" />
        <IoMdStar />
      </div>
      <div className="info-container">
        <h1 className="title">{t("PRODUCT_TITLE")}</h1>
        <h5 className="description">{t("LOREM_IPSUM")}</h5>
      </div>
      <div className="img-container">
        <img src={SubCategoryImage} alt="Sub Category" />
      </div>
    </div>
  );
};

export default RectProduct;
