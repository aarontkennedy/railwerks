import PhotoBannerHops from "../../components/photoBanner/photoBannerHops";
import DecorativePhotoTrainCars from "../../components/decorativePhoto/decorativePhotoTrainCars";
import "./contactPage.scss";
import Map, { googleMapUrl } from "../../components/map/Map";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import { Helmet } from "react-helmet";
import Hours from "../../components/hours";

function Contact(): JSX.Element {
  const { height, width } = useWindowDimensions();
  const isTabletOrLarger = () => {
    return (width ?? 0) >= 768; // assume mobile?
  };
  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Contact Rail Werks Brewing Depot – Your BBQ and Brewery in Columbia
          Heights, MN
        </title>
        <meta
          name="description"
          content="Contact Rail Werks Brewing Depot – Your BBQ and Brewery in Columbia Heights and Northeast Minneapolis, MN"
        />
      </Helmet>

      <PhotoBannerHops />
      <div className="contact-page__content">
        <div className="contact-page__column">
          <div className="contact-page__brand">Rail Werks Brewing Depot</div>
          <div className="contact-page__detail">
            <div>
              <a href="tel:612-367-6758">612-367-6758</a>
            </div>
            <a href="mailto:info@railwerksbrewingdepot.com">
              info@railwerksbrewingdepot.com
            </a>
          </div>
          <div className="contact-page__detail">
            <div>
              <a className="contact-page__map-link" href={googleMapUrl}>
                4055 NE Central Ave
              </a>
            </div>
            <div>
              <a className="contact-page__map-link" href={googleMapUrl}>
                Columbia Heights, MN 55421
              </a>
            </div>
          </div>
          {isTabletOrLarger() && <Hours namespace="contact-page" />}
        </div>
        <div className="contact-page__column">
          <Map small={!isTabletOrLarger()} />
        </div>
        {!isTabletOrLarger() && <Hours namespace="contact-page" />}
      </div>

      <DecorativePhotoTrainCars />
    </div>
  );
}

export default Contact;
