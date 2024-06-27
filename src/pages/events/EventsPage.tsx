import PhotoBannerBeerOnTracks from "../../components/photoBanner/photoBannerBeerOnTracks";
import DecorativePhotoTrainCar from "../../components/decorativePhoto/decorativePhotoTrainCar";
import "./eventsPage.scss";
import Event from "./event";
import { getCsvData } from "../../helpers/getCsvData";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

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
    <div className="events-page">
      <Helmet>
        <title>Events – Rail Werks Brewing Depot, Columbia Heights, MN</title>
        <meta
          name="description"
          content="Events – Rail Werks Brewing Depot, Columbia Heights and Northeast Minneapolis, MN"
        />
      </Helmet>

      <PhotoBannerBeerOnTracks />
      <div className="events-page__section">
        <div className="events-page__what-to-expect">
          Welcome to Rail Werks Brewing Depot, your ultimate destination for
          exceptional brews and unforgettable events! Nestled in the heart of
          Columbia Heights, our expansive brewery is more than just a place to
          enjoy a pint – it's a vibrant community hub where fun and camaraderie
          flow as freely as our craft beers.
        </div>
      </div>
      <div className="events-page__content watermark">
        {events.map(function (e) {
          const eventDate = new Date(e.date);
          return (
            <div className="events-page__section" key={`${e.name}-${e.date}`}>
              <div>
                <div>
                  <div>
                    {dayNames[eventDate.getDay()]},{" "}
                    {monthNames[eventDate.getMonth()]} {eventDate.getDate()} at{" "}
                    {e.time.toLowerCase()}
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
      </div>

      <DecorativePhotoTrainCar />
    </div>
  );
}

export default EventsPage;
