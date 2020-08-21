import React from "react";
import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
      <React.Fragment>
          <h3> Gallery</h3>
 
    <div className={classes.root}>
      <div className={classes.item}></div> <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div> <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </div>
    </React.Fragment>
  );
};

export default Gallery;