import { useState } from "react";
//Styles
import "../styles/CartItem.scss";

//Assets
import SliderImage3 from "../assets/img/slider1-2.jpeg";
import DeleteImage from "../assets/img/delete.png";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img src={SliderImage3} alt="img" />
      </div>
      <div className="product-content">
        <h2>Product 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus.
        </p>
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
        <div>
          <img src={DeleteImage} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
