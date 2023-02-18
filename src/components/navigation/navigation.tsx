import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

interface NavigationProps {
  horizontal: boolean;
}

function Navigation({ horizontal }: NavigationProps): JSX.Element {
  return (
    <div
      className={horizontal ? "navigation-links" : "navigation-links--vertical"}
    >
      <div className="navigation-link">
        <Link to="about">About Us</Link>
      </div>
      {/* <div className="navigation-link">
        <a href="https://rail-werks-brewing-depot.square.site">Rail Pass</a>
      </div> */}
      <div className="navigation-link">
        <Link to="food">Menu</Link>
      </div>
      <div className="navigation-link">
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navigation;
