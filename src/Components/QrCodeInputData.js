import React from 'react'

function QrCodeInputData(props) {
  return (
    <textarea
      value={props.text}
      onChange={e => props.setQrCodeMsg(e.target.value)}
    />
  );
}

export default QrCodeInputData;