import PhotoBannerBeerAndBarrel from "../../components/photoBanner/photoBannerBeerAndBarrel";
import DecorativePhotoHops from "../../components/decorativePhoto/decorativePhotoHops";
import { Helmet } from "react-helmet";
import "./aboutPage.scss";

function About(): JSX.Element {
  return (
    <div className="about-page">
      <Helmet>
        <title>
          About Rail Werks Brewing Depot - Your BBQ and Brewery Destination in
          Columbia Heights
        </title>
        <meta
          name="description"
          content="About Rail Werks Brewing Depot - Your BBQ and Brewery Destination in
          Columbia Heights and Northeast Minneapolis, MN"
        />
      </Helmet>

      <PhotoBannerBeerAndBarrel />
      <div className="about-page__content">
        <p>
          Rail Werks Brewing Depot is a family-run business founded by husband
          and wife team, William and Denise Roberts. We have a passion for great
          food, exceptional beer, and a sense of community. Located in Columbia
          Heights, MN, we strive to be the go-to spot for families, friends, and
          beer enthusiasts.
        </p>

        <div>
          <h3>
            William Roberts
            <span>
              {" "}
              – Founder/Owner/Brewer/BBQ Pit Master
              <a href="mailto:william@railwerksbrewingdepot.com">
                <i title="william@railwerksbrewingdepot.com"></i>
              </a>
            </span>
          </h3>
          <p>
            William has been brewing for over ten years. Starting with a simple
            kit he bought just for fun and soon found he had a knack for
            brewing. William quickly advanced through the learning curve and
            developed a passion for experimenting with different styles and
            ingredients. Thanks to the patience of his loving wife Denise,
            William's brewing equipment grew just like his love for beer.
          </p>

          <p>
            BBQ got into William's blood stream over 20 years ago. William and
            Denise have worked over the years to create their own homemade rubs
            and sauces to perfect their BBQ style. With a home collection of 5
            different smokers (one home made out of an old refrigerator) he
            believes everything taste better coming out of a smoker.
          </p>
        </div>
        <div>
          <h3>
            Denise Roberts
            <span>
              {" "}
              – Founder/Owner/Business Manager
              <a href="mailto:denise@railwerksbrewingdepot.com">
                <i title="denise@railwerksbrewingdepot.com"></i>
              </a>
            </span>
          </h3>
          <p>
            Denise is known for her global flavor combinations and recipe
            development of homemade food. A strong believer that food made from
            scratch fills a stomach as well as a heart, giving all positive
            intent. William and Denise's children have grown up knowing only
            homemade macaroni and cheese, cornbread and other family favorites.
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
      <DecorativePhotoHops />
    </div>
  );
}

export default About;
