import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";

interface PhotoBannerProps {
  photoUrl: string;
}

function PhotoBanner({ photoUrl }: PhotoBannerProps): JSX.Element {
  const { height, width } = useWindowDimensions();
  const getBannerHeight = (): string => {
    if ((width ?? 0) >= 1920) return "600px";
    if ((width ?? 0) >= 1024) return "500px";
    if ((width ?? 0) >= 768) return "300px";
    return "250px";
  };

  const photoBannerStyle = {
    height: getBannerHeight(),
    width: "100%",
    backgroundImage: `url(${photoUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <div style={photoBannerStyle}></div>;
}

export default PhotoBanner;
