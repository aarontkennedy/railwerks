import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import { useState, useEffect } from "react";
import Beer from "../types/beer";
import { getCsvDataWithCookieCaching } from "../helpers/getCsvData";
import PageLayout from "../components/pageLayout";
import "../styles/beerPage.scss";
import { StaticImage } from "gatsby-plugin-image";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import { useScreenDetector } from "../helpers/useScreenDetector";

const beerCsvUrl = "https://railwerks.s3.us-east-2.amazonaws.com/beers.csv";

const BeerPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  useEffect(() => {
    try {
      getCsvDataWithCookieCaching(beerCsvUrl, false).then((rawBeerData) => {
        const beers: Beer[] = [];
        rawBeerData.forEach((row) => {
          if (row[0]) {
            beers.push(new Beer(row[0], row[2], row[1]));
          }
        });
        setBeers(beers);
      });
    } catch (e) {
      // do nothing
    }
  }, []);

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Beer Flight"
          src="../images/flight.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Beer</div>
      </div>
      <div className="beer-page">
        <div className="beer-page__what-to-expect">
          At Rail Werks Brewing Depot we pride ourselves on offering a rotating
          slection of craft beers. Enjoy a pint in our brewery or stop in for a
          crowler or a growler!
        </div>
        <div className="beer-page__content">
          {beers.map(function (b) {
            return (
              <div
                className="beer-page__section"
                key={`${b.name}-${b.alcoholPercent}`}
              >
                <div className="beer-page__header">
                  <div>{b.name.toUpperCase()}</div>
                </div>
                <div className="beer-page__item">{b.description}</div>
                <div className="beer-page__abv">{b.alcoholPercent}% ABV</div>
              </div>
            );
          })}
        </div>
      </div>
      <StaticImage
        alt="Crowlers"
        src="../images/crowlers.jpg"
        placeholder="blurred"
        layout="fullWidth"
        imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
      />
      <StaticImage
        alt="Growlers"
        src="../images/barWithGrowlers.jpg"
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
    title="Craft Beer Menu – Rotating Drafts & Local Brews at Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Explore the craft beer menu at Rail Werks Brewing Depot in Columbia Heights, MN. Discover our rotating selection of local brews, from IPAs to stouts, perfectly paired with our smokin' BBQ. Visit us today!"
  />
);

export default BeerPage;
