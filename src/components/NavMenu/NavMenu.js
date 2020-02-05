import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = props => (
  <div
    className={props.isVisible ? "primary-pink nav-container" : "primary-pink nav-container is-visible"}
  >
    <nav>
      <ul>
        <li>
          <Link to="#">
            <h3 className="nav-title">Home</h3>
            <span className="dots">&#9679;</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h3 className="nav-title">Our Gowns</h3>
            <span className="dots">&#9679;</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h3 className="nav-title">Visit Us</h3>
            <span className="dots">&#9679;</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h3 className="nav-title">Book An Appointment</h3>
            <span className="dots">&#9679;</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h3 className="nav-title">About Us</h3>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavMenu;
