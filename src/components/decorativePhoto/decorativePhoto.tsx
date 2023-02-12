import React from "react";
import "./decorativePhoto.scss";

interface DecorativePhotoProps {
  photoUrl: string;
  altText: string;
}

function DecorativePhoto({
  photoUrl,
  altText,
}: DecorativePhotoProps): JSX.Element {
  return <img className="decorative-photo" src={photoUrl} alt={altText} />;
}

export default DecorativePhoto;
