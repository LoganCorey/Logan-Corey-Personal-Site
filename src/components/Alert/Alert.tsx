import React from "react";
import { IAlert } from "./IAlert";
import classes from "./Alert.module.scss";

export const Alert = (props: IAlert) => {
  return (
    <div className={classes.popup}>
      <span
        className={
          classes.popuptext +
          " " +
          (props.show === true
            ? classes.show
            : props.initialize === true
            ? ""
            : classes.hide)
        }
      >
        {props.text}
      </span>
    </div>
  );
};
