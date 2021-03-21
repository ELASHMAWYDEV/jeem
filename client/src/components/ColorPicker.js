import { useState } from "react";
import { useAppContext } from "../providers";

//Style
import "../styles/ColorPicker.scss";

//Assets
import Logo from "../assets/img/logo.png";

const ColorPicker = () => {
  const { activeColor, setActiveColor } = useAppContext();

  const [visible, setVisible] = useState(false);

  return (
    <div className="color-picker-container">
      <div className="picker-btn" onClick={() => setVisible(!visible)} title="Pick a Color"></div>
      <div className={`colors-container ${visible ? "active" : ""}`}>
        <div className="picker-circle">
          <div
            style={{
              background: "linear-gradient(30deg, #eb4d4b 60%, #ff7979 100%)",
            }}
          ></div>
          <div
            style={{
              background: "linear-gradient(30deg, #6ab04c 60%, #badc58 100%)",
            }}
          ></div>
          <div></div>
          <div
            style={{
              background: "linear-gradient(30deg, #079992 60%,  #38ada9 100%)",
            }}
          ></div>
          <div
            style={{
              background: "linear-gradient(30deg, #f0932b 60%, #ffbe76 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
