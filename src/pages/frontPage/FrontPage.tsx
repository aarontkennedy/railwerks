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
          Coming soon, we will bring a brewery/restaurant experience of the
          likes Minnesota has never seen. We will feature rotating craft brews,
          smokin' BBQ and a large indoor space for year round activities. Snow
          will never get in the way of the fun.
        </p>

        <p>
          We are very excited about this venture. We would love to tell you more
          about the business in a one-on-one phone call or in person meeting. In
          the meantime, visit our{" "}
          <a href="https://www.youtube.com/channel/UC29D0cVHo7l1VxNNW-M5HWA">
            YouTube Channel RailWerksBD
          </a>
          . Let's follow a dream and make this happen!
        </p>

        <p>
          We invite you to take a look around the depot while you wait for this
          train to roll into the station!
        </p>

        <div className="front-page__video">
          <div>
            <iframe
              className="youtube-video"
              title="Youtube RWBD video"
              src="https://www.youtube.com/embed/25bTT2OZxuE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="front-page__content--center">
          <p>
            CLICK HERE for your opportunity to support Rail Werks Brewing Depot.
            In return, receive FREE beer AND food!
          </p>

          <h2>“One-time fee, lifetime benefits”</h2>

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
