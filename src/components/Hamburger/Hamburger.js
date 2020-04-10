import React, { Component, useState } from "react";
import styled from "styled-components";
import HeaderNavBarMobile from "../HeaderNavBarMobile/HeaderNavBarMobile";

const MenuIcon = styled.button`
  position: sticky;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  padding-bottom: 4px;

  div {
    width: 1.4rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 0.3px;
    position: relative;
    transition: opacity 200ms, transform 300ms;

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

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  z-index: 2;
  transition: transform 300ms;
  position: fixed;
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
        <HeaderNavBarMobile />
      </NavBar>
    </div>
  );
};

export default Burger;
