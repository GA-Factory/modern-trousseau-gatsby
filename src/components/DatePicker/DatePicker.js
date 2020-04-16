import React from "react";
import styled from "styled-components";

const DatePicker = styled.label`
  display: block;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
`;

const DateInput = styled.input`
  box-shadow: 5px 10px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: 0.4rem 0;
  background: rgba(68, 31, 14, 0.2);
`;

const DatePicker1 = props => {
  return (
    <div>
      <DatePicker className="date-picker" for="requested-date-input">
        {props.label}
      </DatePicker>
      <DateInput
        type="date"
        className="requested-date-input"
        name={props.name}
        value={props.value}
        min={props.min}
        step={props.step}
        max={props.max}
        onChange={props.onChange}
      />
    </div>
  );
};

export default DatePicker;
