import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="railwerks header">
      <nav>
        <Link to="/">
          <img alt="logo" src="images/smallLogoRWBDCrossTracks.png" />
        </Link>

        <div id="navbarSupportedContent">
          <ul>
            <Link to="about">
              <a href="#aboutUs">About Us</a>
            </Link>
            <li>
              <a href="https://rail-werks-brewing-depot.square.site">
                Rail Pass
              </a>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.facebook.com/Rail-Werks-Brewing-Depot-698173990540554/">
                <i title="facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RailWerksBD">
                <i title="twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/railwerksbd/">
                <i title="instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC29D0cVHo7l1VxNNW-M5HWA">
                <i title="youtube"></i>
              </a>
            </li>
            <li>
              <a href="mailto:info@railwerksbrewingdepot.com">
                <i title="info@railwerksbrewingdepot.com"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
