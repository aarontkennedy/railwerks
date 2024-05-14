import DecorativePhotoBeerAndBarrel from "../../components/decorativePhoto/decorativePhotoBeerAndBarrel";
import DecorativePhotoBeerWithLogo from "../../components/decorativePhoto/decorativePhotoBeerWithLogo";
import { railpassUrl } from "../../helpers/constants";
import { Helmet } from "react-helmet";
import "./frontPage.scss";

function FrontPage(): JSX.Element {
  return (
    <div className="front-page">
      <Helmet>
        <title>
          Welcome to Rail Werks Brewing Depot – Best Craft Brews and BBQ in
          Columbia Heights, MN
        </title>
        <meta
          name="description"
          content="Rail Werks Brewing Depot – Best Craft Brews and BBQ in Columbia Heights, MN"
        />
      </Helmet>

      <DecorativePhotoBeerWithLogo />
      <div id="front-page-content"></div>
      <div className="front-page__content">
        <h2 className="front-page__quote">
          Where the beer is cold, the BBQ is smokin', and family is everything.
        </h2>

        <p>
          Welcome to Rail Werks Brewing Depot, your go-to spot for the best BBQ
          and craft brews in Columbia Heights, MN. Our brewery is
          family-friendly, with an inviting atmosphere, we offer an
          unforgettable experience year-round.
        </p>

        <div
          className="front-page__content--center"
          style={{ marginTop: "75px" }}
        >
          <h3>"Free beer, free food, free merch!"</h3>

          <p>
            Tap the Rail Pass button below to support Rail Werks Brewing Depot
          </p>

          <div className="front-page__railpass-cta-wrap">
            <a href={railpassUrl}>
              <img
                className="front-page__railpass-cta"
                alt="Rail Pass"
                src="images/RWBDlogoRailPass.jpg"
              />
            </a>
          </div>
        </div>
      </div>
      <DecorativePhotoBeerAndBarrel />
    </div>
  );
}

export default FrontPage;
