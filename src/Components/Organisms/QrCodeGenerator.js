import React, { useState } from "react";
import QrCodeOutput from "../Molecules/QrCodeOutputSvg";
import QrCodeInputData from "../Molecules/QrCodeInputData";
import "./QrCodeGenerator.scss";

function QrCodeGenerator () {
  const [msg, setMsg] = useState("");

  return (
    <div className="container qrcodegen-container">
      <QrCodeInputData text={msg} SetQrCodeMsg={setMsg} />
      <QrCodeOutput data={msg} />
    </div>
  );
}

export default QrCodeGenerator;