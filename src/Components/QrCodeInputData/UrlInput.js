import React from "react";

function UrlInput(props) {
  return (
    <div>
      <label htmlFor="urlQrContentInput">URL: </label>
      <input
        type="url"
        name="urlQrContent"
        id="urlQrContentInput"
        defaultValue={props.currentValue}
        onChange={e => props.SetMsg(e.target.value, "url")}
      />
    </div>
  );
}

export default UrlInput;
