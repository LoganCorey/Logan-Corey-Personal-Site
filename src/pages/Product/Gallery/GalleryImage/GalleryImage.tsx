import React from "react";
import { IGalleryImage } from "./IGalleryImage";
import classes from "./GalleryImage.module.scss";

export const GalleryImage = (props: IGalleryImage) => {
  return (
    <div className={classes.col} onClick={props.clickHandler}>
      <div className={classes.gallery__card}>
        <img
          className={classes.gallery__thumbnail}
          src={props.image}
          alt={props.image}
        />
      </div>
    </div>
  );
};
