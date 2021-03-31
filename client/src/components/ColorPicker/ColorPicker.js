import { useState } from "react";
import { useAppContext } from "../../providers";

//Style
import "./style.scss";

//Assets
// @ts-ignore
import Logo from "../../assets/img/logo.png";

const ColorPicker = () => {
  const { setActiveColor } = useAppContext();

  const [visible, setVisible] = useState(false);

  return (
    <div className="color-picker-container">
      <div
        className="picker-btn"
        onClick={() => setVisible(!visible)}
        title="Pick a Color"
      ></div>
      <div className={`colors-container ${visible ? "active" : ""}`}>
        <div className="picker-circle">
          <div
            onClick={() => setActiveColor("red")}
            style={{
              background: "linear-gradient(30deg, #eb4d4b 60%, #ff7979 100%)",
            }}
          ></div>
          <div
            onClick={() => setActiveColor("green")}
            style={{
              background: "linear-gradient(30deg, #6ab04c 60%, #badc58 100%)",
            }}
          ></div>
          <div
            onClick={() => setActiveColor("blue")}
            style={{
              background: "linear-gradient(30deg, #01395e 60%, #425978 100%)",
              width: 100,
            }}
          ></div>
          <div
            onClick={() => setActiveColor("black")}
            style={{
              background: "linear-gradient(30deg, #2f3640 60%,  #485061 100%)",
            }}
          ></div>
          <div
            onClick={() => setActiveColor("brown")}
            style={{
              background: "linear-gradient(30deg, #a56d4e 60%, #d5926d 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
