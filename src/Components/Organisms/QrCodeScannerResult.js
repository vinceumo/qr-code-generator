import React from "react";

function QrCodeScannerResult(props) {
    return (
        <p>{props.location.state.msg}</p>
      );
}

export default QrCodeScannerResult;