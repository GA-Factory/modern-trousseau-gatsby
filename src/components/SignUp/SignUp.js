import React from "react";
import styled from "styled-components";
import PinkButton from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const H5 = styled.h5`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 5px;
`;

const TextInput = styled.input`
  background-color: white;
  width: 155px;
  padding: 6px 11px;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-weight: 200;
  font-size: 14px;
  line-height: 16px;
  margin-right: 5px;
  border: 1px solid black;
`;

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
      <Wrapper>
        <H5>Obsessed with a dress?</H5>
        <form onSubmit={this.handleSubmit}>
          <TextInput
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
        </form>
      </Wrapper>
    );
  }
}

export default SignUp;
