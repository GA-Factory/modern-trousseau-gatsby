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
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
`;

const Burger = () => {
  const [nav, showNav] = useState(false);
  return (
    <div>
      <MenuIcon onClick={() => showNav(!nav)}>
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
