import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Navigation(): JSX.Element {
  return (
    <ul className="header__navigation-links">
      <li className="header__navigation-link">
        <Link to="about">About Us</Link>
      </li>
      <li className="header__navigation-link">
        <a href="https://rail-werks-brewing-depot.square.site">Rail Pass</a>
      </li>
      <li className="header__navigation-link">
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navigation;
