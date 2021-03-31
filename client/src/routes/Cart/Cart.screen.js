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
          <table className="cart-content">
            {/* <div> */}
            <thead className="cart-header">
              <tr>
                <th colSpan={2}>{t("PRODUCT")}</th>
                <th>{t("PRICE")}</th>
                <th>{t("NEGO_PRICE")}</th>
                <th>{t("QUANTITY")}</th>
                <th>{t("SUBTOTAL")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="line-separator"></td>
              </tr>
              {items.map((item, i) => (
                <CartItem
                  key={i}
                  onDelete={() => {
                    let newItems = items.filter((j) => j.id != item.id);
                    setItems(newItems);
                  }}
                />
              ))}
            </tbody>
            {/* </div> */}
          </table>
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
            <Link to="/checkout" className="checkout-btn">
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
