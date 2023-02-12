import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";
import SocialNavigation from "../socialNavigation/socialNavigation";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div>Rail Werks Brewing Depot &trade;</div>
        <div>
          <a href="mailto:info@railwerksbrewingdepot.com">
            info@railwerksbrewingdepot.com
          </a>
        </div>
        <div>
          <h4>Hours</h4>
          <p>TBD</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>Columbia Heights, MN</p>
        </div>
      </div>

      <div className="footer__column">
        <Navigation horizontal={false} />

        <div className="footer--center">
          <SocialNavigation />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
