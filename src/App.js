import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Components/Organisms/Header'
import QrCodeGenerator from "./Components/Organisms/QrCodeGenerator"
import QrCodeScanner from "./Components/Organisms/QrCodeScanner";


function App() {
  return (
    <Router>
      <div>
        <Header />
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

        <Route path="/" exact component={QrCodeGenerator} />
        <Route path="/scanner/" component={QrCodeScanner} />
      </div>
    </Router>
  );
}

export default App;
