import React from "react";
import { IDescription } from "./IDescription";
import { Specifications } from "../../../components";
import classes from "./Description.module.scss";

export const Description = (props: IDescription) => {
  return (
    <div className={classes.root}>
      <div className={classes.description}>
        <h1 className={classes.title}>{props.title}</h1>
        <h3 className={classes.subtitle}>{props.subtitle}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.specifications}>
        <Specifications
          languages={props.languages}
          name={props.title}
          link={props.link}
        />
      </div>
    </div>
  );
};
