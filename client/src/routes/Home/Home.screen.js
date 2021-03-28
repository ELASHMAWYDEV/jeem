//Styles
import "./style.scss";

//Components
import {
  Header,
  CircleButtons,
  RecommendedSlider,
  OurPartners,
  Footer,
  LongSlider,
  Loading,
  TabSlider,
  RectSlider,
} from "../../components";

const Home = () => {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="home">
        <LongSlider />
        <CircleButtons />
        <div className="dash-line" style={{ marginTop: 0 }} />
        {/* <RecommendedSlider /> */}
        <div className="tab-sliders-wrapper">
          <TabSlider />
          <TabSlider />
          <TabSlider />
          <TabSlider />
          <TabSlider />
          <TabSlider />
        </div>
        <div className="dash-line" />
        <RectSlider />
        <div className="dash-line" />
        <OurPartners />
        <div className="dash-line" />
        <RectSlider />
        <div className="dash-line" />
        <div className="tab-sliders-wrapper">
          <TabSlider />
          <TabSlider />
          <TabSlider />
        </div>
        <div className="dash-line" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
