import React from "react";
import qrcode from "qrcode-generator-es6";

function QrCodeOutput(props) {
  const qr = new qrcode(0, "H");
  qr.addData(props.data);
  qr.make();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${qr.createSvgTag({})}`}}/>
  );
}

export default QrCodeOutput;