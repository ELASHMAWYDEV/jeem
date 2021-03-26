import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

//Styles
import "../styles/CartItem.scss";

//Assets
// @ts-ignore
import SliderImage3 from "../assets/img/slider1-2.jpeg";
// @ts-ignore
import DeleteImage from "../assets/img/delete.png";

const CartItem = ({ onDelete = () => null }) => {
  const { t } = useTranslation("translations");

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity <= 0) onDelete();
  }, [quantity]);

  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img src={SliderImage3} alt="img" />
      </div>
      <div className="product-content">
        <h2>{t("PRODUCT_TITLE")}</h2>
        <p>{t("LOREM_IPSUM")}</p>
      </div>
      <div className="price">$1.99</div>
      <div className="quantity-container">
        <button className="minus" onClick={() => setQuantity(quantity - 1)}>
          -
        </button>
        <h2>{quantity}</h2>
        <button className="plus" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>
      <div className="subtotal">$3.98</div>
      <div className="delete-container">
        <div onClick={() => onDelete()}>
          <img src={DeleteImage} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
