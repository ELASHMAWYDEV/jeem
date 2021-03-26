import { useState, useEffect } from "react";
import {
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
  // Redirect,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

//Helpers
// import { useAuthContext } from "../helpers/AppProvider";

//Styles
import "../styles/Auth.screen.scss";

//Assets
// @ts-ignore
import Logo from "../assets/img/logo.png";

const Auth = () => {
  const { t } = useTranslation("translations");

  // const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [type, setType] = useState(
    location.pathname.split("/")[2] || "customer"
  );

  useEffect(() => {
    setType(location.pathname.split("/")[2] || "customer");
  }, [location]);
  return (
    <div className="auth-container">
      {/* {isLoggedIn && <Redirect to="/home/requests" />} */}
      {/*-------------Logo container START-------------*/}

      <div className="logo-container">
        <img
          src={Logo}
          alt="Jeem Building Solutions"
          onClick={() => history.push("/")}
        />
      </div>

      {/*-------------Logo container END-----------------*/}

      <div className="auth-box-container">
        {/*-------------Box Header START-------------*/}

        <div className="box-header">
          <Route exact path={path}>
            <h3>{t("WHO_ARE_YOU")}</h3>
          </Route>
          <Route path={[`${path}/customer`, `${path}/vendor`]}>
            <Link
              to={`${path}/${type}/login`}
              className={`auth-btn ${
                [`${path}/customer/login`, `${path}/vendor/login`].indexOf(
                  location.pathname
                ) !== -1
                  ? "auth-btn-active"
                  : ""
              }`}
            >
              {t("LOGIN")}
            </Link>
            <Link
              to={`${path}/${type}/register`}
              className={`auth-btn ${
                [
                  `${path}/customer/register`,
                  `${path}/vendor/register`,
                ].indexOf(location.pathname) !== -1
                  ? "auth-btn-active"
                  : ""
              }`}
            >
              {t("SIGNUP")}
            </Link>
          </Route>
        </div>

        {/*-------------Box Header END-------------*/}

        {/*-------------Box Body START-------------*/}

        <Route exact path={path}>
          <div className="box-body-flex">
            <Link to={`${path}/customer/login`} className="right-btn">
              {t("CUSTOMER")}
            </Link>
            <Link to={`${path}/vendor/login`} className="left-btn">
              {t("SELLER")}
            </Link>
          </div>
        </Route>

        <Route path={[`${path}/customer/login`, `${path}/vendor/login`]}>
          <div className="box-body">
            <div className="box-title">
              <div>
                {t("IAM")} {"  "}
                <h2
                  onClick={() =>
                    history.push(
                      `${path}/${
                        type === "customer" ? "vendor" : "customer"
                      }/login`
                    )
                  }
                >
                  {type === "customer" ? t("CUSTOMER") : t("SELLER")}
                </h2>
              </div>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="text" placeholder={t("EMAIL")} />
              </div>
              <div className="input-item">
                <input type="password" placeholder={t("PASSWORD")} />
              </div>
              <div className="input-item">
                <button
                  className="auth-btn"
                  onClick={() => {
                    // setIsLoggedIn(true);
                  }}
                >
                  {t("LOGIN")}
                </button>
              </div>
            </div>
            <div className="box-footer">
              <div className="no-account">
                <p>{t("DONT_HAVE_ACCOUNT")}</p>
                <Link to={`${path}/${type}/register`}>{t("REGISTER")}</Link>
              </div>
              <div className="no-account">
                <p>{t("FORGOT_PASSWORD")}</p>
                <Link to={`${path}/reset-password`}>
                  {t("RESET_PASSWORD")}
                </Link>
              </div>
              <Link to="/" className="go-home">
                {t("GO_HOME_PAGE")}
              </Link>
            </div>
          </div>
        </Route>

        <Route path={[`${path}/customer/register`, `${path}/vendor/register`]}>
          <div className="box-body">
            <div className="box-title">
              <div>
                {t("IAM")} {"  "}
                <h2
                  onClick={() =>
                    history.push(
                      `${path}/${
                        type === "customer" ? "vendor" : "customer"
                      }/register`
                    )
                  }
                >
                  {type === "customer" ? t("CUSTOMER") : t("SELLER")}
                </h2>
              </div>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="text" placeholder={t("NAME")} />
              </div>
              <div className="input-item">
                <input type="email" placeholder={t("EMAIL")} />
              </div>
              <div className="input-item">
                <input type="password" placeholder={t("PASSWORD")} />
              </div>
              <div className="input-item">
                <input type="password" placeholder={t("CONFIRM_PASSWORD")} />
              </div>
              <div className="input-item">
                <button className="auth-btn">{t("REGISTER")}</button>
              </div>
            </div>
            <div className="box-footer">
              <div className="no-account">
                <p>{t("DONT_HAVE_ACCOUNT")}</p>
                <Link to={`${path}/${type}/login`}>{t("LOGIN")}</Link>
              </div>
              <Link to="/" className="go-home">
                {t("GO_HOME_PAGE")}
              </Link>
            </div>
          </div>
        </Route>

        {/*-------------Reset START-------------*/}

        <Route exact path={`${path}/reset-password`}>
          <div className="box-body">
            <div className="box-title">
              <h3>{t("SEND_RESET_LINK_TO_EMAIL")}</h3>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="email" placeholder={t("EMAIL")} />
              </div>

              <div className="input-item">
                <Link
                  to={`${path}/reset-password/sc56as7df4asd`}
                  className="auth-btn"
                >
                  {t("SEND_LINK")}
                </Link>
              </div>
            </div>
            <div className="box-footer">
              <div className="no-account">
                <p>{t("YOU_REMEMBER_PASSWORD")}</p>
                <Link to={`${path}/${type}/login`}>{t("LOGIN")}</Link>
              </div>
              <Link to="/" className="go-home">
                {t("GO_HOME_PAGE")}
              </Link>
            </div>
          </div>
        </Route>

        {/*-------------Enter New START-------------*/}

        <Route path={`${path}/reset-password/:token`}>
          <div className="box-body">
            <div className="box-title">
              <h3>{t("ENTER_NEW_PASSWORD")}</h3>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="password" placeholder={t("PASSWORD")} />
              </div>
              <div className="input-item">
                <input type="password" placeholder={t("CONFIRM_PASSWORD")} />
              </div>

              <div className="input-item">
                <button className="auth-btn">{t("CHANGE_PASSWORD")}</button>
              </div>
            </div>
            <div className="box-footer">
              <Link to="/" className="go-home">
                {t("GO_HOME_PAGE")}
              </Link>
            </div>
          </div>
        </Route>

        {/*-------------OTP START-------------*/}
        <Route path={`${path}/otp`}>
          <div className="box-body">
            <div className="box-title">
              <h3>Please enter the OTP you received on your phone number</h3>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="text" placeholder="OTP" />
              </div>

              <div className="input-item">
                <button className="auth-btn">Continue</button>
              </div>
            </div>
            <div className="box-footer">
              <Link to="/" className="go-home">
                {t("GO_HOME_PAGE")}
              </Link>
            </div>
          </div>
        </Route>

        {/*------------{t('EMAIL')}Verified START-------------*/}

        <Route exact path={`${path}/verify-email/:token`}>
          <div className="box-body">
            <div className="box-title">
              <h1>Your email was verified successfully</h1>
              <h2>elashmawydev@gmail.com</h2>
            </div>
            <div className="input-items">
              <div className="input-item">
                <button className="auth-btn">Continue</button>
              </div>
            </div>
            <div className="box-footer">
              <Link to="/" className="go-home">
                {t("GO_HOME_PAGE")}
              </Link>
            </div>
          </div>
        </Route>
      </div>

      {/*-------------Box Body END-------------*/}
    </div>
    // </div>
  );
};

export default Auth;
