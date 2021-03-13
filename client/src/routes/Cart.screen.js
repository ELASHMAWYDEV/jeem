import { Link } from "react-router-dom";

//Styles
import "../styles/Cart.screen.scss";

//Components
import {
  Header,
  Footer,
  CartItem,
  // Loading
} from "../components/index";

const MyCart = () => {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="cart-container">
        <h1>My Cart</h1>
        <div className="cart-box">
          <div className="cart-content">
            {/* <div> */}
              <div className="cart-header">
                <h3>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Subototal</h3>
              </div>
              <span className="line-separator"></span>
              <CartItem />
              <CartItem />
              <CartItem />
            {/* </div> */}
          </div>
          <span className="line-separator"></span>
          <div className="cart-footer">
            <Link to="/" className="continue-shopping">
              <span></span>Continue Shopping
            </Link>
            <div className="total-container">
              <h3>Total</h3>
              <h4>$25.00</h4>
            </div>
            <Link to="/" className="checkout-btn">
              Checkout<span></span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCart;
