import React from 'react'

import Button from '../Button/Button'
import './SignUp.css'


class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Email was submited: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div className="wrapper">
              <h5 className="title">Obsessed with a dress?</h5>
        <form onSubmit={this.handleSubmit}>
            <input className="textInput" type="text" placeholder="sign up for updates!" value={this.state.value} onChange={this.handleChange} />
            <Button type="submit" type="light-pink" label="Submit" value="Submit" />
        </form>

        </div>
      );
    }
  }

export default SignUp