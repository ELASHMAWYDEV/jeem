import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Style
import "./style.scss";

const ChooseAddress = () => {
  const { t } = useTranslation();

  return (
    <div className="choose-address-container">
      <div className="address-book">
        {[1, 2, 3].map((item, i) => (
          <div className="address-box" key={i}>
            <label>
              <input type="radio" name="address" />
              <div>
                <h3>Adelle Mayer Sr.</h3>
                <p>
                  60934 Littel Terrace Apt. 902 North Adan, IL 23382 Zulaburgh,
                  Ohio 117516 American Samoa
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="next-container">
        <Link to="/checkout/payment-method">Next</Link>
      </div>
      <div className="dash-line"></div>
      <div className="address-form">
        <h2>OR</h2>
        <h2>Enter a new address</h2>
        <div className="input-items">
          <div className="input-item">
            <input type="text" placeholder={t("NAME")} />
          </div>
          <div className="input-item">
            <input type="text" placeholder={t("ADDRESS")} />
          </div>
          <div className="input-item">
            <input type="text" placeholder={t("COUNTRY")} />
          </div>
          <div className="input-item">
            <input type="text" placeholder={t("GOVERNORATE")} />
          </div>
          <div className="input-item">
            <input type="text" placeholder={t("ZIP_CODE")} />
          </div>

          <div className="input-item">
            <button className="save-btn">{t("SAVE_ADDRESS")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAddress;
