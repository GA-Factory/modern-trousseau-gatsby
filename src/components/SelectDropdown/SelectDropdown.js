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
import DropdownItem from "./DropdownItem";

class SelectDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      list: this.props.option,
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => {
      this.active = !prevState.active;
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.title}
        <ul title={this.title} onClick={this.toggle}>
          {this.state.active === true &&
            this.state.list.map(item => {
              <DropdownItem name={item} />;
            })}
        </ul>
      </>
    );
  }
}

export default SelectDropdown;
