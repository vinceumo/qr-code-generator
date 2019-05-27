import React from "react";

function TextInput(props) {
  return (
    <div>
    <label htmlFor="textInput">Text: </label>
      <textarea
        id="textInput"
        defaultValue={props.currentValue}
        onChange={e => props.SetMsg(e.target.value, "text")}
      />
    </div>
  );
}

export default TextInput;