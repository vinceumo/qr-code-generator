import React from 'react';
import './App.scss';
import Header from './Components/Header'
import QrCodeOutput from "./Components/QrCodeOutputSvg";
import QrCodeInputData from "./Components/QrCodeInputData/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "" };
  }

  SetQrCodeMsg = (msg) => {
    this.setState({ msg });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container app-container">
          <QrCodeInputData
            text={this.state.msg}
            SetQrCodeMsg={this.SetQrCodeMsg}
          />
          <QrCodeOutput data={this.state.msg} />
        </div>
      </div>
    );
  }
}

export default App;
