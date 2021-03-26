import { Link } from "react-router-dom";
import { IoMdNavigate } from "react-icons/io";
import { useTranslation } from "react-i18next";

//Styles
import "../styles/SubCategory.screen.scss";

//Components
import {
  Header,
  Footer,
  // Loading,
  SubCategoryItem,
  Pagination,
} from "../components/index";

const SubCategory = () => {
  const { t, i18n } = useTranslation("translations");

  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="subcategory-container">
        <div className="subcategory-header">
          <Link to="/category">
            <h2>{t("CATEGORY_TITLE")}</h2>
          </Link>
          <IoMdNavigate className="arrow-icon" />
          <Link to="/subcategory">
            <h3>{t("SUBCATEGORY_TITLE")}</h3>
          </Link>
        </div>
        <div className="subcategories-container">
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  );
};

export default SubCategory;
