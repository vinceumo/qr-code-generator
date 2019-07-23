import React from "react";

function QrCodeScannerResult(props) {
  const msg = props.location.state.msg;
  let msgType = "";
  const regexVcard = /BEGIN:VCARD/;
  const regexUrl = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  if (regexVcard.test(msg) && regexUrl.test(msg)) {
    msgType = "vcard";
  } else if (regexVcard.test(msg) && !regexUrl.test(msg)) {
    msgType = "vcard";
  } else if (!regexVcard.test(msg) && regexUrl.test(msg)) {
    msgType = "url";
  } else {
    msgType = "text";
  }

  return (
    <div className="container">
      {(() => {
        switch (msgType) {
          case "vcard":
            return (
              <>
                <p>{msg}</p>
                <a
                  className="btn is-dark"
                  href={`data:,${encodeURIComponent(msg)
                    .replace(/['()]/g, escape)
                    .replace(/\*/g, "%2A")
                    .replace(/%(?:7C|60|5E)/g, unescape)}`}
                  download="contact.vcf"
                >
                  Save Contact
                </a>
              </>
            );
            break;
          case "url":
            return (
              <>
                <p>{msg}</p>
                <a className="btn is-dark" href={msg}>
                  Visit link
                </a>
              </>
            );
            break;
          default:
            return (
              <>
                <p>{msg}</p>
              </>
            );
            break;
        }
      })()}
    </div>
  );
}

export default QrCodeScannerResult;
