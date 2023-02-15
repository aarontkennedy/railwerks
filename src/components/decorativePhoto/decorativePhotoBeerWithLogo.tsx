import React from "react";
import DecorativePhoto from "./decorativePhoto";
import "./decorativePhotoBeerWithLogo.scss";

function DecorativePhotoBeerWithLogo(): JSX.Element {
  return (
    <div className="decorative-photo-logo">
      {/* <DecorativePhoto
        photoUrl="images/beerOnTrack1.jpg"
        altText="Beer on tracks"
      /> */}
      <a href="#front-page-content">
        <img
          className="decorative-photo-logo__logo"
          alt="RWBD"
          src="images/newLogoWithBorder.png"
        />
      </a>
    </div>
  );
}

export default DecorativePhotoBeerWithLogo;
