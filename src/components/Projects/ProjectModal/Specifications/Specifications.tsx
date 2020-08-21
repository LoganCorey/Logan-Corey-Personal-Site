import React from "react";
import classes from "./Specifications.module.css";

const Specifications = (props: any) => {
  return (
    <div className={classes.root}>
          <h3 className={classes.title}> Specifications</h3>
      <div className={classes.row}>
        <h4>Project Name</h4>
        <p> Caev</p>
      </div>
      <div className={classes.rowBanded}>
        <h4>Project Type</h4>
        <p> Caev</p>
      </div>
      <div className={classes.row}>
        <h4>Tools Used</h4>
        <p> Caev</p>
      </div>
      <div className={classes.rowBanded}>
        <h4>Project Name</h4>
        <p> Caev</p>
      </div>
      <div className={classes.row}>
        <h4>Github link</h4>
        <p> Caev</p>
      </div>
    </div>
  );
};

export default Specifications;
