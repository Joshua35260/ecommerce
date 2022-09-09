import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import CategoryItem from "./components/CategoryItem";
import Footer from "./components/Footer";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Product from "./screens/Product";
import ProductList from "./screens/ProductList";
import Register from "./screens/Register";
import ReactGA from "react-ga4";
import RouteChangeTracker from "./components/RouteChangeTracker";

const App = () => {
  const TRACKING_ID = "G-DKV7EG3Q54";
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <RouteChangeTracker>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/list" element={<ProductList />} />
        </Routes>
      </RouteChangeTracker>
      <Footer />
    </>
  );
};
export default App;
