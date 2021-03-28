//Style
import "./style.scss";

//Assets
import OrderImage from "../../assets/img/order-img.png";

const OrderBox = () => {
  return (
    <div className="order-box">
      <div className="status-container">Approved</div>
      <div className="img-container">
        <img src={OrderImage} alt="" />
      </div>
      <div className="info-container">
        <h1>Carmela Hand</h1>
        <div>
          <h2>Address</h2>
          <h3>85206 Brannon Lakes Apt. 606Leilanihaven, IL 81296-2931</h3>
        </div>
        <div className="order-footer">
          <div>
            Type: <span>COD</span>
          </div>
          <div>
            Quantity: <span>4</span>
          </div>
          <div>
            Amount: <span>330 SAR</span>
          </div>
          <div className="cancel-btn-container">
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
