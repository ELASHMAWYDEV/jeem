
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
  Loading
} from "../components/index";

const Home = () => {
  return (
    <>
      <Loading />
      <Header />
      <div className="home">
        <LongSlider />
        <CircleButtons />
        <RecommendedSlider />
        <OurParteners />
        <Footer />
      </div>
    </>
  );
};

export default Home;
