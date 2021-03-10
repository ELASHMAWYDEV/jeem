import { FiEdit } from "react-icons/fi";

//Style
import "../styles/MyAccount.screen.scss";

//Components
import {
  Header, Footer,
  // Loading
} from "../components/index";

//Assets
// @ts-ignore
import AvatarImage from "../assets/img/review-pic.jpeg";

const MyAccount = () => {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="myaccount-container">
        <h1 className="page-title">My Account</h1>
        <div className="myaccount-box">
          <div className="edit-btn-container">
            <FiEdit />
          </div>
          <div className="img-container">
            <img src={AvatarImage} alt="avatar"/>
          </div>
          <div className="info-container">
            <div>
              <div>
                <h2>Name</h2>
                <h3>Mahmoud ELashmawy</h3>
              </div>
              <div>
                <h2>Email</h2>
                <h3>elashmawydev@gmail.com</h3>
              </div>
            </div>
            <div>
              <div>
                <h2>Phone</h2>
                <h3>+201064544529</h3>
              </div>
              <div>
                <h2>Country</h2>
                <h3>Egypt</h3>
              </div>
            </div>
            <div>
              <h2>Address</h2>
              <h3>85206 Brannon Lakes Apt. 606Leilanihaven, IL 81296-2931</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
