import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./AppNav.scss";

function AppNav() {
  return (
    <nav className="has-bg-dark">
      <div className="container">
        <ul className="list-unstyled has-m-0 navigation">
          <li>
            <NavLink to="/" className="btn" activeClassName="is-light">
              Scanner
            </NavLink>
          </li>
          <li>
            <NavLink to="/generator" className="btn" activeClassName="is-light">
              Generator
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNav;
