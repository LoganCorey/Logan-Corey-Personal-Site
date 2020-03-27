import React from "react";
import { IRow } from "./IRow";
import classes from "./Row.module.scss";

export const Row = (props: IRow) => {
  return (
    <div className={classes.root}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.details}>
        {props.link === false ? (
          props.details
        ) : (
          <a href={props.details} className={classes.link}>
            {" "}
            {props.details}
          </a>
        )}
      </div>
    </div>
  );
};
