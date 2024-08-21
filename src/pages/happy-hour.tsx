import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import "../styles/happyHourPage.scss";

const HappyHourPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Beer flight"
          src="../images/beerFlight.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />{" "}
        <div className="page__hero-title">HAPPY HOUR</div>
      </div>
      <div className="happy-hour-page">
        <div className="happy-hour-page__section">
          <div className="happy-hour-page__section-title">
            Join us for happy hour!
          </div>
          <div className="happy-hour-page__when">Monday - Thursday 2-6pm</div>
          <div className="happy-hour-page__details">
            $1 off full pours, cocktails, mocktails
          </div>
          <div className="happy-hour-page__details">
            Happy Hour food specials
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

// title should be 60 characters,
// meta description tags can be around ~130 characters.
export const Head = () => (
  <MetaHelper
    title="Happy Hour Specials – Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Discover unbeatable happy hour specials at Rail Werks Brewing Depot in Columbia Heights, MN. Enjoy discounted craft beers, BBQ appetizers, and more in a relaxed, family-friendly atmosphere. Join us for a great time!"
  />
);

export default HappyHourPage;
