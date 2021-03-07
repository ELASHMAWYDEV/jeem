import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
//Style
import "../styles/SubCategoryItem.scss";

//Assets
import SubCategoryImage from "../assets/img/subcategory-img.png";

const CategoryItem = () => {
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
        <h1 className="title">Carmela Hand</h1>
        <h5 className="description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis
        </h5>
      </div>
      <div className="img-container">
        <img src={SubCategoryImage} alt="Sub Category" />
      </div>
    </Link>
  );
};

export default CategoryItem;
