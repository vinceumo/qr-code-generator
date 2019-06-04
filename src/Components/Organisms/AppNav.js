import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Generator</Link>
        </li>
        <li>
          <Link to="/scanner/">Scanner</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;