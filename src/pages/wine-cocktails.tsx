import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import Cocktail from "../types/cocktail";
import { useState, useEffect } from "react";
import { getCsvData } from "../helpers/getCsvData";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/cocktailPage.scss";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";

const wine = [
  new Cocktail("Sauvignon Blanc", "White Hills Wine - New Zealand"),
  new Cocktail(
    "Cabernet Sauvignon",
    "Matchbook Wine Company - Zamora, California"
  ),
];
const na = [
  new Cocktail("Root Beer", "House Made Root Beer"),
  new Cocktail("Ginger Ale", "House Made Ginger Syrup"),
];
const slushies = ["Strawberry", "Pina Colada"];

const WineCocktailsPage = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [mocktails, setMocktails] = useState<Cocktail[]>([]);
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  useEffect(() => {
    try {
      getCsvData("/data/cocktails.csv", false).then((rawCocktailData) => {
        const cocktails: Cocktail[] = [];
        rawCocktailData.forEach((row) => {
          if (row[0]) {
            cocktails.push(new Cocktail(row[0], row[1]));
          }
        });
        setCocktails(cocktails);
      });
    } catch (e) {
      // do nothing
    }
  }, []);

  useEffect(() => {
    try {
      getCsvData("/data/mocktails.csv", false).then((rawMocktailData) => {
        const mocktails: Cocktail[] = [];
        rawMocktailData.forEach((row) => {
          if (row[0]) {
            mocktails.push(new Cocktail(row[0], row[1]));
          }
        });
        setMocktails(mocktails);
      });
    } catch (e) {
      // do nothing
    }
  }, []);

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Cocktail Ingredients"
          src="../images/cocktailIngredients.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Cocktails & Wine</div>
      </div>

      <div className="cocktail-page">
        <div className="cocktail-page__what-to-expect">
          At Rail Werks Brewing Depot we pride ourselves on offering a rotating
          slection of craft beers and cocktails. We also have non-alcoholic
          mocktails and our very own fantastic root beer.
        </div>
        <div className="cocktail-page__section">
          <div className="cocktail-page__section-title">COCKTAILS</div>
          {cocktails.map(function (b) {
            return (
              <div className="cocktail-page__item" key={b.name}>
                <div className="cocktail-page__item-title">
                  <div>{b.name.toUpperCase()}</div>
                </div>
                <div className="cocktail-page__item-description">
                  {b.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="cocktail-page__section">
          <div className="cocktail-page__section-title">MOCKTAILS</div>
          {mocktails.map(function (b) {
            return (
              <div className="cocktail-page__item" key={b.name}>
                <div className="cocktail-page__item-title">
                  <div>{b.name.toUpperCase()}</div>
                </div>
                <div className="cocktail-page__item-description">
                  {b.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="cocktail-page__section">
          <div className="cocktail-page__section-title">WINE</div>
          {wine.map(function (b) {
            return (
              <div className="cocktail-page__item" key={b.name}>
                <div className="cocktail-page__item-title">
                  <div>{b.name.toUpperCase()}</div>
                </div>
                <div className="cocktail-page__item-description">
                  {b.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="cocktail-page__section">
          <div className="cocktail-page__section-title">
            NON-ALCOHOLIC BEVERAGES
          </div>
          {na.map(function (b) {
            return (
              <div className="cocktail-page__item" key={b.name}>
                <div className="cocktail-page__item-title">
                  <div>{b.name.toUpperCase()}</div>
                </div>
                <div className="cocktail-page__item-description">
                  {b.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="cocktail-page__section">
          <div className="cocktail-page__section-title">SLUSHIES</div>
          {slushies.map(function (s) {
            return (
              <div className="cocktail-page__item" key={s}>
                <div className="cocktail-page__item-title">
                  <div>{s}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <StaticImage
        alt="Drinks"
        src="../images/twoDrinks.jpg"
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
    title="Wine & Cocktails – Delicious Drinks at Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Enjoy a selection of wines and cocktails at Rail Werks Brewing Depot in Columbia Heights, MN. Perfectly paired with BBQ, our drinks cater to guests from Columbia Heights, Fridley, Northeast Minneapolis, and beyond."
  />
);

export default WineCocktailsPage;
