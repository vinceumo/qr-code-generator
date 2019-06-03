import React from "react";
import QrCodeOutput from "../Molecules/QrCodeOutputSvg";
import QrCodeInputData from "../Molecules/QrCodeInputData";
import "./QrCodeGenerator.scss";

class QrCodeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "" };
  }

  SetQrCodeMsg = msg => {
    this.setState({ msg });
  };

  render() {
    return (
      <div className="container qrcodegen-container">
        <QrCodeInputData
          text={this.state.msg}
          SetQrCodeMsg={this.SetQrCodeMsg}
        />
        <QrCodeOutput data={this.state.msg} />
      </div>
    );
  }
}

export default QrCodeGenerator;