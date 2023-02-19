import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import SocialNavigation from "../socialNavigation/socialNavigation";
import Navigation from "../navigation/navigation";
import { ReactComponent as RwbdIcon } from "../../icons/crossingTracksLogo.svg";
import { ReactComponent as MenuIcon } from "../../icons/bars-solid.svg";
import useWindowDimensions from "../../helpers/useWindowDimensions";

function Header(): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const { height, width } = useWindowDimensions();
  const isDesktop = () => {
    return (width ?? 0) >= 1024; // assume mobile?
  };

  const { pathname } = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const getBranding = (): JSX.Element => {
    return (
      <div className="header__brand">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <RwbdIcon className="header__brand-icon" />
        </Link>
      </div>
    );
  };

  if (isDesktop()) {
    return (
      <header className="header">
        {getBranding()}
        <Navigation
          horizontal={true}
          handleClick={() => {
            window.scrollTo(0, 0);
          }}
        />
        <SocialNavigation />
      </header>
    );
  }

  return (
    <header className={`header ${toggle ? "header--toggled" : ""}`}>
      <div className="header__mobile-wrapper">
        {getBranding()}
        <div
          className="header__navigation-toggle"
          onClick={() => {
            setToggle((prevCheck) => !prevCheck);
          }}
        >
          <MenuIcon className="header__navigation-toggle-icon" />
        </div>
      </div>
      {toggle && (
        <div className="header__navigation-wrap">
          <Navigation
            horizontal={!toggle}
            handleClick={() => {
              setToggle(false);
              window.scrollTo(0, 0);
            }}
          />
          <SocialNavigation />
        </div>
      )}
    </header>
  );
}

export default Header;
