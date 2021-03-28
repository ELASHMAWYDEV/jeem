import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Styles
import "./style.scss";

//Assets
// @ts-ignore
import BuidlingMaterials from "../../assets/img/building-materials.png";
// @ts-ignore
import Contractors from "../../assets/img/contractors.png";
// @ts-ignore
import Consultant from "../../assets/img/consultant.png";
// @ts-ignore
import ArchitectureFirms from "../../assets/img/architecture-firms.png";

const CircleButtons = () => {
  const { t } = useTranslation("translations");

  return (
    <div className="circle-buttons">
      <Link to="/category" className="btn-circle">
        <img src={BuidlingMaterials} alt="" />
        <h1>{t("BUILDING_MATERIALS")}</h1>
      </Link>
      <Link to="/category" className="btn-circle">
        <img src={Contractors} alt="" />
        <h1>{t("CONTRACTORS")}</h1>
      </Link>
      <Link to="/category" className="btn-circle">
        <img src={Consultant} alt="" />
        <h1>{t("CONSULTANT")}</h1>
      </Link>
      <Link to="/category" className="btn-circle">
        <img src={ArchitectureFirms} alt="" />
        <h1>{t("ARCHITECTURE_FIRMS")}</h1>
      </Link>
    </div>
  );
};

export default CircleButtons;
