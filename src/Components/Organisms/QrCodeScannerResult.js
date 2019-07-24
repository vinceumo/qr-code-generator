import React from "react";

function QrCodeScannerResult(props) {
  const msg = props.location.state.msg;
  let msgType = "";
  const regexVcard = /BEGIN:VCARD/;
  // eslint-disable-next-line
  const regexUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

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
            // eslint-disable-next-line
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
            // eslint-disable-next-line
            break;
          default:
            return (
              <>
                <p>{msg}</p>
              </>
            );
            // eslint-disable-next-line
            break;
        }
      })()}
    </div>
  );
}

export default QrCodeScannerResult;
