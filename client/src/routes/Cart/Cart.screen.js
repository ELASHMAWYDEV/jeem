import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";

//Components
import {
  Header,
  Footer,
  CartItem,
  // Loading
} from "../../components";

const MyCart = () => {
  const { t, i18n } = useTranslation("translations");

  const [items, setItems] = useState([
    {
      id: 1,
    },
    { id: 2 },
    { id: 3 },
  ]);

  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="cart-container">
        <h1>{t("MY_CART")}</h1>
        <div className="cart-box">
          <div className="cart-content">
            {/* <div> */}
            <div className="cart-header">
              <h3>{t("PRODUCT")}</h3>
              <h3>{t("PRICE")}</h3>
              <h3>{t("NEGO_PRICE")}</h3>
              <h3>{t("QUANTITY")}</h3>
              <h3>{t("SUBTOTAL")}</h3>
            </div>
            <span className="line-separator"></span>
            {items.map((item, i) => (
              <CartItem
                key={i}
                onDelete={() => {
                  let newItems = items.filter((j) => j.id != item.id);
                  setItems(newItems);
                }}
              />
            ))}
            {/* </div> */}
          </div>
          <span className="line-separator"></span>
          <div className="cart-footer">
            <Link to="/" className="continue-shopping">
              <span></span>
              {t("CONTINUE_SHOPPING")}
            </Link>
            <div className="total-container">
              <h3>{t("TOTAL")}</h3>
              <h4>$25.00</h4>
            </div>
            <Link to="/" className="checkout-btn">
              {t("CHECKOUT")}
              <span></span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCart;
