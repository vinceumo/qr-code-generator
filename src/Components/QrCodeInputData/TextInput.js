import React from "react";

function TextInput(props) {
  return (
    <textarea
      defaultValue={props.currentValue}
      onChange={e => props.SetMsg(e.target.value, "text")}
    />
  );
}

export default TextInput;