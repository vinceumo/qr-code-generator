import React from 'react';
import './App.scss';
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
      <div className="App">
        <QrCodeInputData text={this.state.msg} SetQrCodeMsg={this.SetQrCodeMsg} />
        <QrCodeOutput data={this.state.msg} />
      </div>
    );
  }
}

export default App;
