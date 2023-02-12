import React from "react";
import Navigation from "../navigation/navigation";
import SocialNavigation from "../socialNavigation/socialNavigation";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="footer__title footer__brand-name">
          Rail Werks Brewing Depot &trade;
        </div>
        <div className="footer__value">
          <a href="mailto:info@railwerksbrewingdepot.com">
            info@railwerksbrewingdepot.com
          </a>
        </div>
        <div>
          <h4 className="footer__title">Hours</h4>
          <div className="footer__value">TBD</div>
        </div>
        <div>
          <h4 className="footer__title">Location</h4>
          <div className="footer__value">Columbia Heights, MN</div>
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
