import React, { Component } from "react";
import styled from "styled-components";

const DropdownSection = styled.div``;

const Selected = styled.ul`
  position: relative;
  padding: 5px;
  &:first-child {
    font-weight: bold;
    border: 1px black solid;
  }
`;

const Items = styled.li`
  z-index: 1;
  padding: 5px;

  &:hover {
    background-color: pink;
  }
`;

class SelectDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      active: false
    };

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
  }

  // Toggles menu open/close state
  toggle = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  select = e => {
    e.preventDefault();
    this.setState({
      title: e.target.title
    });
    this.toggle();
  };

  render() {
    let selections = this.props.option;
    let Dropdown = selections.map((item, index) => {
      return (
        <Items key={index} title={item} onClick={this.select}>
          {item}
        </Items>
      );
    });

    return (
      <DropdownSection>
        <ul>
          <Selected onClick={this.toggle}>{this.state.title}</Selected>
          {this.state.active === true && Dropdown}
        </ul>
      </DropdownSection>
    );
  }
}

export default SelectDropdown;
