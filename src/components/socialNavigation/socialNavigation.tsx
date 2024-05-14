import React from "react";
import "./socialNavigation.scss";
import { ReactComponent as EnvelopeIcon } from "../../icons/envelope-regular.svg";
import { ReactComponent as InstagramIcon } from "../../icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../icons/square-facebook.svg";

function SocialNavigation(): JSX.Element {
  return (
    <div className="social-navigation">
      <a href="https://www.facebook.com/Rail-Werks-Brewing-Depot-698173990540554/">
        <FacebookIcon className="social-navigation__icon" />
      </a>

      <a href="https://www.instagram.com/railwerksbd/">
        <InstagramIcon className="social-navigation__icon" />
      </a>

      <a href="mailto:info@railwerksbrewingdepot.com">
        <EnvelopeIcon className="social-navigation__icon" />
      </a>
    </div>
  );
}

export default SocialNavigation;
