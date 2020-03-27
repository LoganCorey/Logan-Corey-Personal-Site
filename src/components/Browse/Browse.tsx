import React from "react";
import { Project } from "../Project/Project";
import { IProject } from "../../utils/IProject";
import { connect } from "react-redux";
import classes from "./Browse.module.scss";

const Browse = (props: any) => {
  return (
    <div className={classes.root}>
      {props.projects.map((project: IProject, index: number) => {
        return <Project project={project} key={index} />;
      })}

      {props.projects.length === 0 ? (
        <h1>No projects match these filters!</h1>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: any): any => {
  return {
    projects: state.ProjectReducer.filteredProjects
  };
};

export default connect(mapStateToProps)(Browse);
