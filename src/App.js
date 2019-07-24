import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppFooter from "./Components/Organisms/AppFooter";
import AppHeader from "./Components/Organisms/AppHeader";
import AppNav from "./Components/Organisms/AppNav";
import QrCodeGenerator from "./Components/Organisms/QrCodeGenerator";
import QrCodeScanner from "./Components/Organisms/QrCodeScanner";
import QrCodeScannerResult from "./Components/Organisms/QrCodeScannerResult";

function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        <AppNav />
        <div className="has-py-3">
          <switch>
            <Route exact path="/" component={QrCodeScanner} />
            <Route path="/scanner-result" component={QrCodeScannerResult} />
            <Route path="/generator" exact component={QrCodeGenerator} />
          </switch>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
