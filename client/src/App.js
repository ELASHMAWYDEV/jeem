import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import { ColorPicker } from "./components";

//Styles
import "./styles/App.scss";

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
  useEffect(() => {
    
    document.documentElement.style
    .setProperty('--primary', '#425978');
    document.documentElement.style
    .setProperty('--secondary', '#01395e');
    document.documentElement.style
    .setProperty('--swiper-theme-color', '#425978');
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
