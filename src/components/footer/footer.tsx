import * as React from "react";
import "./footer.scss";
import Map, { googleMapUrl } from "../map/Map";
import SocialNavigation from "../socialNavigation/socialNavigation";
import Hours from "../hours";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="footer__title footer__brand-name">
          Rail Werks Brewing Depot &trade;
        </div>
        <div className="footer__value">
          <a href="tel:612-367-6758">612-367-6758</a>
          <br />
          <a href="mailto:info@railwerksbrewingdepot.com">
            info@railwerksbrewingdepot.com
          </a>
        </div>
        <div className="footer__value">
          <div>
            <a className="footer__map-link" href={googleMapUrl}>
              4055 NE Central Ave
              <br />
              Columbia Heights, MN 55421
            </a>
          </div>
          <div>
            <Map width={250} height={250} />
          </div>
        </div>
      </div>

      <div className="footer__column">
        <Hours namespace="footer" />
        <div className="footer--center footer__value">
          <SocialNavigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
