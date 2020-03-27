import React from "react";
import { Filter } from "./Filter/Filter";
import { connect } from "react-redux";
import classes from "./Filters.module.scss";

const LanguageFilters: string[] = [
  "C++",
  "CSS",
  "HTML",
  "Java",
  "JavaScript",
  "MYSQL",
  "NodeJS",
  "Python",
  "ReactJS",
  "Rust",
  "Scala",
  "SCSS",
  "Typescript"
];

const ProjectTypeFilters: string[] = [
  "Web Development",
  "Systems Programming",
  "Database"
];

let Filters = (props: any) => {
  return (
    <React.Fragment>
      <div className={classes.filters}>
        <Filter name="Language" filters={LanguageFilters} />
        <Filter name="Project Type" filters={ProjectTypeFilters} />
      </div>
      <div className={classes.projects}>
        <p>Projects {props.numProjects}</p>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any): any => {
  return {
    numProjects: state.ProjectReducer.numProjects
  };
};

export default connect(mapStateToProps)(Filters);
