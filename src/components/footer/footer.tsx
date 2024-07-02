import React from "react";
import Navigation from "../navigation/navigation";
import SocialNavigation from "../socialNavigation/socialNavigation";
import "./footer.scss";
import Map, { googleMapUrl } from "../../components/map/Map";
import Hours from "../../components/hours";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="footer__title footer__brand-name">
          Rail Werks Brewing Depot &trade;
        </div>
        <div className="footer__value">
          <div>
            <a href="tel:612-367-6758">612-367-6758</a>
          </div>
          <a href="mailto:info@railwerksbrewingdepot.com">
            info@railwerksbrewingdepot.com
          </a>
        </div>
        <div className="footer__value">
          <div>
            <a className="footer__map-link" href={googleMapUrl}>
              4055 NE Central Ave
            </a>
          </div>
          <div>
            <a className="footer__map-link" href={googleMapUrl}>
              Columbia Heights, MN 55421
            </a>
          </div>
          <div>
            <Map small={true} />
          </div>
        </div>
        <Hours namespace="footer" />
      </div>

      <div className="footer__column">
        <Navigation
          horizontal={false}
          handleClick={() => {
            window.scrollTo(0, 0);
          }}
          showOrderNow={true}
        />

        <div className="footer--center footer__value">
          <SocialNavigation />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
