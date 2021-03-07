import { Link } from "react-router-dom";

//Style
import "../styles/CategoryItem.scss";

//Assets
import CategoryImage from "../assets/img/category-img.png";

const CategoryItem = () => {
  return (
    <Link to="/subcategory" className="category-item-container">
      <div className="products-sum">254 Product</div>
      <div className="img-container">
        <img src={CategoryImage} alt="Category" />
      </div>
      <div className="item-footer">
        <h2>Gold Key</h2>
      </div>
    </Link>
  );
};

export default CategoryItem;
