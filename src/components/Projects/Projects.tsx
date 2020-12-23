import React, { useState } from "react";
import Project from "./Project/Project";
import ProjectModal from "./ProjectModal/ProjectModal";
import projectsData from "../../content/projects.json";
import FadeInSection from "../FadeInSection/FadeInSection";
import classes from "./Projects.module.css";

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(false);
  // Index in projectsData array
  const [selectedProject, setSelectedProject] = useState(0);

  const closeProject = () => {
    setVisibleProject(false);
  };

  const openProject = (projectNumber: number) => {
    setSelectedProject(projectNumber);
    setVisibleProject(true);
  };

  return (
    <React.Fragment>
      <div className={classes.root} id="Projects">
        <h1 className={classes.projectsHeader}>Projects</h1>
        <h2 className={classes.projectsSubtitle}>
          Click on any of the projects to learn more
        </h2>
        <div className={classes.projectsContainer}>
          {projectsData.projects.map((project: any, index: number) => {
            return (
              <div onClick={() => openProject(index)}  key={project.title}>
                <FadeInSection>
                <Project
                  title={project.title}
                  tags={project.tags.sort()}
                  image={project.mainImage}
                />
                </FadeInSection>
              </div>
            );
          })}
        </div>
      </div>
      <ProjectModal
        visible={visibleProject}
        closeProject={closeProject}
        project={projectsData.projects[selectedProject]}
      />
    </React.Fragment>
  );
};
export default Projects;
