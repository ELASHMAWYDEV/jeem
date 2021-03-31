import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";

//Assets
// @ts-ignore
import SliderImage3 from "../../assets/img/slider1-2.jpeg";
// @ts-ignore
import DeleteImage from "../../assets/img/delete.png";

const CartItem = ({ onDelete = () => null, reviewOrder = false }) => {
  const { t } = useTranslation("translations");

  const [quantity, setQuantity] = useState(1);
  const [negoPrice, setNegoPrice] = useState("50");

  useEffect(() => {
    if (quantity <= 0) onDelete();
  }, [quantity]);

  return (
    <tr className="cart-item-container">
      <td className="img-container">
        <img src={SliderImage3} alt="img" />
      </td>
      <td className="product-content ">
        <h2>{t("PRODUCT_TITLE")}</h2>
        <p>{t("LOREM_IPSUM")}</p>
      </td>
      <td className="price">$1.99</td>
      <td className="nego-price">
        <input
          type="number"
          disabled={reviewOrder}
          value={negoPrice}
          onChange={(e) => setNegoPrice(e.target.value)}
        />
      </td>
      <td className="quantity-container">
        {!reviewOrder && (
          <button className="minus" onClick={() => setQuantity(quantity - 1)}>
            -
          </button>
        )}
        <h2>{quantity}</h2>
        {!reviewOrder && (
          <button className="plus" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        )}
      </td>
      <td className="subtotal">$3.98</td>
      <td className="delete-container">
        {!reviewOrder && (
          <div onClick={() => onDelete()}>
            <img src={DeleteImage} alt="delete" />
          </div>
        )}
      </td>
    </tr>
  );
};

export default CartItem;
