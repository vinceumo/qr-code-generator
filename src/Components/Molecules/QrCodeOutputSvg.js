import React, { useState, useEffect } from "react";
import qrcode from "qrcode-generator-es6";

function QrCodeOutput(props) {
  const [qrCode, setQrCode] = useState(null);
  const [svgUrl, setSvgUrl] = useState(null);

  function CreateQRCode() {
    const qrCodeData = new qrcode(0, "H");
    qrCodeData.addData(props.data);
    qrCodeData.make();
    setQrCode(qrCodeData);
    CreateSvgUrl(qrCodeData);
  }

  function CreateSvgUrl(svg) {
    const svgBlob = new Blob([svg.createSvgTag({})], {
      type: "image/svg+xml;charset=utf-8"
    });
    const svgUrlData = URL.createObjectURL(svgBlob);
    setSvgUrl(svgUrlData);
  }

  function renderQrCode() {
    if (qrCode) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: `${qrCode.createSvgTag({})}`
          }}
        />
      );
    } else {
      return (
        <div/>
      )
    }
  }

  useEffect(() => {
    CreateQRCode();
  });

  return (
    <div>
      {renderQrCode()}
      <a href={svgUrl} download="qrCode" className="btn is-dark">
        Download
      </a>
    </div>
  );
}

export default QrCodeOutput;