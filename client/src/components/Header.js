import { Link } from "react-router-dom";

//Styles
import "../styles/Header.scss";

//Assets
import Logo from "../assets/img/logo.png";
import Cart from "../assets/img/shopping-cart.svg";
import SaudiArabia from "../assets/img/saudi-arabia.png";
import ExpandButton from "../assets/img/expand-button.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Jeem Logo" />
      </div>
      <div className="nav-container">
        <Link to="/">
          Home
          <span></span>
        </Link>
        <a href="/" onClick={(e) => e.preventDefault()}>
          Products
          <span></span>
          <div className="more-links">
            <img src={ExpandButton} alt="expand" />
          </div>
        </a>
        <a href="/" onClick={(e) => e.preventDefault()}>
          Traders
          <span></span>
        </a>
      </div>
      <div className="btns-container">
        <div className="cart-container">
          <Link to="/cart">
            <div className="number-on-cart">2</div>
            <img src={Cart} alt="Cart" />
          </Link>
        </div>
        <div className="auth-btn">
          <Link to="/auth">Login / Register</Link>
        </div>
        <div className="lang-btn-container">
          <span></span>
          <p>العربية</p>
          <img src={SaudiArabia} alt="العربية" />
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search For Product" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
