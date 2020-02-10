import React from "react";

const DropdownItem = props => <>{props.name}</>;

export default DropdownItem;

// Old code
{
  /* <ul className={props.className} onChange={props.onChange}>
{props.option.map((element, index) => (
  <li key={index} value={element}>
    {element}
  </li>
))}
</ul> */
}
