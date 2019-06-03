import React from 'react';
import ContactInput from "./ContactInput";
import TextInput from './TextInput';
import UrlInput from "./UrlInput";
import "./QrCodeInputData.scss";

class QrCodeInputData extends React.Component {
  constructor(props) {
    super(props);
    this.radios = ["text", "url", "contact"];
    this.state = {
      inputToRender: "text",
      msg: "",
      inputValues: {
        text: "",
        url: "https://",
        contact: {
          fullName: {
            label: "Full Name",
            inputType: "text",
            vCardType: "FN:",
            value: ""
          },
          organisation: {
            label: "Organisation",
            inputType: "text",
            vCardType: "ORG:",
            value: ""
          },
          title: {
            label: "Title",
            inputType: "text",
            vCardType: "TITLE:",
            value: ""
          },
          phone: {
            label: "Phone number",
            inputType: "tel",
            vCardType: "TEL;voice;VALUE=uri:tel:",
            value: ""
          },
          email: {
            label: "Email",
            inputType: "email",
            vCardType: "EMAIL:",
            value: ""
          }
        }
      }
    };
  }

  SetMsg = (msg, inputType) => {
    this.setState({ msg });
    this.props.SetQrCodeMsg(msg);

    if (inputType !== "contact") {
      let inputValues = Object.assign({}, this.state.inputValues);
      inputValues[inputType] = msg;
      this.setState({ inputValues });
    }
  };

  UpdateContactInputStates = (values) => {
    let inputValues = Object.assign({}, this.state.inputValues);

    Object.keys(inputValues.contact).forEach((key, i) => {
      inputValues.contact[key].value = values[key];
    });
    this.setState({ inputValues });
  }

  OnRadioInputChange = e => {
    this.setState({
      inputToRender: e.currentTarget.value
    });

    this.SetMsg(
      this.state.inputValues[e.currentTarget.value],
      e.currentTarget.value
    );
  };

  InputToReturn() {
    switch (this.state.inputToRender) {
      case "text":
        return (
          <TextInput
            SetMsg={this.SetMsg}
            currentValue={this.state.inputValues.text}
          />
        );
      case "url":
        return (
          <UrlInput
            SetMsg={this.SetMsg}
            currentValue={this.state.inputValues.url}
          />
        );
      case "contact":
        return (
          <ContactInput
            UpdateContactInputStates={this.UpdateContactInputStates}
            SetMsg={this.SetMsg}
            inputs={this.state.inputValues.contact}
          />
        );
      default:
        return (
          <TextInput
            SetMsg={this.SetMsg}
            currentValue={this.state.inputValues.text}
          />
        );
    }
  }

  render() {
    return (
      <div>
        <div className="input-picker has-mb-4">
          {this.radios.map((radio, i) => (
            <label
              key={i}
              className="input-label"
              htmlFor={`radio${radio}`}
            >
              <input
                type="radio"
                value={radio}
                checked={this.state.inputToRender === radio}
                name="inputFormat"
                id={`radio${radio}`}
                onChange={this.OnRadioInputChange}
              />
              {radio}
            </label>
          ))}
        </div>
        {this.InputToReturn()}
      </div>
    );
  }
}

export default QrCodeInputData;