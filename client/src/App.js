import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
