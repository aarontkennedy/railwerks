import DecorativePhotoBeerAndBarrel from "../../components/decorativePhoto/decorativePhotoBeerAndBarrel";
import DecorativePhotoBeerWithLogo from "../../components/decorativePhoto/decorativePhotoBeerWithLogo";
import { railpassUrl } from "../../helpers/constants";
import "./frontPage.scss";

function FrontPage(): JSX.Element {
  return (
    <div className="front-page">
      <DecorativePhotoBeerWithLogo />
      <div id="front-page-content"></div>
      <div className="front-page__content">
        <h2 className="front-page__quote">
          Where the beer is cold, the BBQ is smokin', and family is everything.
        </h2>

        <p>Welcome to Rail Werks Brewing Depot. We're glad you stopped by.</p>

        <p>
          A brewery/restaurant experience of the likes Minnesota has never seen.
          We feature rotating craft brews, smokin' BBQ and a large indoor space
          for year round activities. Snow will never get in the way of the fun.
        </p>

        <div className="front-page__content--center">
          <h2>"Free beer, free food, free merch!"</h2>

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
