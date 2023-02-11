import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="railwerks-header">
      <Link to="/">Railwerks Brewing Depot</Link>
      <Link to="about">About</Link>
      <Link to="menu">Menu</Link>
      <Link to="events">Events</Link>
      <Link to="contact">Contact</Link>
      <a href="https://square.com">Shop</a>
      <a href="https://square.com">Support</a>
    </footer>
  );
}

export default Footer;
