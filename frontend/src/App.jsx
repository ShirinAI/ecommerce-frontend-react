import "./App.css";
import ListDrinkComponent from "./components/ListDrinkComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import ListEmployeesComponent from "./components/admin/ListEmployeesComponent";
import ProductComponent from "./components/admin/ProductComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListProductClientComponent from "./components/ListProductClientComponent";
import UpdateForm from "./components/admin/UpdateForm";
import ViewProduct from "./components/admin/ViewProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/admin/employees" element={<ListEmployeesComponent />}></Route>
          {/* http://localhost:3000/admin/products */}
          <Route path="/admin/products" element={<AdminHome />}></Route>
          <Route path="/admin/products/add" element={<ProductComponent />}></Route>
          <Route path="/admin/products/update/:id" element={<UpdateForm />}></Route>
          <Route path="/admin/products/view/:id" element={<ViewProduct />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          {/* http://localhost:3000/drinks */}
          <Route path="/products/drinks" element={<ListDrinkComponent />}></Route>
          <Route path="/products" element={<ListProductClientComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
