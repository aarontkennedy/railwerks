import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <footer className="railwerks-header">
    //   <Link to="/">Railwerks Brewing Depot</Link>
    //   <Link to="about">About</Link>
    //   <Link to="menu">Menu</Link>
    //   <Link to="events">Events</Link>
    //   <Link to="contact">Contact</Link>
    //   <a href="https://square.com">Shop</a>
    //   <a href="https://square.com">Support</a>
    // </footer>
    <footer>
      <ul>
        <li>
          <h4>Hours</h4>
          <p>TBD</p>
        </li>
        <li>
          <h4>Location</h4>
          <p>Columbia Heights, MN</p>
        </li>
      </ul>

      <ul>
        <li>
          <h6>Rail Werks Brewing Depot &trade;</h6>
        </li>
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
    </footer>
  );
}

export default Footer;
