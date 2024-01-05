import React, { useContext } from "react";

import PhotosContext from "./PhotosContext";
import ThemeContext from "./ThemeContext";

// Use functional or class component based on your preference.
// Make it a default export.

export default function PhotosList() {
  const { theme } = useContext(ThemeContext.Context);
  const { photos, fetchPhotos } = useContext(PhotosContext.Context);

  const isLight = theme === "light";

  const listStyle = {
    background: isLight ? "white" : "black",
  };
  const titleStyle = {
    color: isLight ? "black" : "white",
  };

  return (
    <div id="photos-list-container" style={listStyle}>
      <ul id="photos-list">
        {photos.map((item) => (
          <li key={item.title}>
            <h3 style={titleStyle}>{item.title}</h3>
            <img src={item.imgSrc} alt={item.title} />
          </li>
        ))}
      </ul>
      <button id="fetch-photos" onClick={fetchPhotos}>
        Fetch photos
      </button>
    </div>
  );
}
