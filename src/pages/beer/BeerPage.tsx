import PhotoBannerBeerOnTracks from "../../components/photoBanner/photoBannerBeerOnTracks";
import DecorativePhotoTrainCar from "../../components/decorativePhoto/decorativePhotoTrainCar";
import "./beerPage.scss";
import Beer from "./beer";
import { getGoogleSheetsData } from "../../helpers/getGoogleSheetsData";
import { useEffect, useState } from "react";

const defaultBeers = [
  new Beer(
    "Hazy Train",
    7,
    "You will be going off the rails as you bring this juicy New England IPA to your lips. Double dry hopped with large doses of Citra, Mosaic, and Simcoe hops this brew brings the citrus flavors even Ozzy would approve."
  ),
  // new Beer(
  //   "Fred IPA",
  //   6.4,
  //   `The train industry said goodbye to the caboose and introduced the “Flashing Rear-End Device”. Our friends in the railroad industry came up with a different word to represent the “F” since FRED replaced many jobs on the line.`
  // ),
  // new Beer(
  //   "Gandy Dancer",
  //   6.3,
  //   "A very drinkable West coast style IPA using Cascade hops throughout brewing, adding citrus and grapefruit flavors. This beer makes walking the tracks all day a little more enjoyable."
  // ),
  // new Beer(
  //   "LRT - Light Rail Transit",
  //   5,
  //   "An easy drinking blonde ale that makes the ride into craft beer smoooooottthhhh."
  // ),
  // new Beer(
  //   "Hylander Ale",
  //   6.1,
  //   "Celebrate our hometown Hyldanders in this ale inspired by the flavors of Hylander grog – butterscotch and rum. Grab a pint and ROLL ON....."
  // ),
  // new Beer(
  //   `“B”ee line Lager`,
  //   6.2,
  //   "Ride the rails for this lager revved up with honey. A honey lager that will get you buzzing."
  // ),
  // new Beer(
  //   "Go Blue Sour",
  //   5.4,
  //   "We honor a member of the Columbia Heights community in Go Blue blueberry sour. Inspired by the rally cry of “Go Blue” at Columbia Heights sporting events we bring passion in each glass."
  // ),
  // new Beer(
  //   "Funicular",
  //   6.3,
  //   "This one of a kind ale brings the flavors of a blonde and the lemon lime flavors of Mountain Dew together for a surprisingly refreshing ale. Yes, you read that correctly - Mountain Dew."
  // ),
  // new Beer(
  //   "Short Haul",
  //   7.1,
  //   "As the maple trees are tapped along the tracks, we are tapping this roasty stout with a nice touch of maple and pecans."
  // ),
];

function BeerPage() {
  const [beers, setBeers] = useState(defaultBeers);

  useEffect(() => {
    getGoogleSheetsData(
      "1sDCPoeG3xRe7pb9_od2uDn9EWw1JzDL5cOD5w3BoI2Q",
      "0",
      false
    ).then((rawBeerData) => {
      debugger;
      const beers: Beer[] = [];
      rawBeerData.forEach((row) => {
        beers.push(new Beer(row[0], row[1], row[2]));
      });
      setBeers(beers);
      console.log(rawBeerData);
    });
  }, []);

  return (
    <div className="beer-page">
      <PhotoBannerBeerOnTracks />
      <div className="beer-page__section">
        <div className="beer-page__what-to-expect">
          At Rail Werks Brewing Depot we pride ourselves on offering a variety
          of beers. Here is a sampling of our favorites.
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
                <div>{b.name}</div>
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
