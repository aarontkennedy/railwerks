import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

class NavigationProps {
  horizontal: boolean = true;
}

function Navigation({ horizontal }: NavigationProps): JSX.Element {
  return (
    <div
      className={horizontal ? "navigation-links" : "navigation-links--vertical"}
    >
      <div className="navigation-link">
        <Link to="about">About Us</Link>
      </div>
      <div className="navigation-link">
        <a href="https://rail-werks-brewing-depot.square.site">Rail Pass</a>
      </div>
      <div className="navigation-link">
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navigation;
