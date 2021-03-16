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
} from "../components/index";

const Home = () => {
  return (
    <>
      <Loading />
      <Header />
      <div className="home">
        <LongSlider />
        <CircleButtons />
        {/* <RecommendedSlider /> */}
        <div className="tab-sliders-wrapper">
          <TabSlider />
          <TabSlider />
          <TabSlider />
          <TabSlider />
        </div>

        <OurParteners />
        <Footer />
      </div>
    </>
  );
};

export default Home;
