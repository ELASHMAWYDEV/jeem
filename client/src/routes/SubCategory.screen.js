import { Link } from "react-router-dom";
import { IoMdNavigate } from "react-icons/io";

//Styles
import "../styles/SubCategory.screen.scss";

//Components
import {
  Header, Footer,
  // Loading,
  SubCategoryItem, Pagination
} from "../components/index";

const SubCategory = () => {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="subcategory-container">
        <div className="subcategory-header">
          <Link to="/category">
            <h2>Turnkey Contractor</h2>
          </Link>
          <IoMdNavigate className="arrow-icon" />
          <Link to="/subcategory">
            <h3>Gold Key</h3>
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
