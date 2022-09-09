import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import CategoryItem from "./components/CategoryItem";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Product from "./screens/Product";
import ProductList from "./screens/ProductList";
import Register from "./screens/Register";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const App = () => {
  ReactGA.initialize("G-DKV7EG3Q54");
  const location = useLocation();

  // Fired on every route change
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/list" element={<ProductList />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
