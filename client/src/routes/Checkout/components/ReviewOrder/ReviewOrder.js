import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Style
import "./style.scss";

//Components
import { CartItem } from "../../../../components";

const ReviewOrder = () => {
  const { t } = useTranslation();

  const [items, setItems] = useState([
    {
      id: 1,
    },
    { id: 2 },
    { id: 3 },
  ]);

  return (
    <div className="review-order-container">
      <div className="review-order-box">
        <table className="review-order-content">
          <tr className="review-order-header">
            <th>{t("PRODUCT")}</th>
            <th>{t("PRICE")}</th>
            <th>{t("NEGO_PRICE")}</th>
            <th>{t("QUANTITY")}</th>
            <th>{t("SUBTOTAL")}</th>
          </tr>
          <tbody>
            <tr>
              <td className="line-separator"></td>
            </tr>
            {items.map((item, i) => (
              <CartItem
                key={i}
                onDelete={() => {
                  let newItems = items.filter((j) => j.id != item.id);
                  setItems(newItems);
                }}
                reviewOrder
              />
            ))}
          </tbody>
        </table>
        <span className="line-separator"></span>

        <div className="dash-line"></div>
        <div className="review-order-footer">
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
  );
};

export default ReviewOrder;
