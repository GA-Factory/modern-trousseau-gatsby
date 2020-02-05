import React from "react";
import "./TextInput.css";

const TextInput = props => {
  return (
    <>
      <label className="label-name">{props.label}</label>
      <input
        className="text-input"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default TextInput;
