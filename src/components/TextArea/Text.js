import React from "react";
import "./Text.css";

const Text = props => (
  <div>
    <p className={props.pClassList}>
      Is there anything else you want us to know?
    </p>
    <textarea
      className={props.textAreaClassList}
      placeholder="Tell us about your dream dress! Do you have any Modern Trousseau favorites?"
    ></textarea>
  </div>
);

export default Text;
