import React from "react";
import DecorativePhoto from "./decorativePhoto";
import "./decorativePhotoBeerWithLogo.scss";

function DecorativePhotoBeerWithLogo(): JSX.Element {
  return (
    <div className="decorative-photo-logo">
      <DecorativePhoto
        photoUrl="images/beerOnTrack1.jpg"
        altText="Beer on tracks"
      />
      <img
        className="decorative-photo-logo__logo"
        alt="RWBD"
        src="images/newLogoWithBorder.png"
      />
    </div>
  );
}

export default DecorativePhotoBeerWithLogo;
