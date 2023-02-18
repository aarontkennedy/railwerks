import React from "react";

interface PhotoBannerProps {
  photoUrl: string;
}

function PhotoBanner({ photoUrl }: PhotoBannerProps): JSX.Element {
  const photoBannerStyle = {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${photoUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <div style={photoBannerStyle}></div>;
}

export default PhotoBanner;
