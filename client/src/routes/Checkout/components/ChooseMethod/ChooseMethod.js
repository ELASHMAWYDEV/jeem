import { Link } from "react-router-dom";

//Style
import "./style.scss";

const ChooseMethod = () => {
  return (
    <div className="choose-method-container">
      <div className="method-book">
        {["Paypal", "Pay on Delivery", "Safy Masrif", "Visa / Master Card"].map(
          (item, i) => (
            <div className="method-box" key={i}>
              <label>
                <input type="radio" name="method" />
                <h3>{item}</h3>
              </label>
            </div>
          )
        )}
      </div>
      <div className="next-container">
        <Link to="/checkout/review-order">Next</Link>
      </div>
    </div>
  );
};

export default ChooseMethod;
