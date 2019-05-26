import React from 'react'
import ContactInput from "./ContactInput";
import TextInput from './TextInput'
import UrlInput from './UrlInput'

class QrCodeInputData extends React.Component {
  constructor(props) {
    super(props);
    this.radios = ["text", "url", "contact"];
    this.state = {
      inputToRender: "text",
      msg: "",
      inputValues: {
        text: "",
        url: "",
        contact: {}
      }
    };
  }

  setMsg = (msg, inputType) => {
    this.setState({ msg });
    this.props.setQrCodeMsg(msg);

    let inputValues = Object.assign({}, this.state.inputValues);
    inputValues[inputType] = msg;
    this.setState({ inputValues });
  };

  onRadioInputChange = e => {
    this.setState({
      inputToRender: e.currentTarget.value
    });

    this.setMsg(
      this.state.inputValues[e.currentTarget.value],
      e.currentTarget.value
    );
  };

  inputToReturn() {
    switch (this.state.inputToRender) {
      case "text":
        return (
          <TextInput
            setMsg={this.setMsg}
            currentValue={this.state.inputValues.text}
          />
        );
      case "url":
        return (
          <UrlInput
            setMsg={this.setMsg}
            currentValue={this.state.inputValues.url}
          />
        );
      case "contact":
        return <ContactInput/>;
      default:
        return this.textInput();
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.radios.map(radio => (
            <label htmlFor={`radio${radio}`}>
              <input
                type="radio"
                value={radio}
                checked={this.state.inputToRender === radio}
                name="inputFormat"
                id={`radio${radio}`}
                onChange={this.onRadioInputChange}
              />
              {radio}
            </label>
          ))}
        </div>
        {this.inputToReturn()}
      </div>
    );
  }
}

export default QrCodeInputData;