import React from 'react'
import './DatePicker.css'


const DatePicker = (props) => 
<div>
  <label className="date-picker" for='requested-date-input'>{props.label}</label>
  <input type="date" className="requested-date-input" name={props.name} value={props.value} min={props.min} step={props.step} max={props.max} onChange={props.onChange}/>
</div>  

export default DatePicker
