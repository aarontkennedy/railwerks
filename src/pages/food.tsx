import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/foodPage.scss";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import { useScreenDetector } from "../helpers/useScreenDetector";
import OrderOnlineButton from "../components/orderOnlineButton/orderOnlineButton";
import Food from "../types/food";

const foodImgStyle = {
  width: "100px",
  height: "100px",
};
const foodImgWrapStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "4px",
};

const sides = [
  new Food("BBQ Baked Beans", "A mixture of smoky beans and bacon."),
  new Food("Coleslaw", "Creamy Southern style coleslaw."),
  new Food(
    "Cornbread",
    "Buttery, with a touch of sweetness. Topped with jalapeno honey butter."
  ),
  new Food("Fries"),
  new Food(
    "Mac & Cheese",
    "Elbow macaroni swimming in a sea of creamy 3-cheese sauce."
  ),
  new Food(
    "Onion straws",
    "",
    (
      <StaticImage
        alt="Onion straws"
        src="../images/onionStraws.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Spinach Salad",
    "Fresh Spinach, red onion, candied walnuts, queso fresco, and fresh berries with our housemade creamy parmesan dressing."
  ),
];

const smokedMeats = [
  new Food(
    "Beef Brisket",
    "1/2LB or 1LB, smoked in house with our signature RWBD rub.",
    (
      <StaticImage
        alt="Brisket"
        src="../images/bbqMeat.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Chicken",
    "1/2LB or 1LB, smoked in house with our signature RWBD rub.",
    (
      <StaticImage
        alt="Chicken"
        src="../images/chicken.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "House Made Hot Link Spicy Sausage",
    "Smoked, house made SPICY Hot Link sausage"
  ),
  new Food(
    "House Made Smoked Polish Sausage",
    "Smoked, house made Polish Kielbasa sausage served on a bed of sauteed onions.",
    (
      <StaticImage
        alt="Polish Sausage"
        src="../images/polishSausage.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Chopped Pork",
    "Slow smoked with our Signature BBQ Rub. Sold by the weight. 1/2LB or 1LB"
  ),
  new Food(
    "Ribs",
    "1/2LB or 1LB, smoked in house with our signature RWBD rub."
  ),
];

const knifeAndFork = [
  new Food(
    "Macaroni and Cheese Bowl",
    "Add on Brisket, Chopped Chicken, Chopped Pork, Polish Sausage, Pork Belly, Bufallo Chicken, or Crispy Chicken",
    (
      <StaticImage
        alt="Loaded Mac and Cheese"
        src="../images/loadedMacNCheese.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Smoked Portobello Mushroom",
    "Smoked portobello mushroom cap, stuffed with seasoned jasmine rice. We top it with our rojo chimichirri and pico."
  ),
  new Food("Salad", "Mixed lettuce with tomatoes, cucumbers, and onions."),
];

const handhelds = [
  new Food(
    "BBQ Tacos",
    "2 tacos with the choice of chicken or pork. Topped with pico, cilantro, BBQ ranch, and lime crema",
    (
      <StaticImage
        alt="Tacos"
        src="../images/tacos.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Beef Brisket Sandwich",
    "Our house made brisket sandwich, top it off with slaw and onion straws!"
  ),
  new Food(
    "Chopped Chicken Sandwich",
    "Our house made chopped chicken sandwich, top it off with slaw and onion straws!"
  ),
  new Food(
    "Chopped Pork Sandwich",
    "Our house made chopped pork sandwich, top it off with slaw and onion straws!"
  ),
  new Food(
    "Pork Belly Sandwich",
    "Our house made pork belly sandwich, top it off with slaw and onion straws!"
  ),
  new Food("Polish Sausage Sandwich", "Our house made polish sausage sandwich"),
  new Food(
    "Cheeseburger",
    "",
    (
      <StaticImage
        alt="Burger"
        src="../images/burgerWithKetchup.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food("Impossible Burger"),
  new Food("Hamburger"),
];

const shareables = [
  new Food(
    "Fries",
    "Crispy fries served your way. Straight Up; salted or dusted with BBQ rub. Neat; fries with beer cheese & shredded cheese. Meatalious; cheese with one of our slow smoked meats. The Werks; meatalicious with pico, sour cream, & BBQ Ranch Dressing.",
    (
      <StaticImage
        alt="Loaded Fries"
        src="../images/loadedFries.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Nachos",
    "Tortilla chips with a base of our homemade beer cheese and melty shredded cheese. Neat; just chips and cheese. Meatalious; cheese with one of our slow smoked meats. The Werks; meatalicious with pico de gallo, sour cream, and BBQ Ranch Dressing.",
    (
      <StaticImage
        alt="Nachos"
        src="../images/nachos.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food(
    "Pig Candy",
    "Smoked pork belly grilled with our signature sweet 'n smokey BBQ sauce. Served with onion straws, a drizzle of more sauce and a sprinkle of green onions."
  ),
  new Food(
    "Rail Ties",
    "Seasoned, gluten-free crunchy pretzel sticks. Served with BBQ Ranch Dip"
  ),
  // new Food("Whole Chicken Wings"),
  new Food(
    "Chicken Tenders",
    "5 whole muscle crispy chicken tenderloins in a lightly peppered batter. Served your way."
  ),
  new Food(
    "Slider",
    "Brisket, Chopped Chicken, Chopped Pork, Crispy Chicken, Pork Belly, Polish Sausage, or Fatty Slider",
    (
      <StaticImage
        alt="Slider"
        src="../images/bbqSandwich.jpg"
        placeholder="blurred"
        imgStyle={foodImgStyle}
        style={foodImgWrapStyle}
      />
    )
  ),
  new Food("Tortilla Chips", "Tortilla Chips with Guac and Pico"),
];

const FoodPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Burger"
          src="../images/burgerWithKetchup.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />{" "}
        <div className="page__hero-title">Food</div>
      </div>
      <div className="food-page">
        <div className="food-page__what-to-expect">
          At Rail Werks Brewing Depot we pride ourselves on offering a rotating
          slection of craft beers and cocktails. We also have non-alcoholic
          mocktails and our very own fantastic root beer.
        </div>
        <div className="food-page__section">
          <div className="food-page__section-title">SHAREABLES</div>
          {shareables.map(function (s) {
            return (
              <div className="food-page__item" key={s.name}>
                {s.staticImage && (
                  <div className="food-page__item-picture">{s.staticImage}</div>
                )}
                <div className="food-page__item-text-wrap">
                  <div className="food-page__item-title">
                    <div>{s.name.toUpperCase()}</div>
                  </div>
                  {s.description && (
                    <div className="food-page__item-description">
                      {s.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isDesktop && (
            <div className="food-page__about-button-holder">
              <OrderOnlineButton />
            </div>
          )}
        </div>

        <div className="food-page__section">
          <div className="food-page__section-title">SMOKED MEATS</div>
          {smokedMeats.map(function (e) {
            return (
              <div className="food-page__item" key={e.name}>
                {e.staticImage && (
                  <div className="food-page__item-picture">{e.staticImage}</div>
                )}
                <div className="food-page__item-text-wrap">
                  <div className="food-page__item-title">
                    <div>{e.name.toUpperCase()}</div>
                  </div>
                  {e.description && (
                    <div className="food-page__item-description">
                      {e.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isDesktop && (
            <div className="food-page__about-button-holder">
              <OrderOnlineButton />
            </div>
          )}
        </div>

        <div className="food-page__section">
          <div className="food-page__section-title">HANDHELDS</div>
          {handhelds.map(function (h) {
            return (
              <div className="food-page__item" key={h.name}>
                {h.staticImage && (
                  <div className="food-page__item-picture">{h.staticImage}</div>
                )}
                <div className="food-page__item-text-wrap">
                  <div className="food-page__item-title">
                    <div>{h.name.toUpperCase()}</div>
                  </div>
                  {h.description && (
                    <div className="food-page__item-description">
                      {h.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isDesktop && (
            <div className="food-page__about-button-holder">
              <OrderOnlineButton />
            </div>
          )}
        </div>

        <div className="food-page__section">
          <div className="food-page__section-title">KNIFE AND FORK</div>
          {knifeAndFork.map(function (k) {
            return (
              <div className="food-page__item" key={k.name}>
                {k.staticImage && (
                  <div className="food-page__item-picture">{k.staticImage}</div>
                )}
                <div className="food-page__item-text-wrap">
                  <div className="food-page__item-title">
                    <div>{k.name.toUpperCase()}</div>
                  </div>
                  {k.description && (
                    <div className="food-page__item-description">
                      {k.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isDesktop && (
            <div className="food-page__about-button-holder">
              <OrderOnlineButton />
            </div>
          )}
        </div>

        <div className="food-page__section">
          <div className="food-page__section-title">SIDES</div>
          {sides.map(function (s) {
            return (
              <div className="food-page__item" key={s.name}>
                {s.staticImage && (
                  <div className="food-page__item-picture">{s.staticImage}</div>
                )}
                <div className="food-page__item-text-wrap">
                  <div className="food-page__item-title">
                    <div>{s.name.toUpperCase()}</div>
                  </div>
                  {s.description && (
                    <div className="food-page__item-description">
                      {s.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isDesktop && (
            <div className="food-page__about-button-holder">
              <OrderOnlineButton />
            </div>
          )}
        </div>
      </div>
      <StaticImage
        alt="Polish Sausage"
        src="../images/polishSausage.jpeg"
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
    title="BBQ Food Menu – Smokin' Ribs, Brisket & More at Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Check out the BBQ food menu at Rail Werks Brewing Depot in Columbia Heights, MN. Savor our smokin' ribs, brisket, pulled pork, and more, paired perfectly with our craft beers. Family-friendly dining for all!"
  />
);

export default FoodPage;
