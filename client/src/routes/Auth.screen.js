import { useState, useEffect } from "react";
import {
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
  // Redirect,
} from "react-router-dom";

//Helpers
// import { useAuthContext } from "../helpers/AppProvider";

//Styles
import "../styles/Auth.screen.scss";

//Assets
// @ts-ignore
import Logo from "../assets/img/logo.png";

const Auth = () => {
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
            <h3>Who are you ?</h3>
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
              Login
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
              Sign up
            </Link>
          </Route>
        </div>

        {/*-------------Box Header END-------------*/}

        {/*-------------Box Body START-------------*/}

        <Route exact path={path}>
          <div className="box-body-flex">
            <Link to={`${path}/customer/login`} className="right-btn">
              Customer
            </Link>
            <Link to={`${path}/vendor/login`} className="left-btn">
              Seller
            </Link>
          </div>
        </Route>

        <Route path={[`${path}/customer/login`, `${path}/vendor/login`]}>
          <div className="box-body">
            <div className="box-title">
              <div>
                I'm a {"  "}
                <h2
                  onClick={() =>
                    history.push(
                      `${path}/${
                        type === "customer" ? "vendor" : "customer"
                      }/login`
                    )
                  }
                >
                  {type === "customer" ? "Customer" : "Seller"}
                </h2>
              </div>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-item">
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-item">
                <button
                  className="auth-btn"
                  onClick={() => {
                    // setIsLoggedIn(true);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="box-footer">
              <div className="no-account">
                <p>Don't have an account ?</p>
                <Link to={`${path}/${type}/register`}>Register</Link>
              </div>
              <Link to="/" className="go-home">
                Go to home page
              </Link>
            </div>
          </div>
        </Route>

        <Route path={[`${path}/customer/register`, `${path}/vendor/register`]}>
          <div className="box-body">
            <div className="box-title">
              <div>
                I'm a {"  "}
                <h2
                  onClick={() =>
                    history.push(
                      `${path}/${
                        type === "customer" ? "vendor" : "customer"
                      }/register`
                    )
                  }
                >
                  {type === "customer" ? "Customer" : "Seller"}
                </h2>
              </div>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-item">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-item">
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-item">
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div className="input-item">
                <button className="auth-btn">Register</button>
              </div>
            </div>
            <div className="box-footer">
              <div className="no-account">
                <p>Don't have an account</p>
                <Link to={`${path}/${type}/login`}>Login</Link>
              </div>
              <Link to="/" className="go-home">
                Go to home page
              </Link>
            </div>
          </div>
        </Route>

        {/*-------------Reset Password START-------------*/}

        <Route exact path={`${path}/reset-password`}>
          <div className="box-body">
            <div className="box-title">
              <h3>We will send reset link to your email</h3>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-item">
                <Link
                  to={`${path}/reset-password/sc56as7df4asd`}
                  className="auth-btn"
                >
                  Send Link
                </Link>
              </div>
            </div>
            <div className="box-footer">
              <div className="no-account">
                <p>You remember the password already</p>
                <Link to={`${path}/${type}/login`}>Login</Link>
              </div>
              <Link to="/" className="go-home">
                Go to home page
              </Link>
            </div>
          </div>
        </Route>

        {/*-------------Enter New Password START-------------*/}

        <Route path={`${path}/reset-password/:token`}>
          <div className="box-body">
            <div className="box-title">
              <h3>Please enter the new password</h3>
            </div>
            <div className="input-items">
              <div className="input-item">
                <input type="password" placeholder="New password" />
              </div>
              <div className="input-item">
                <input type="password" placeholder="Confirm new password" />
              </div>

              <div className="input-item">
                <button className="auth-btn">Change Password</button>
              </div>
            </div>
            <div className="box-footer">
              <Link to="/" className="go-home">
                Go to home page
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
                Go to home page
              </Link>
            </div>
          </div>
        </Route>

        {/*-------------Email Verified START-------------*/}

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
                Go to home page
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
