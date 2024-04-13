import "./App.css";
import ListDrinkComponent from "./components/ListDrinkComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import ProductComponent from "./components/admin/ProductComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import HeaderComponent from "./components/HeaderComponent";
import Products from "./pages/Products";
import AdminEmployeeListPage from "./pages/admin/AdminEmployeeListPage";
import ProductLandingPage from "./pages/ProductLandingPage";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";
import Checkout from "./pages/Checkout";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import ViewProductPage from "./pages/admin/ViewProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/admin/employees" element={<AdminEmployeeListPage />}></Route>
            {/* http://localhost:3000/admin/products */}
            <Route path="/admin/products" element={<AdminHome />}></Route>
            <Route path="/admin/products/add" element={<ProductComponent />}></Route>
            <Route path="/admin/products/update/:id" element={<UpdateProductPage />}></Route>
            <Route path="/admin/products/view/:id" element={<ViewProductPage />}></Route>

            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<RegisterComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            {/* http://localhost:3000/products */}
            <Route path="/products/drinks" element={<ListDrinkComponent />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductLandingPage />}></Route>
            <Route path="/shopping-cart" element={<ShoppingCartPage />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
