import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import Map, { googleMapUrl } from "../components/map/Map";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import "../styles/contactPage.scss";
import Hours from "../components/hours";

const ContactPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Beer"
          src="../images/pouring.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />{" "}
        <div className="page__hero-title">Contact</div>
      </div>

      <div className="contact-page">
        <div className="contact-page__brand">Rail Werks Brewing Depot</div>
        <div className="contact-page__detail">
          <a href="tel:612-367-6758">612-367-6758</a>
          <a href="mailto:info@railwerksbrewingdepot.com">
            info@railwerksbrewingdepot.com
          </a>
        </div>
        <div className="contact-page__detail">
          <a className="contact-page__map-link" href={googleMapUrl}>
            4055 NE Central Ave
            <br />
            Columbia Heights, MN 55421
          </a>
        </div>
        <div className="contact-page__detail">
          <Hours namespace="footer" />
        </div>
      </div>
      <Map width="100%" height={isMobile ? 400 : 500} />
    </PageLayout>
  );
};

// title should be 60 characters,
// meta description tags can be around ~130 characters.
export const Head = () => (
  <MetaHelper
    title="Contact Rail Werks Brewing Depot – Best BBQ and Craft Brews in Columbia Heights, MN"
    description="Get in touch with Rail Werks Brewing Depot in Columbia Heights, MN. Contact us for reservations, inquiries, or feedback. Serving Columbia Heights, Fridley, Northeast Minneapolis, and nearby areas."
  />
);

export default ContactPage;
