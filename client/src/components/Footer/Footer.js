import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";

const Footer = () => {
  const { t, i18n } = useTranslation("translations");

  return (
    <div className="footer-container">
      <div className="first-footer">
        <div className="about-us">
          <h3>{t("ABOUT_US")}</h3>
          <p>{t("LOREM_IPSUM")}</p>
        </div>
        <div className="contact-us">
          <h3>{t("CONTACT_US")}</h3>
          <div className="social-icons">
            <a href="/">
              <SiFacebook className="facebook" />
            </a>
            <a href="/">
              <AiOutlineTwitter />
            </a>
            <a href="/">
              <AiFillYoutube />
            </a>
            <a href="/">
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="discover">
          <h3>{t("DISCOVER")}</h3>
          <div className="links">
            <a href="/" onClick={(e) => e.preventDefault()}>
              Link 1
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Link 2
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Link 3
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Link 4
            </a>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <div className="copyright">{t("COPYRIGHT")}</div>
        <div className="links">
          <a href="/" onClick={(e) => e.preventDefault()}>
            {t("HOME")}
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            {t("PRIVACY_POLICY")}
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            {t("TERMS_OF_SERVICES")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
