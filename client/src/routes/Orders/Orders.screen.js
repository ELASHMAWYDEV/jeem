//Components
import {
  Header,
  Footer,
  Loading,
  OrderBox,
  Pagination,
} from "../../components";

//Style
import "./style.scss";

const Orders = () => {
  return (
    <>
      <Header />
      <div className="orders-container">
        <h1>My Orders</h1>
        <div className="orders-grid">
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
