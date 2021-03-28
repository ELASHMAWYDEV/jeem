import { useState } from "react";

//Styles
import "./style.scss";

//Assets
// @ts-ignore
import Logo from "../../assets/img/loading-logo.png";

const Loading = () => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => setVisible(false), 3000);

  return (
    visible && (
      <div className="loading-container">
        <div className="left-rect">
          <img src={Logo} className="left-img" alt="logo" />
        </div>
        <div className="right-rect">
          <img src={Logo} className="right-img" alt="logo" />
        </div>
      </div>
    )
  );
};

export default Loading;
