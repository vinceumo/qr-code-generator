import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "./Components/Organisms/AppHeader";
import AppNav from "./Components/Organisms/AppNav";
import QrCodeGenerator from "./Components/Organisms/QrCodeGenerator"
import QrCodeScanner from "./Components/Organisms/QrCodeScanner";
import QrCodeScannerResult from "./Components/Organisms/QrCodeScannerResult";


function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        <AppNav/>
        <Route path="/" exact component={QrCodeGenerator} />
        <Route path="/scanner/" component={QrCodeScanner} />
        <Route path="/scanner-result" component={QrCodeScannerResult} />
      </div>
    </Router>
  );
}

export default App;
