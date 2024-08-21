import React from "react";
import "./socialNavigation.scss";
import EnvelopeIcon from "../../images/svg/envelopeIcon";
import InstagramIcon from "../../images/svg/instagramIcon";
import FacebookIcon from "../../images/svg/squareFacebookIcon";

const SocialNavigation = (): JSX.Element => {
  return (
    <div className="social-navigation">
      <a
        aria-label="Facebook"
        href="https://www.facebook.com/Rail-Werks-Brewing-Depot-698173990540554/"
      >
        <FacebookIcon width={30} hexColor="#FFFFFF" />
      </a>

      <a aria-label="Instagram" href="https://www.instagram.com/railwerksbd/">
        <InstagramIcon width={30} hexColor="#FFFFFF" />
      </a>

      <a aria-label="Email" href="mailto:info@railwerksbrewingdepot.com">
        <EnvelopeIcon width={30} hexColor="#FFFFFF" />
      </a>
    </div>
  );
};

export default SocialNavigation;
