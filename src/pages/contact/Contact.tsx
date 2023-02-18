import PhotoBannerHops from "../../components/photoBanner/photoBannerHops";
import DecorativePhotoTrainCars from "../../components/decorativePhoto/decorativePhotoTrainCars";
import "./contactPage.scss";

function Contact() {
  return (
    <div className="contact-page">
      <PhotoBannerHops />
      <div className="contact-page__content">
        <div className="contact-page__column">
          <div className="contact-page__brand">Rail Werks Brewing Depot</div>
          <div className="contact-page__detail">
            <a href="mailto:info@railwerksbrewingdepot.com">
              info@railwerksbrewingdepot.com
            </a>
          </div>
          <div className="contact-page__detail">
            <div>4055 40th ST NE</div>
            <div>Columbia Heights, MN 55421</div>
          </div>
        </div>
        <div className="contact-page__column"></div>
      </div>
      <DecorativePhotoTrainCars />
    </div>
  );
}

export default Contact;
