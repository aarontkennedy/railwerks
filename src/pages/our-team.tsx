import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import "../styles/teamPage.scss";

const OurTeamPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Rail Werks Brewing Depot"
          src="../images/building.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Our Team</div>
      </div>
      <div className="team-page">
        <div className="team-page__message">
          Rail Werks Brewing Depot is a family-run business founded by husband
          and wife team, William and Denise Roberts. We have a passion for great
          food, exceptional beer, and a sense of community. Located in Columbia
          Heights, MN, we strive to be the go-to spot for families, friends, and
          beer enthusiasts.
        </div>

        <div className="team-page__content">
          <div className="team-page__individual">
            <h3>
              <a href="mailto:william@railwerksbrewingdepot.com">
                William Roberts – Founder/Owner/Brewer/BBQ Pit Master
              </a>
            </h3>
            <p>
              William has been brewing for over ten years. Starting with a
              simple kit he bought just for fun and soon found he had a knack
              for brewing. William quickly advanced through the learning curve
              and developed a passion for experimenting with different styles
              and ingredients. Thanks to the patience of his loving wife Denise,
              William's brewing equipment grew just like his love for beer.
            </p>
            <p>
              BBQ got into William's blood stream over 20 years ago. William and
              Denise have worked over the years to create their own homemade
              rubs and sauces to perfect their BBQ style. With a home collection
              of 5 different smokers (one home made out of an old refrigerator)
              he believes everything taste better coming out of a smoker.
            </p>
          </div>
          <div className="team-page__individual">
            <h3>
              <a href="mailto:denise@railwerksbrewingdepot.com">
                Denise Roberts – Founder/Owner/Business Manager
              </a>
            </h3>
            <p>
              Denise is known for her global flavor combinations and recipe
              development of homemade food. A strong believer that food made
              from scratch fills a stomach as well as a heart, giving all
              positive intent. William and Denise's children have grown up
              knowing only homemade macaroni and cheese, cornbread and other
              family favorites.
            </p>
            <p>
              With 12 years of restaurant management experience, Denise has the
              knowledge to bring our business to a higher level. Her restaurant
              experience encompasses staff and inventory management, revenue
              protection and profit & loss accounting. By knowing front and back
              of the house business, Denise makes us well poised for success.
            </p>
          </div>
        </div>
      </div>
      <StaticImage
        alt="Pouring beer"
        src="../images/pouringAtBar.jpg"
        placeholder="blurred"
        layout="fullWidth"
        objectPosition="50% top"
        imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
      />
    </PageLayout>
  );
};

// title should be 60 characters,
// meta description tags can be around ~130 characters.
export const Head = () => (
  <MetaHelper
    title="Meet Our Team – Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Get to know the dedicated team behind Rail Werks Brewing Depot in Columbia Heights, MN. Meet our chefs, brewers, and staff who bring their passion for BBQ, craft beer, and exceptional service to every guest experience."
  />
);

export default OurTeamPage;
