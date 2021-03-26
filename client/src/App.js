import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Components
import { ColorPicker } from "./components";

//Styles
import "./styles/App.scss";
import "./styles/rtl.scss";

//Routes
import {
  Home,
  Cart,
  Category,
  SubCategory,
  Product,
  MyAccount,
  Auth,
  Orders,
  Seller,
} from "./routes/index";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    //Localization
    document.dir = i18n.dir(i18n.language);
    if (i18n.language == "ar")
      document.getElementsByTagName("body")[0].classList.add("rtl-layout");
    else
      document.getElementsByTagName("body")[0].classList.remove("rtl-layout");
    i18n.on("languageChanged", (lang) => {
      window.location.reload();
    });

    document.documentElement.style.setProperty("--primary", "#425978");
    document.documentElement.style.setProperty("--secondary", "#01395e");
    document.documentElement.style.setProperty(
      "--swiper-theme-color",
      "#425978"
    );
    console.log(
      getComputedStyle(document.documentElement).getPropertyValue("--primary")
    );
  }, []);
  return (
    <div className="App">
      <ColorPicker />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/category" component={Category} />
        <Route path="/subcategory" component={SubCategory} />
        <Route path="/product" component={Product} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/auth" component={Auth} />
        <Route path="/orders" component={Orders} />
        <Route path="/seller" component={Seller} />
      </Switch>
    </div>
  );
}

export default App;
