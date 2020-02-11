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
      title: this.props.title,
      active: false
    };

    this.toggle = this.toggle.bind(this);
    // this.handleClick = this.handleClick.bind(this);
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
        <li key={index} title={item} onClick={this.select}>
          {item}
        </li>
      );
    });

    return (
      <div>
        <ul>
          <li onClick={this.toggle}>{this.state.title}</li>
          {this.state.active === true && Dropdown}
        </ul>
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

// {this.state.active === true &&
//     this.state.list.map((item, index) => {
//       <DropdownItem
//         to="/"
//         key={Math.random(0, 100000)}
//         name={item}
//         index={index}
//       >
//         <li>{item}</li>
//       </DropdownItem>;
//     })}
