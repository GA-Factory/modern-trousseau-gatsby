import React, { Component } from 'react';
import styled from "styled-components";
import FAIcon from '../Icons/FAIcon';
import './Hamburger.css';


class Burger extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        isClosed: true,
        };
    }

    toggleMenu() {
      this.setState({
          isOpen: !this.state.isOpen,
          isClosed: !this.state.isClosed
        });
    }

    render() {
      return (
        <div className="wrapper">
            <button onClick={() => this.toggleMenu()}>
                {this.state.isClosed && <FAIcon className="menu-toggle bars" name={['fas', 'bars']} size="5x" />}
                {this.state.isOpen && <FAIcon className="menu-toggle cross" name={['fas', 'times']} size="5x" />}
            </button>
          {this.state.isOpen && <div className="Menu">{this.props.menu1}</div>}
          {this.state.isOpen && <div className="Menu">{this.props.menu2}</div>}
          {this.state.isOpen && <div className="Menu">{this.props.menu3}</div>}
        </div>
      );
    }
  }

export default Burger;
