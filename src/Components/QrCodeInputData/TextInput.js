import React from "react";

function TextInput(props) {
  return (
    <textarea
      value={props.currentValue}
      onChange={e => props.setMsg(e.target.value, "text")}
    />
  );
}

export default TextInput;