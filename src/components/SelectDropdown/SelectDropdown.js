// Old code
// import React from "react";

// const SelectDropdown = props => (
//   <>
//     <select className={props.className} onChange={props.onChange}>
//       {props.option.map((element, index) => (
//         <option key={index} value={element}>
//           {element}
//         </option>
//       ))}
//     </select>
//   </>
// );

// export default SelectDropdown;

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
  }

  // Toggles menu open/close state
  toggle = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    console.log(this.state);
    const fullList = this.state.list.map(item, index => {
      <li key={index}>{item}</li>;
    });

    return <div>{fullList}</div>;
  }
}

export default SelectDropdown;

{
  /* <p onClick={this.toggle}> {this.state.title}</p> */
}

// <DropdownItem to="/" />

// {
//     (this.state.active === true && console.log("True statement Firing!"),
//     this.state.list.map(item => {
//       // <DropdownItem to="/" key={Math.random(0, 100000)} name={item}>
//       //   {item}
//       //   <p>hello</p>
//       // </DropdownItem>;

//       {
//         item;
//       }
//     }))
//   }
