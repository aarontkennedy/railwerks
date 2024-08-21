import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import "../styles/storyPage.scss";

const OurStoryPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Beer"
          src="../images/handBeer.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Our Story</div>
      </div>
      <div className="story-page">
        <div className="story-page__content">
          Rail Werks Brewing Depot is a family-run business founded by husband
          and wife team, William and Denise Roberts. We have a passion for great
          food, exceptional beer, and a sense of community. Located in Columbia
          Heights, MN, we strive to be the go-to spot for families, friends, and
          beer enthusiasts.
        </div>
      </div>
    </PageLayout>
  );
};

// title should be 60 characters,
// meta description tags can be around ~130 characters.
export const Head = () => (
  <MetaHelper
    title="Our Story – Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Learn the story behind Rail Werks Brewing Depot in Columbia Heights, MN. Discover our passion for BBQ, craft beer, and creating a welcoming, family-friendly space where community and great food come together. Explore our journey!"
  />
);

export default OurStoryPage;
