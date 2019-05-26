import React from "react";

function ContactInput(props) {
  return (
    <div>
      <div>
        <label htmlFor="contactContentInputName">Full Name: </label>
        <input
          type="text"
          name="contactQrContent"
          id="contactContentInputName"
          data-type="FN"
        />
      </div>
      <div>
        <label htmlFor="contactContentInputOrg">Organization: </label>
        <input
          type="text"
          name="contactQrContent"
          id="contactContentInputOrg"
          data-type="ORG"
        />
      </div>
    </div>
  );
}

export default ContactInput;
