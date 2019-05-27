import React from "react";
import qrcode from "qrcode-generator-es6";

class QrCodeOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCode: null,
      svgUrl: null
    };
  }

  CreateQRCode = () => {
    const qrCode = new qrcode(0, "H");
    qrCode.addData(this.props.data);
    qrCode.make();
    this.setState({ qrCode });
    this.CreateSvgUrl(qrCode);
  };

  CreateSvgUrl(svg) {
    const svgBlob = new Blob([svg.createSvgTag({})], {
      type: "image/svg+xml;charset=utf-8"
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    this.setState({ svgUrl });
  }

  componentWillMount() {
    this.CreateQRCode();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.CreateQRCode();
    }
  }

  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${this.state.qrCode.createSvgTag({})}`
          }}
        />
        <a href={this.state.svgUrl} download="qrCode" className="btn is-dark">
          Download
        </a>
      </div>
    );
  }
}

export default QrCodeOutput;