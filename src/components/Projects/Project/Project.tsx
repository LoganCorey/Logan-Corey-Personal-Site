import React from "react";
import classes from "./Project.module.css";

type ProjectProps = {
  title: string;
  tags: string[];
  image: string;
};

const Project = (props: ProjectProps) => {
  return (
    <div className={classes.root}>
      <div
        className={classes.picture}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={classes.projectDescription}>
        <h3 className={classes.projectTitle}>{props.title}</h3>
        {props.tags.map((tag: string, index: number) => {
          return (
            <h6 className={classes.projectTag} key={index}>
              {tag}
            </h6>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
