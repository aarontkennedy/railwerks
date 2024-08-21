import * as React from "react";
import { useState } from "react";
import "./mobileMenu.scss";
import { HamburgerIcon } from "../../icons/hamburger";

const MobileMenu = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div className="mobile-menu__checkbox-wrapper">
      <input type="checkbox" id="mobile-menu__checkbox" />

      <label
        htmlFor="mobile-menu__checkbox"
        className="mobile-menu__checkbox-label"
      >
        <div className="mobile-menu__bar"></div>
      </label>

      <div className="mobile_menu__pulldown-container">{children}</div>
    </div>
  );
};

export default MobileMenu;
