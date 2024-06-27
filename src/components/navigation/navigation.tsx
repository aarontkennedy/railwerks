import React from "react";
import { Link } from "react-router-dom";
import { posUrl, railpassUrl } from "../../helpers/constants";
import "./navigation.scss";

interface NavigationProps {
  horizontal: boolean;
  handleClick: () => void;
  showOrderNow: boolean;
}

function Navigation({
  horizontal,
  handleClick,
  showOrderNow,
}: NavigationProps): JSX.Element {
  return (
    <div
      className={horizontal ? "navigation-links" : "navigation-links--vertical"}
    >
      {showOrderNow && (
        <div className="navigation-link">
          <a href={posUrl}>Order Now</a>
        </div>
      )}
      <div className="navigation-link">
        <Link to="beer" onClick={handleClick}>
          Beer Menu
        </Link>
      </div>
      <div className="navigation-link">
        <Link to="events" onClick={handleClick}>
          Events
        </Link>
      </div>
      <div className="navigation-link">
        <Link to="about" onClick={handleClick}>
          About Us
        </Link>
      </div>
      <div className="navigation-link">
        <Link to="contact" onClick={handleClick}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
