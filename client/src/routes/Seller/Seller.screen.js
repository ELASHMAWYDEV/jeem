import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { IoMdNavigate } from "react-icons/io";

//Style
import "./style.scss";

//Components
import {
  Header,
  Footer,
  Loading,
  SubCategoryItem,
  Pagination,
} from "../../components";
import { IoIosChatbubbles } from "react-icons/io";

//Assets
// @ts-ignore
import AvatarImage from "../../assets/img/review-pic.jpeg";

const Seller = () => {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="seller-container">
        <div className="seller-header">
          <Link to="/">
            <h2>Sellers</h2>
          </Link>
          <IoMdNavigate className="arrow-icon" />

          <Link to="/seller/2">
            <h3>Jeem Building Solutions</h3>
          </Link>
        </div>
        <div className="seller-box">
          <div className="img-container">
            <img src={AvatarImage} alt="avatar" />
          </div>
          <div className="info-container">
            <div>
              <div>
                <h2>Name</h2>
                <h3>Mahmoud ELashmawy</h3>
              </div>
              <div>
                <h2>Email</h2>
                <h3>elashmawydev@gmail.com</h3>
              </div>
            </div>
            <div>
              <div>
                <h2>Phone</h2>
                <h3>+201064544529</h3>
              </div>
              <div>
                <h2>Country</h2>
                <h3>Egypt</h3>
              </div>
            </div>
            <div>
              <div>
                <h2>Address</h2>
                <h3>85206 Brannon Lakes Apt. 606Leilanihaven, IL 81296-2931</h3>
              </div>
            </div>
          </div>
          <div className="chat-container">
            <p>Chat will be available soon...</p>
            <button>
              <IoIosChatbubbles />
              <p>Chat with the seller</p>
            </button>
          </div>
        </div>

        <div className="products-container">
          <div className="products-header">
            <h2>Products</h2>
            <div className="filter">
              <div className="filter-svg">
                <FaFilter />
              </div>
              <p>Price low to high</p>
            </div>
          </div>
          <div className="products-grid">
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
      </div>
    </>
  );
};

export default Seller;
