import { Link } from "react-router-dom";

//Styles
import "../styles/CircleButtons.scss";

//Assets
import BuidlingMaterials from "../assets/img/building-materials.png";
import Contractors from "../assets/img/contractors.png";
import Consultant from "../assets/img/consultant.png";
import ArchitectureFirms from "../assets/img/architecture-firms.png";

const CircleButtons = () => {
  return (
    <div className="circle-buttons">
      <Link to="/category" className="btn-circle">
        <img src={BuidlingMaterials} alt="" />
        <h1>
          Building
          <br />
          Materials
        </h1>
      </Link>
      <Link to="/category" className="btn-circle">
        <img src={Contractors} alt="" />
        <h1>Contractors</h1>
      </Link>
      <Link to="/category" className="btn-circle">
        <img src={Consultant} alt="" />
        <h1>Consultant</h1>
      </Link>
      <Link to="/category" className="btn-circle">
        <img src={ArchitectureFirms} alt="" />
        <h1>
          Architecture
          <br />
          Firms
        </h1>
      </Link>
    </div>
  );
};

export default CircleButtons;
