import { IoMdStar } from "react-icons/io";

//Style
import "../styles/RectProduct.scss";

//Assets
// @ts-ignore
import SubCategoryImage from "../assets/img/subcategory-img.png";

const RectProduct = ({ active = false }) => {
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
    </div>
  );
};

export default RectProduct;
