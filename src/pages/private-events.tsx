import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";

const PrivateEventsPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Brewery"
          src="../images/crowdInBar.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Private Events</div>
      </div>
    </PageLayout>
  );
};

// title should be 60 characters,
// meta description tags can be around ~130 characters.
export const Head = () => (
  <MetaHelper
    title="Host Your Private Event – Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Plan your private event at Rail Werks Brewing Depot in Columbia Heights, MN. Ideal for parties and gatherings, we cater to Columbia Heights, Fridley, Northeast Minneapolis, and surrounding areas."
  />
);

export default PrivateEventsPage;
