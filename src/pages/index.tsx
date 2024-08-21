import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import "./page.scss";
import "../styles/homePage.scss";
import PageLayout from "../components/pageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  homeMenuImageStyle,
  homeMenuImageWrapperStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import { Link } from "gatsby";
import OrderOnlineButton from "../components/orderOnlineButton/orderOnlineButton";

const IndexPage = () => {
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
        <div className="page__hero-logo">
          <StaticImage
            alt="RWBD"
            src="../images/squareLogo.png"
            placeholder="blurred"
            // layout="fullWidth"
            imgStyle={{}}
            style={{}}
          />
        </div>
      </div>
      <div className="home-page">
        <div className="home-page__about">
          <div className="home-page__about-title">Rail Werks Brewing Depot</div>
          <div className="home-page__about-description">
            Where the beer is cold, the BBQ is smokin', and family is
            everything. Welcome to Rail Werks Brewing Depot, your go-to spot for
            the best BBQ and craft brews in Columbia Heights, MN. Our brewery is
            family-friendly, with an inviting atmosphere, we offer an
            unforgettable experience year-round.
          </div>
          <div className="home-page__about-button-holder">
            <OrderOnlineButton />
          </div>
        </div>

        <div className="home-page__big-menu">
          <Link className="home-page__big-menu-item" to="/food">
            {" "}
            <StaticImage
              alt="Tacos"
              src="../images/tacos.jpg"
              placeholder="blurred"
              imgStyle={homeMenuImageStyle}
              style={homeMenuImageWrapperStyle}
            />
            <div className="home-page__big-menu-text">FOOD</div>
          </Link>
          <Link className="home-page__big-menu-item" to="/beer">
            <StaticImage
              alt="Pint"
              src="../images/beer.jpg"
              placeholder="blurred"
              imgStyle={homeMenuImageStyle}
              style={homeMenuImageWrapperStyle}
            />
            <div className="home-page__big-menu-text">BEER</div>
          </Link>
          <Link className="home-page__big-menu-item" to="/wine-cocktails">
            {" "}
            <StaticImage
              alt="Cocktail"
              src="../images/whiteCocktail.jpg"
              placeholder="blurred"
              imgStyle={homeMenuImageStyle}
              style={homeMenuImageWrapperStyle}
            />
            <div className="home-page__big-menu-text">WINE & COCKTAILS</div>
          </Link>
          <Link className="home-page__big-menu-item" to="/happy-hour">
            {" "}
            <StaticImage
              alt="Beer"
              src="../images/beerFlight.jpg"
              placeholder="blurred"
              imgStyle={homeMenuImageStyle}
              style={homeMenuImageWrapperStyle}
            />
            <div className="home-page__big-menu-text">HAPPY HOUR</div>
          </Link>
        </div>
      </div>
      <StaticImage
        alt="Beer Flight"
        src="../images/beerFlight.jpg"
        placeholder="blurred"
        layout="fullWidth"
        imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
      />
      <StaticImage
        alt="Mac N Cheese"
        src="../images/loadedMacNCheese.jpg"
        placeholder="blurred"
        layout="fullWidth"
        imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
      />
      <StaticImage
        alt="Loaded Fries"
        src="../images/loadedFries.jpg"
        placeholder="blurred"
        layout="fullWidth"
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
    title="Rail Werks Brewing Depot – Best BBQ and Craft Beer in Columbia Heights, MN"
    description="Welcome to Rail Werks Brewing Depot in Columbia Heights, MN! Enjoy smokin' BBQ, rotating craft beers, and a family-friendly atmosphere year-round. Perfect for casual dining, events, and great times with friends and family. Visit us today!"
  />
);

export default IndexPage;
