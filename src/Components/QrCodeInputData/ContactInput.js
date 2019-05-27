import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super();
  }

  UpdateVCardValue() {
    let values = {};

    Object.keys(this.props.inputs).forEach((key, i) => {
      if (this[key].value !== "") values[key] = this[key].value;
    });

    this.props.SetMsg(this.CreateVCard(values), "contact");
    this.props.UpdateContactInputStates(values);
  }

  CreateVCard(values) {
    let cardContent = "";

    Object.keys(values).forEach((key, i) => {
      cardContent += `${this.props.inputs[key].vCardType}${values[key]}\n`;
    });

    return `BEGIN:VCARD
VERSION:4.0
${cardContent}
END:VCARD`;
  }

  componentDidMount() {
    this.UpdateVCardValue();
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.inputs).map((key, i) => (
          <div key={i}>
            <label htmlFor="contactContentInputName">
              {this.props.inputs[key].label}:
            </label>
            <input
              ref={input => (this[key] = input)}
              type={this.props.inputs[key].inputType}
              name="contactQrContent"
              id={`contactContentInput${this.props.inputs[key].vCardType}`}
              defaultValue={this.props.inputs[key].value}
              onChange={e => this.UpdateVCardValue()}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ContactInput;
