<<<<<<< HEAD
import React from 'react'

import Button from '../Button/Button'
import './SignUp.css'
=======
import React from "react";
import "./SignUp.css";
import PinkButton from "../Button/Button";
>>>>>>> develop

import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Email was submited: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <h5 className="title">Obsessed with a dress?</h5>
        <form onSubmit={this.handleSubmit}>
<<<<<<< HEAD
            <input className="textInput" type="text" placeholder="sign up for updates!" value={this.state.value} onChange={this.handleChange} />
            <Button type="submit" type="light-pink" label="Submit" value="Submit" />
=======
          <input
            className="textInput"
            type="text"
            placeholder="sign up for updates!"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <PinkButton
            label="SUBMIT"
            width={`${"63px"}`}
            fontsize={`${"12px"}`}
            height={`${"14px"}`}
            weight={`${"300"}`}
            padding={`${"5px 0"}`}
            shadow={`${"0px 4px 4px rgba(0, 0, 0, 0.25)"}`}
            color={`${"#000000"}`}
            desktopfontsize={`${"14px"}`}
            desktopheight={`${"16px"}`}
            desktopwidth={`${"79px"}`}
          />
>>>>>>> develop
        </form>
      </div>
    );
  }
}

export default SignUp;
