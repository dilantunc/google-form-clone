import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";
import "./Header.css";
import Login from "./Login";
import Question from "./Question";
import Home from "./Home";
import FormHeader from "./FormHeader";
import Form from "./Form";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    document.body.style.overflow = collapsed ? "hidden" : "auto";
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, "", `/${page}`);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentPage(event.state.page);
      }
    };

    const initPage = () => {
      const path = window.location.pathname.replace('/', '');
      setCurrentPage(path || "home");
    };

    window.addEventListener("popstate", handlePopState);
    initPage();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "FormHeader":
        return <FormHeader />;
      case "login":
        return <Login />;
      case "question":
        return <Question />;
      case "Form":
        return <Form />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar className="custom-navbar" light>
        <NavbarBrand
          onClick={() => handleNavigation("home")}
          className="me-auto d-flex align-items-center"
          style={{ cursor: "pointer", color: "white", fontWeight: "bold" }}
        >
          Google Forms
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} className="navbar-collapse ms-5" navbar>
          <Nav className="me-100" navbar>
            <NavItem className="ms-auto custom-nav-item">
              <button
                onClick={() => handleNavigation("login")}
                style={{
                  cursor: "pointer",
                  color: "inherit",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  padding: "0"
                }}
              >
                Login
              </button>
            </NavItem>
            <NavItem className="ms-auto custom-nav-item">
              <button
                onClick={() => handleNavigation("question")}
                style={{
                  cursor: "pointer",
                  color: "inherit",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  padding: "0"
                }}
              >
                Question 1
              </button>
            </NavItem>
            <NavItem className="ms-auto custom-nav-item">
              <button
                onClick={() => handleNavigation("Form")}
                style={{
                  cursor: "pointer",
                  color: "inherit",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  padding: "0"
                }}
              >
                Form
              </button>
            </NavItem>
            <NavItem className="ms-auto custom-nav-item">
              <button
                onClick={() => handleNavigation("home")}
                style={{
                  cursor: "pointer",
                  color: "inherit",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  padding: "0"
                }}
              >
                Logout
              </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div>{renderPage()}</div>
    </div>
  );
};

export default Header;
