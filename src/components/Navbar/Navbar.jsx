import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Update active state based on current URL
  useEffect(() => {
    if (location.pathname === "/") setActive("home");
    else if (location.pathname === "/about") setActive("about");
    else if (location.pathname === "/products") setActive("products");
  }, [location.pathname]);

  const handleClick = (page) => {
    setActive(page);

    // Navigate without full page reload
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about");
        break;
      case "products":
        navigate("/products");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={active === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About Us
        </li>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </li>
        <li
          className={active === "products" ? "active" : ""}
          onClick={() => handleClick("products")}
        >
          Products
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
