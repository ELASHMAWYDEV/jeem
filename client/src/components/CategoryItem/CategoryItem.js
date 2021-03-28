import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//Style
import "./style.scss";

//Assets
// @ts-ignore
import CategoryImage from "../../assets/img/category-img.png";

const CategoryItem = () => {
  const { t, i18n } = useTranslation("translations");

  return (
    <Link to="/subcategory" className="category-item-container">
      <div className="products-sum">254 {t('PRODUCT')}</div>
      <div className="img-container">
        <img src={CategoryImage} alt="Category" />
      </div>
      <div className="item-footer">
        <h2>{t('SUBCATEGORY_TITLE')}</h2>
      </div>
    </Link>
  );
};

export default CategoryItem;
