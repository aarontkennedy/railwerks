import React from "react";
import Menu from "./menu/menu";
import OrderOnlineButton from "./orderOnlineButton/orderOnlineButton";
import Footer from "./footer/footer";
import { useScreenDetector } from "../helpers/useScreenDetector";

export default function PageLayout({ children }) {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <div className="page">
      <Menu />
      <main>{children}</main>
      {!isDesktop && (
        <div
          style={{
            position: "fixed",
            bottom: "15px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <OrderOnlineButton />
        </div>
      )}
      <Footer />
    </div>
  );
}
