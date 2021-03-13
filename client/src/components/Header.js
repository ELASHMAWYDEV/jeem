import { useState, useRef, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

//Styles
import "../styles/Header.scss";

//Assets
// @ts-ignore
import Logo from "../assets/img/logo.png";
// @ts-ignore
import Cart from "../assets/img/shopping-cart.svg";
// @ts-ignore
import SaudiArabia from "../assets/img/saudi-arabia.png";
// @ts-ignore
import ExpandButton from "../assets/img/expand-button.svg";

const Header = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [bntsContainerVisible, setBntsContainerVisible] = useState(false);
  const [navContainerVisible, setNavContainerVisible] = useState(false);

  const searchBarRef = useRef(null);
  const btnsContainerRef = useRef(null);
  const navContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mouseup", handleContainer);
  }, []);

  //Handle boxs
  const handleContainer = (e) => {
    if (
      searchBarVisible &&
      searchBarRef.current &&
      !searchBarRef.current.contains(e.target)
    ) {
      setSearchBarVisible(false);
    }
    if (
      bntsContainerVisible &&
      btnsContainerRef.current &&
      !btnsContainerRef.current.contains(e.target)
    ) {
      setBntsContainerVisible(false);
    }
    if (
      navContainerVisible &&
      navContainerRef.current &&
      !navContainerRef.current.contains(e.target)
    ) {
      setNavContainerVisible(false);
      setBntsContainerVisible(false);
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Jeem Logo" />
      </div>
      <div
        ref={navContainerRef}
        className={`nav-container${navContainerVisible ? " visible" : ""}`}
      >
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
      <Link to="/cart" className="cart-icon-container">
        <div className="number-on-cart">2</div>
        <img src={Cart} alt="Cart" />
      </Link>
      <div
        ref={btnsContainerRef}
        className={`btns-container${bntsContainerVisible ? " visible" : ""}`}
      >
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
        <div
          className="search-icon"
          onClick={(e) => setSearchBarVisible(!searchBarVisible)}
        >
          <ImSearch />
        </div>
        <div
          ref={searchBarRef}
          className={`search-bar${searchBarVisible ? " visible" : ""}`}
        >
          <input type="text" placeholder="Search For Product" />
          <button>Search</button>
        </div>
      </div>
      <div
        className="burger-menu"
        onClick={() => {
          setBntsContainerVisible(!bntsContainerVisible);
          setNavContainerVisible(!navContainerVisible);
        }}
      >
        <HiMenu />
      </div>
    </div>
  );
};

export default Header;
