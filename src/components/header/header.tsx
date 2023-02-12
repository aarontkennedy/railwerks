import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import SocialNavigation from "../socialNavigation/socialNavigation";
import Navigation from "./navigation";
import { ReactComponent as RwbdIcon } from "../../icons/crossingTracksLogo.svg";

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/">
          <RwbdIcon className="header__brand-icon" />
        </Link>
      </div>

      <Navigation />
      <SocialNavigation />
    </header>
  );
}

export default Header;
