import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//Styles
import "../styles/Category.screen.scss";

//Components
import { Header, Footer, Loading, CategoryItem } from "../components/index";

const Category = () => {
  const { t, i18n } = useTranslation("translations");
  return (
    <>
      <Loading />
      <Header />
      <div className="category-container">
        <div className="category-header">
          <Link to="/category">
            <h2>{t("CATEGORY_TITLE")}</h2>
          </Link>
        </div>
        <div className="categories-container">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
