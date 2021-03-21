//Styles
import "../styles/Home.screen.scss";

//Components
import {
  Header,
  CircleButtons,
  RecommendedSlider,
  OurParteners,
  Footer,
  LongSlider,
  Loading,
  TabSlider,
  RectSlider,
} from "../components/index";

const Home = () => {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <div className="home">
        <LongSlider />
        <CircleButtons />
        <div className="dash-line" />
        {/* <RecommendedSlider /> */}
        <div className="tab-sliders-wrapper">
          <TabSlider />
          <TabSlider />
          <TabSlider />
          <TabSlider />
        </div>
        <div className="dash-line" />
        <RectSlider />
        <div className="dash-line" />
        <OurParteners />
        <div className="dash-line" />
        <RectSlider />
        <div className="dash-line" />
        <div className="tab-sliders-wrapper">
          <TabSlider />
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
