import PhotoBannerBbq from "../../components/photoBanner/photoBannerBbq";
import DecorativePhotoBbqMeat from "../../components/decorativePhoto/decorativePhotoBbqMeat";
import "./foodPage.scss";

function Food() {
  return (
    <div className="food-page">
      <PhotoBannerBbq />
      <div className="food-page__content watermark">
        <div className="food-page__section">
          <h1 className="food-page__header food-page--center">Shareables</h1>
          <div className="food-page__item">Slow smoked whole chicken wings</div>
          <div className="food-page__item">
            Sliders with your choice of meat
          </div>
          <div className="food-page__item">Rail Ties - seasoned prezels</div>
          <div className="food-page__item">Nachos served a variety of ways</div>
          <div className="food-page__item">Pig Candy - smoked pork belly</div>
        </div>
        <div className="food-page__section">
          <h1 className="food-page__header food-page--center">Entrees</h1>
          <div className="food-page__item">
            Sandwiches and meat platters featuring our house smoked meats;
            chopped pork, brisket, chicken, and pork belly.
          </div>
        </div>
        <div className="food-page__section">
          <h1 className="food-page__header food-page--center">Sides</h1>
          <div className="food-page__item">
            Macaroni & cheese, cornbread, coleslaw, BBQ baked beans, fries,
            onion straws, chopped salad, and more.
          </div>
        </div>
      </div>
      <DecorativePhotoBbqMeat />
    </div>
  );
}

export default Food;
