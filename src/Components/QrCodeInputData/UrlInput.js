import React from "react";

function UrlInput(props) {
  return (
    <div>
      <label htmlFor="urlQrContentInput">URL: </label>
      <input
        type="url"
        name="urlQrContent"
        id="urlQrContentInput"
        value={props.currentValue}
        onChange={e => props.setMsg(e.target.value, "url")}
      />
    </div>
  );
}

export default UrlInput;
