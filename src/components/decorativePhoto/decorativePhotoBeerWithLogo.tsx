import React from "react";
import "./decorativePhotoBeerWithLogo.scss";

function DecorativePhotoBeerWithLogo(): JSX.Element {
  return (
    <div className="decorative-photo-logo">
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
