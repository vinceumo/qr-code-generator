import React from "react";

function ContactInput(props) {
  return (
    <div>
      {Object.keys(props.inputs).map((key, i) => (
        <div key={i}>
          <label htmlFor="contactContentInputName">
            {props.inputs[key].label}:
          </label>
          <input
            type={props.inputs[key].inputType}
            name="contactQrContent"
            id={`contactContentInput${props.inputs[key].vCardType}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactInput;
