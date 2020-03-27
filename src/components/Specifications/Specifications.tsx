import React from "react";
import { ISpecifications } from "./ISpecifications";
import { Row } from "./Row/Row";
import classes from "./Specifications.module.scss";

export const Specifications = (props: ISpecifications) => {
  return (
    <div className={classes.specification}>
      <h1 className={classes.header}>Details</h1>
      <Row name="Project Name" link={false} details={props.name} />
      <Row name="Languages" link={false} details={props.languages.join(", ")} />
      <Row name="Project Link" link={true} details={props.link} />
    </div>
  );
};
