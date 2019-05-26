import React from 'react';
import './App.scss';
import QrCodeOutput from "./Components/QrCodeOutput";
import QrCodeInputData from "./Components/QrCodeInputData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "hello world" };
  }

  setQrCodeMsg = (msg) => {
    this.setState({ msg });
  };

  render() {
    return (
      <div className="App">
        <QrCodeInputData text={this.state.msg} setQrCodeMsg={this.setQrCodeMsg} />
        <QrCodeOutput data={this.state.msg} />
      </div>
    );
  }
}

export default App;
