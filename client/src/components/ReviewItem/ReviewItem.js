import { IoMdStar } from "react-icons/io";

//Style
import "./style.scss";

//Assets
import ReviewImage from "../../assets/img/review-pic.jpeg";

const ReviewItem = () => {
  return (
    <div className="review-item-container">
      
      <div className="info">
        <div className="info-header">
          <h2>Ahmed Mosaad</h2>
          <div className="stars">
            <IoMdStar className="active" />
            <IoMdStar className="active" />
            <IoMdStar className="active" />
            <IoMdStar className="active" />
            <IoMdStar />
          </div>
        </div>
        <div className="content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis
        </div>
      </div>
      <div className="img-container">
        <div>
          <img src={ReviewImage} alt="Review" />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
