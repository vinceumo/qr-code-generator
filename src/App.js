import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppFooter from "./Components/Organisms/AppFooter";
import AppHeader from "./Components/Organisms/AppHeader";
import AppNav from "./Components/Organisms/AppNav";
import QrCodeGenerator from "./Components/Organisms/QrCodeGenerator";
import QrCodeScanner from "./Components/Organisms/QrCodeScanner";
import QrCodeScannerResult from "./Components/Organisms/QrCodeScannerResult";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div>
          <AppHeader />
          <AppNav />
        </div>
        <main className="has-py-3">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={QrCodeScanner} />
            <Route path={process.env.PUBLIC_URL + "/scanner-result"} component={QrCodeScannerResult} />
            <Route path={process.env.PUBLIC_URL + "/generator"} exact component={QrCodeGenerator} />
          </Switch>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
