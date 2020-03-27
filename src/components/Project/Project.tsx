import React from "react";
import { IProject } from "../../utils/IProject";
import classes from "./Project.module.scss";

export const Project = (props: { project: IProject }) => {
  return (
    <a className={classes.item} href={"/project/" + props.project.name}>
      <img
        src={props.project.icon}
        className={classes.image}
        alt={props.project.icon}
      />
      <h4 className={classes.title}> {props.project.name}</h4>
      <p className={classes.subtitle}>{props.project.subtitle}</p>
    </a>
  );
};
