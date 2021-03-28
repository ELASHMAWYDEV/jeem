import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { HiMenu } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import { useTranslation } from "react-i18next";

//Components
import { NotificationsBox } from "..";

//Styles
import "./style.scss";

//Assets
// @ts-ignore
import Logo from "../../assets/img/logo.png";
// @ts-ignore
import Cart from "../../assets/img/shopping-cart.svg";
// @ts-ignore
import SaudiArabia from "../../assets/img/saudi-arabia.png";
// @ts-ignore
import UnitedKingdom from "../../assets/img/united-kingdom.png";
// @ts-ignore
import ExpandButton from "../../assets/img/expand-button.svg";

const Header = () => {
  const { t, i18n } = useTranslation("translations");

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [bntsContainerVisible, setBntsContainerVisible] = useState(false);
  const [navContainerVisible, setNavContainerVisible] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const [langSelectActive, setLangSelectActive] = useState(false);

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
      <Link to="/" className="logo-container">
        <img src={Logo} alt="Jeem Logo" />
      </Link>
      <div
        ref={navContainerRef}
        className={`nav-container${navContainerVisible ? " visible" : ""}`}
      >
        <Link to="/">
          {t("HOME")}
          <span></span>
        </Link>
        <a href="/" onClick={(e) => e.preventDefault()}>
          {t("PRODUCTS")}
          <span></span>
          <div className="more-links">
            <img src={ExpandButton} alt="expand" />
          </div>
        </a>
        <a href="/" onClick={(e) => e.preventDefault()}>
          {t("TRADERS")}
          <span></span>
        </a>
      </div>
      <div
        className="notification-icon-container"
        onClick={() => setNotificationActive(!notificationActive)}
      >
        <MdNotifications className="notification-icon" />
        <NotificationsBox active={notificationActive} />
      </div>
      <Link to="/cart" className="cart-icon-container">
        <div className="number-on-cart">2</div>
        <img src={Cart} alt="Cart" />
      </Link>
      <div
        ref={btnsContainerRef}
        className={`btns-container${bntsContainerVisible ? " visible" : ""}`}
      >
        <Link to="/auth" className="auth-btn">
          {t("LOGIN_REGISTER")}
        </Link>
        <div
          className={`lang-btn-container ${langSelectActive ? "active" : ""}`}
          onClick={() => setLangSelectActive(!langSelectActive)}
        >
          <span className="arrow"></span>
          {i18n.language == "ar" ? (
            <div>
              <p>العربية</p>
              <img src={SaudiArabia} alt="العربية" />
            </div>
          ) : (
            <div>
              <p>English</p>
              <img src={UnitedKingdom} alt="English" />
            </div>
          )}
          <div className="languages-container">
            <div onClick={() => i18n.changeLanguage("en")}>
              <p>English</p>
              <img src={UnitedKingdom} alt="English" />
            </div>
            <div onClick={() => i18n.changeLanguage("ar")}>
              <p>العربية</p>
              <img src={SaudiArabia} alt="العربية" />
            </div>
          </div>
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
          <input type="text" placeholder={t("SEARCH_FOR_PRODUCTS")} />
          <button>{t("SEARCH")}</button>
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
