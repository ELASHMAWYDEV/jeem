import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

//Styles
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-footer">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque nisl eros.
          </p>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="social-icons">
            <a href="/">
              <SiFacebook className="facebook"/>
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
          <h3>Discover</h3>
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
        <div className="copyright">
          Copyright © 2020 Jeem Building Solutions
        </div>
        <div className="links">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Home
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            Terms of Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
