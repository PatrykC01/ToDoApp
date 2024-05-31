import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.scss"; // Upewnij się, że style są zaimportowane

const Layout = () => {
  return (
    <>
      <nav className="NavBarContainer">
        <ul className="NavBar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
