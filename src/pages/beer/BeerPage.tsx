import PhotoBannerBeerOnTracks from "../../components/photoBanner/photoBannerBeerOnTracks";
import DecorativePhotoTrainCar from "../../components/decorativePhoto/decorativePhotoTrainCar";
import "./beerPage.scss";
import Beer from "./beer";
import { getCsvData } from "../../helpers/getCsvData";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function BeerPage() {
  const [beers, setBeers] = useState<Beer[]>([]);

  // useEffect(() => {
  //   getGoogleSheetsData(
  //     "1sDCPoeG3xRe7pb9_od2uDn9EWw1JzDL5cOD5w3BoI2Q",
  //     "0",
  //     false
  //   ).then((rawBeerData) => {
  //     const beers: Beer[] = [];
  //     rawBeerData.forEach((row) => {
  //       beers.push(new Beer(row[0], row[1], row[2]));
  //     });
  //     setBeers(beers);
  //   });
  // }, []);

  useEffect(() => {
    try {
      getCsvData("/data/beers.csv", false).then((rawBeerData) => {
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
    <div className="beer-page">
      <Helmet>
        <title>
          Craft Beer and Cocktails Menu – Rail Werks Brewing Depot, Columbia
          Heights, MN
        </title>
        <meta
          name="description"
          content="Craft Beer and Cocktails Menu – Rail Werks Brewing Depot, Columbia Heights and Northeast Minneapolis, MN"
        />
      </Helmet>

      <PhotoBannerBeerOnTracks />
      <div className="beer-page__section">
        <div className="beer-page__what-to-expect">
          At Rail Werks Brewing Depot we pride ourselves on offering a rotating
          slection of craft beers and cocktails.{" "}
          {beers && beers.length > 0
            ? ""
            : `Come in to see what we have on
          tap!`}{" "}
          We also have non-alcoholic mocktails and our very own fantastic root
          beer.
        </div>
      </div>
      <div className="beer-page__content watermark">
        {beers.map(function (b) {
          return (
            <div
              className="beer-page__section"
              key={`${b.name}-${b.alcoholPercent}`}
            >
              <div className="beer-page__header">
                <div>{b.name.toUpperCase()}</div>
                <div>{b.alcoholPercent}% ABV</div>
              </div>
              <div className="beer-page__item">{b.description}</div>
            </div>
          );
        })}
      </div>

      <DecorativePhotoTrainCar />
    </div>
  );
}

export default BeerPage;
