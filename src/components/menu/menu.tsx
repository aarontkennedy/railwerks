import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import "./menu.scss";
import MobileMenu from "./mobileMenu";
import MenuPulldown from "./menuPulldown";
import OrderOnlineButton from "../orderOnlineButton/orderOnlineButton";
import { useScreenDetector } from "../../helpers/useScreenDetector";

const Menu = (): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  const [menuToShow, setMenuToShow] = useState<string | false>(false);

  return (
    <nav className="main-nav">
      <div
        style={
          isDesktop
            ? {
                flex: "1 1 0px",
              }
            : {}
        }
      >
        <Link to="/">
          <StaticImage
            alt="Rail Werks Brewing Depot"
            src="../../images/crossingTracksLogo512.png"
            placeholder="blurred"
            layout="fixed"
            width={75}
            height={75}
            style={
              isDesktop
                ? {
                    marginLeft: "auto",
                    marginRight: "auto",
                  }
                : {}
            }
          />
        </Link>
      </div>

      {isDesktop && (
        <>
          <OrderOnlineButton />

          <MenuPulldown
            name="Menus"
            activeMenuName={menuToShow}
            setActiveMenuName={setMenuToShow}
          >
            <Link to="/beer">Beer</Link>
            <Link to="/wine-cocktails">Cocktails & Wine</Link>
            <Link to="/food">Food</Link>
            <Link to="/happy-hour">Happy Hour</Link>
          </MenuPulldown>

          <Link
            style={{
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "1px",
              lineHeight: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
              whiteSpace: "nowrap",
            }}
            to="/events"
          >
            Events
          </Link>

          {/* <MenuPulldown
            name="Events"
            activeMenuName={menuToShow}
            setActiveMenuName={setMenuToShow}
          >
            <Link to="/events">Event Calendar</Link>
            <Link to="/private-events">Private Events</Link>
          </MenuPulldown> */}

          <MenuPulldown
            name="About"
            activeMenuName={menuToShow}
            setActiveMenuName={setMenuToShow}
          >
            {/* <Link to="/our-story">Our Story</Link> */}
            <Link to="/our-team">Our Team</Link>
            <Link to="/contact">Contact us</Link>
          </MenuPulldown>
        </>
      )}
      {!isDesktop && (
        <MobileMenu>
          <Link to="/beer">Beer</Link>
          <Link to="/wine-cocktails">Cocktails & Wine</Link>
          <Link to="/food">Food</Link>
          <Link to="/happy-hour">Happy Hour</Link>
          <Link to="/events">Event Calendar</Link>
          {/* <Link to="/private-events">Private Events</Link> */}
          {/* <Link to="/our-story">Our Story</Link> */}
          <Link to="/our-team">Our Team</Link>
          <Link to="/contact">Contact us</Link>
        </MobileMenu>
      )}
    </nav>
  );
};

export default Menu;
