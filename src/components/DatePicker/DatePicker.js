import React, { useState } from 'react';
import styled from 'styled-components';

const DatePickerLabel = styled.label`
  display: block;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bolder;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 10px;
`;

const DateInput = styled.input`
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  padding: 5px;
  margin: 0;
  background: rgba(68, 31, 14, 0.2);
  border: none;
`;

const DatePicker = () => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  return (
    <div>
      <DatePickerLabel htmlFor="requested-date-input">
        Requested Date*
      </DatePickerLabel>
      <DateInput
        type="date"
        required
        name="Requested-Date"
        value={date}
        min="February 29, 2020"
        step="1"
        max="December 31, 2030"
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
