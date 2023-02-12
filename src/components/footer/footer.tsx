import React from "react";
import { Link } from "react-router-dom";
import SocialNavigation from "../socialNavigation/socialNavigation";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <ul>
          <li>Rail Werks Brewing Depot &trade;</li>
          <li>
            <a href="mailto:info@railwerksbrewingdepot.com">
              info@railwerksbrewingdepot.com
            </a>
          </li>
          <li>
            <h4>Hours</h4>
            <p>TBD</p>
          </li>
          <li>
            <h4>Location</h4>
            <p>Columbia Heights, MN</p>
          </li>
        </ul>
      </div>

      <div className="footer__column">
        <div>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          {/* <a href="https://square.com">Shop</a> */}
        </div>
        <SocialNavigation />
      </div>
    </footer>
  );
}

export default Footer;
