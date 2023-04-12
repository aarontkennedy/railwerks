import "./map.scss";

export const googleMapUrl = "https://goo.gl/maps/27ebC93GnABs5HYWA";

interface MapProps {
  small: boolean;
}

function Map({ small }: MapProps): JSX.Element {
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
        width={small ? 250 : 400}
        height={small ? 250 : 400}
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={url}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
