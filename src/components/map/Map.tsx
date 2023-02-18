import "./map.scss";

export const googleMapUrl = "https://goo.gl/maps/hsjDDDjA3ooKvvHv8";

interface MapProps {
  small: boolean;
}

function Map({ small }: MapProps): JSX.Element {
  const mapMode = "view";
  const apiKey = "AIzaSyCvEjzaF4BBc65LMgY8LH98hjK2OMooNz8";
  const center = "45.0425,-93.247";
  const zoom = 16;
  const url = `https://www.google.com/maps/embed/v1/${mapMode}?key=${apiKey}&center=${center}&zoom=${zoom}`;

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
