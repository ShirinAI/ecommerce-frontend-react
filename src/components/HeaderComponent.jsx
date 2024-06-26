import React from "react";
import { NavLink } from "react-router-dom";
import { isAdminUser, isUserLoggedIn, logout } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCartIcon";

const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();
  const isAdmin = isAdminUser();
  const navigator = useNavigate();

  function handleLogout() {
    logout();
    navigator("/login");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:3000" className="navbar-brand m-2">
              Good Food Store
            </a>
          </div>
          <div className="collapse navbar-collapse p-1">
            {isAdmin && (
              <ul className="navbar-nav">
                <NavLink to="/admin/products" className="nav-link">
                  ADMIN - PRODUCTS
                </NavLink>
              </ul>
            )}
            {isAdmin && (
              <ul className="navbar-nav">
                <NavLink to="/admin/employees" className="nav-link">
                  ADMIN - EMPLOYEES
                </NavLink>
              </ul>
            )}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            )}

            {!isAuth && (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}

            {isAuth && (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            )}
            {!isAdmin && <ShoppingCartIcon />}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
