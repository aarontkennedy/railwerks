import React from "react";
import { Link } from "react-router-dom";
import { railpassUrl } from "../../helpers/constants";
import "./navigation.scss";

interface NavigationProps {
  horizontal: boolean;
  handleClick: () => void;
}

function Navigation({ horizontal, handleClick }: NavigationProps): JSX.Element {
  return (
    <div
      className={horizontal ? "navigation-links" : "navigation-links--vertical"}
    >
      <div className="navigation-link">
        <Link to="about" onClick={handleClick}>
          About Us
        </Link>
      </div>
      <div className="navigation-link">
        <Link to="food" onClick={handleClick}>
          Menu
        </Link>
      </div>
      <div className="navigation-link">
        <a href={railpassUrl}>Rail Pass</a>
      </div>
      <div className="navigation-link">
        <Link to="contact" onClick={handleClick}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
