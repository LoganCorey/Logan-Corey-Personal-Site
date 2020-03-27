import React from "react";
import classes from "./GalleryModal.module.scss";

export const GalleryModal = (props: {
  image: string;
  show: boolean;
  clickHandler: any;
}) => {
  return (
    <React.Fragment>
      {props.show === false ? null : (
        <div className={classes.modal__overlay} onClick={props.clickHandler}>
          <div className={classes.modal__body}>
            <div className={classes.modal__close}>X</div>
            <img src={props.image} alt={props.image} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
