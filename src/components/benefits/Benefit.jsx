import React from "react";

export const Benefit = ({ img, title, text }) => {
  const { src, alt } = img;
  return (
    <div>
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
