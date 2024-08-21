import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import Event from "../types/event";
import { getCsvData } from "../helpers/getCsvData";
import { useState, useEffect } from "react";
import PageLayout from "../components/pageLayout";
import "../styles/eventsPage.scss";
import { StaticImage } from "gatsby-plugin-image";
import { useScreenDetector } from "../helpers/useScreenDetector";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  useEffect(() => {
    try {
      getCsvData("/data/events.csv", false).then((rawEventData) => {
        const events: Event[] = [];
        rawEventData.forEach((row) => {
          if (row[0]) {
            events.push(new Event(row[0], row[1], row[2], row[3]));
          }
        });
        setEvents(events);
      });
    } catch (e) {
      // do nothing
    }
  }, []);

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Growlers"
          src="../images/band.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />{" "}
        <div className="page__hero-title">Events</div>
      </div>

      <div className="events-page">
        <div className="events-page__content">
          Welcome to Rail Werks Brewing Depot, your ultimate destination for
          exceptional brews and unforgettable events! Nestled in the heart of
          Columbia Heights, our expansive brewery is more than just a place to
          enjoy a pint – it's a vibrant community hub where fun and camaraderie
          flow as freely as our craft beers.
        </div>
        <div className="events-page__calendar--desktop">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTitle=0&mode=MONTH&showTz=0&showCalendars=0&src=cmFpbHdlcmtzYnJld2luZ2RlcG90QGdtYWlsLmNvbQ&color=%23039BE5"
            style={{
              border: 0,
              borderRadius: "5px",
              display: "block",
              margin: "30px auto 50px auto",
            }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="events-page__calendar--mobile">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTitle=0&mode=MONTH&showTz=0&showCalendars=0&src=cmFpbHdlcmtzYnJld2luZ2RlcG90QGdtYWlsLmNvbQ&color=%23039BE5&showPrint=0"
            style={{
              border: 0,
              borderRadius: "5px",
              display: "block",
              margin: "30px auto 50px auto",
            }}
            width="360"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      {/* <div className="events-page__content watermark">
        {events
          .filter((e) => {
            const eventDate = new Date(e.date);
            const today = new Date();
            return eventDate >= today;
          })
          .map(function (e) {
            const eventDate = new Date(e.date);
            return (
              <div className="events-page__section" key={`${e.name}-${e.date}`}>
                <div>
                  <div>
                    <div>
                      {dayNames[eventDate.getDay()]},{" "}
                      {monthNames[eventDate.getMonth()]} {eventDate.getDate()}{" "}
                      at {e.time.toLowerCase()}
                    </div>
                    <div>
                      <a
                        className="events-page__event-title"
                        href="{e.url}"
                        target="_blank"
                      >
                        {e.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div> */}
    </PageLayout>
  );
};

// title should be 60 characters,
// meta description tags can be around ~130 characters.
export const Head = () => (
  <MetaHelper
    title="Upcoming Events – Rail Werks Brewing Depot, Columbia Heights, MN"
    description="Stay updated on upcoming events at Rail Werks Brewing Depot in Columbia Heights, MN. Join us for live music, trivia nights, beer tastings, and more. Perfect for a fun night out with family and friends!"
  />
);

export default EventsPage;
