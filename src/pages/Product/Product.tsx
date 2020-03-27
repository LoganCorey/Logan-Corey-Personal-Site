import React from "react";
import { Hero } from "./Hero/Hero";
import { Description } from "./Description/Description";
import { Gallery } from "./Gallery/Gallery";
import { IProject } from "../../utils/IProject";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const fetchProject = (projects: IProject[], projectName: string) => {
  const project: IProject[] = projects.filter(
    (project: IProject) =>
      project.name.toLowerCase() === projectName.toLowerCase()
  );
  if (project.length === 1) {
    return project[0];
  }
  throw new Error("Couldn't retrieve project");
};

const ProductPage = (props: any) => {
  //const project = props.fetchProejct("hello");
  const location = useLocation();
  const projectName = location.pathname.split("/")[2];
  const project: IProject = fetchProject(props.projects, projectName);
  return (
    <React.Fragment>
      <Hero
        image={project.hero}
        text={project.name}
        subtitle={project.subtitle}
      />
      <Description
        title={project.name}
        subtitle={project.subtitle}
        description={project.description}
        languages={project.languages}
        link={project.link}
      />
      <Gallery pictures={project.pictures} />
    </React.Fragment>
  );
};

const mapStateToProps = (state: any): any => {
  return {
    projects: state.ProjectReducer.projects
  };
};

export const Product = connect(mapStateToProps, null)(ProductPage);
