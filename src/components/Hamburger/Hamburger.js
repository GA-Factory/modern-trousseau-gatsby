import React, { Component, useState } from "react";
import styled from "styled-components";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";

const MenuIcon = styled.button`
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 200ms, transform 200ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  transition: transform 300ms;
  position: absolute;
  top: 0;
  right: 0;

  transform: ${({ nav }) => (nav ? "translateX(0)" : "scale(0)")};
`;

const Burger = () => {
  const [nav, showNav] = useState(false);
  return (
    <div>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <NavBar nav={nav}>
        <HeaderNavBar />
      </NavBar>
    </div>
  );
};

export default Burger;

// import React, { Component } from "react";
// import FAIcon from "../Icons/FAIcon";
// import "./Hamburger.css";

// class Burger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       isClosed: true
//     };
//   }

//   toggleMenu() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//       isClosed: !this.state.isClosed
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <button onClick={() => this.toggleMenu()}>
//           {this.state.isClosed && (
//             <FAIcon
//               className="menu-toggle bars"
//               name={["fas", "bars"]}
//               size="lg"
//             />
//           )}
//           {this.state.isOpen && (
//             <FAIcon
//               className="menu-toggle cross"
//               name={["fas", "times"]}
//               size="lg"
//             />
//           )}
//         </button>
//         {this.state.isOpen && <div className="Menu">{this.props.menu1}</div>}
//         {this.state.isOpen && <div className="Menu">{this.props.menu2}</div>}
//         {this.state.isOpen && <div className="Menu">{this.props.menu3}</div>}
//       </div>
//     );
//   }
// }

// export default Burger;
