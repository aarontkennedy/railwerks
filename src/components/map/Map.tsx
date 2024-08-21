import * as React from "react";
import "./map.scss";

export const googleMapUrl = "https://goo.gl/maps/27ebC93GnABs5HYWA";

function Map({
  width,
  height,
}: {
  width: string | number;
  height: string | number;
}): JSX.Element {
  const mapMode = "place";
  const apiKey = "AIzaSyCvEjzaF4BBc65LMgY8LH98hjK2OMooNz8";
  const query = "4055 NE Central Ave, Columbia Heights, MN 55421";
  const url = `https://www.google.com/maps/embed/v1/${mapMode}?key=${apiKey}&q=${encodeURIComponent(
    query
  )}`;

  return (
    <div className={`map-container`}>
      <iframe
        title="RWBD Map"
        className="map"
        width={width}
        height={height}
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={url}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
