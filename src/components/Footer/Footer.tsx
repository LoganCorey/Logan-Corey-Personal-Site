import React from "react";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <h1> Logan Corey</h1>
      </div>

      <div className={classes.content}>
        <div className={classes.section}>
          <ul>
            <ol>
              <h3>About</h3>
            </ol>
            <ol>
              <Link to="/about" className={classes.link}>
                <p>About Me</p>
              </Link>
            </ol>
            <ol>
              <Link to="/credits" className={classes.link}>
                <p>Special Thanks</p>
              </Link>
            </ol>
          </ul>
        </div>

        <div className={classes.section}>
          <ul>
            <ol>
              <h3>Projects</h3>
            </ol>
            <ol>
              <Link to="/" className={classes.link}>
                <p>View Projects</p>
              </Link>
            </ol>
          </ul>
        </div>

        <div className={classes.section}>
          <ul>
            <ol>
              <h3>Contact</h3>
            </ol>
            <ol className={classes.line}>
              <a href="https://github.com/LoganCorey" className={classes.link}>
                <Github className={classes.svgLogo} />
                <p className={classes.text}>Github</p>
              </a>
            </ol>
            <ol>
              <a
                href="https://ca.linkedin.com/in/logan-corey"
                className={classes.link}
              >
                <Linkedin className={classes.svgLogo} />

                <p className={classes.text}>Linkedin</p>
              </a>
            </ol>
          </ul>
        </div>
      </div>
    </div>
  );
};
