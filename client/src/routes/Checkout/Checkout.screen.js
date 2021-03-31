import { useState } from "react";
import { Link, Route, useRouteMatch, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";

//Components
import {
  Header,
  Footer,
  // Loading
} from "../../components";
import { ChooseAddress, ChooseMethod, ReviewOrder } from "./components";

const Checkout = () => {
  const { t, i18n } = useTranslation("translations");
  const { path } = useRouteMatch();
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Header />
      <div className="checkout-container">
        <h1>{t("CHEKOUT")}</h1>
        <div className="checkout-box">
          <div className="box-header">
            <div className="line-container">
              <Link to={`${path}`} className={`circle-container active`}>
                <span></span>
                <p>Delivery Address</p>
              </Link>
              <span
                className={`bar ${
                  [path + "/review-order", path + "/payment-method"].includes(
                    location.pathname
                  )
                    ? "active"
                    : ""
                }`}
              ></span>
              <Link
                to={`${path}/payment-method`}
                className={`circle-container ${
                  [path + "/review-order", path + "/payment-method"].includes(
                    location.pathname
                  )
                    ? "active"
                    : ""
                }`}
              >
                <span></span>
                <p>Payment Method</p>
              </Link>
              <span
                className={`bar ${
                  [path + "/review-order"].includes(location.pathname)
                    ? "active"
                    : ""
                }`}
              ></span>
              <Link
                to={`${path}/review-order`}
                className={`circle-container ${
                  [path + "/review-order"].includes(location.pathname)
                    ? "active"
                    : ""
                }`}
              >
                <span></span>
                <p>Reveiw Order</p>
              </Link>
            </div>
          </div>
          <div className="box-content">
            <Route exact path={path}>
              <h3 className="box-title">
                Choose the delivery address you want to send the order to
              </h3>
              <ChooseAddress />
            </Route>
            <Route exact path={`${path}/payment-method`}>
              <h3 className="box-title">
                Choose the payment method you prefer
              </h3>
              <ChooseMethod />
            </Route>
            <Route path={`${path}/review-order`}>
              <h3 className="box-title">Review your order {"&"} pay</h3>
              <ReviewOrder />
            </Route>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
