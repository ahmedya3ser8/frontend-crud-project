import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import AddProducts from "./pages/AddProducts";
import EditProducts from "./pages/EditProducts";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="/add/products" element={<AddProducts />} />
        <Route path="/edit/products/:productId" element={<EditProducts />} />
        <Route path="/view/products/:productId" element={<ProductDetails />} />
      </Routes> 
    </>
  );
}

export default App;