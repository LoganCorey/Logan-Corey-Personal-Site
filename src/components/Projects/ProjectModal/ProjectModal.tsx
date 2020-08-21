import React from "react";
//import Specifications from './Specifications/Specifications';
//import Gallery from './Gallery/Gallery';
import { ReactComponent as Github } from "../../../images/assets/github.svg";
import { ReactComponent as Web } from "../../../images/assets/web.svg";
import classes from "./ProjectModal.module.css";

type ProjectModalProps = {
  closeProject: () => void;
  visible: boolean;
  project: any;
};

const ProjectModal = (props: ProjectModalProps) => {
  const project = props.project;
  return (
    <div
      className={
        classes.root + " " + (props.visible === true ? null : classes.invisible)
      }
      onClick={props.closeProject}
    >
      <div className={classes.content}>
        <span className={classes.close} onClick={props.closeProject}>
          &times;
        </span>
        <div className={classes.contentContainer}>
          <div style={{ padding: "10px" }}>
            <img
              src={`../../${project.mainImage}`}
              className={classes.projectImage}
              alt="project"
            />
            <div className={classes.text}>
              <h2
                style={{
                  fontWeight: 300,
                  textAlign: "left",
                  marginBottom: "2px",
                }}
              >
                {project.title} - {project.subtitle}
              </h2>
              <div className={classes.tags}>
                {project.languages.map((language: string) => {
                  return (
                    <h6 className={classes.projectTag} key={language}>
                      {language}
                    </h6>
                  );
                })}
              </div>
              <div className={classes.description}>
                <p style={{ textAlign: "left" }}>{project.description}</p>

                <h3 style={{ fontWeight: 300, textAlign: "left" }}>
                  Check it out
                </h3>
                <div className={classes.inline}>
                  {project.github === "" ? null : (
                    <a href={project.github} className={classes.iconText}>
                      <Github
                        className={classes.icon}
                        style={{
                          position: "relative",
                          marginRight: 10,
                          top: 8,
                        }}
                      />
                      Github
                    </a>
                  )}

                  {project.website === "" ? null : (
                    <a href={project.website} className={classes.iconText}>
                      <Web
                        className={classes.icon}
                        style={{
                          marginLeft: "20px",
                          position: "relative",
                          marginRight: 10,
                          top: 8,
                        }}
                      />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
