import React from "react";
import styles from "./searchPagination.module.css";

const Card = ({ name, tagline, image_url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image_url} alt={name} />
      </div>
      <div>
        <h2>Name: {name}</h2>
        <h4>Tagline: {tagline}</h4>
      </div>
    </div>
  );
};

export default Card;
