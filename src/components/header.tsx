import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="railwerks-header">
      <Link to="/">Railwerks Brewing Depot</Link>
      <Link to="about">About</Link>
      <Link to="menu">Menu</Link>
      <Link to="events">Events</Link>
      <Link to="contact">Contact</Link>
      <a href="https://square.com">Shop</a>
      <a href="https://square.com">Support</a>
    </header>
  );
}

export default Header;
