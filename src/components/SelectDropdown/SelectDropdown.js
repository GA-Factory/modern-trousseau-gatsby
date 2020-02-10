import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const DropdownItem = styled(Link)`
  width: 100%;
`;

class SelectDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: this.props.title,
      list: this.props.option,
      active: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Toggles menu open/close state
  toggle = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  handleClick = props => {
    console.log("Linked");
  };

  render() {
    console.log(this.state);
    let fullList = this.state.list.map((item, index) => {
      return (
        <li key={index} name={item} onClick={this.handleClick}>
          {item}
        </li>
      );
    });

    return (
      <div>
        <p onClick={this.toggle}> {this.state.title}</p>
        <ul>{this.state.active === true && fullList}</ul>
        {this.state.active === true &&
          this.state.list.map((item, index) => {
            <DropdownItem
              to="/"
              key={Math.random(0, 100000)}
              name={item}
              index={index}
            >
              {item}
            </DropdownItem>;
          })}
      </div>
    );
  }
}

export default SelectDropdown;

{
  /* <ul>{this.state.active === true && fullList}</ul> */
}

// <DropdownItem to="/" />

// {
//     (this.state.active === true && console.log("True statement Firing!"),
//     this.state.list.map((item, index) => {
//       // <DropdownItem to="/" key={Math.random(0, 100000)} name={item}>
//       //   {item}
//       //   <p>hello</p>
//       // </DropdownItem>;

//       {
//         item;
//       }
//     }))
//   }
