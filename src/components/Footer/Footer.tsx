import React from "react";
import { ReactComponent as Github } from "../../images/assets/github.svg";
import { ReactComponent as Linkedin } from "../../images/assets/linkedin.svg";
import {ReactComponent as Mail} from '../../images/assets/mail.svg'
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <div className={classes.brand}>
          <h2 className={classes.brandText}>Logan Corey</h2>
        </div>

        <div className={classes.linkSection}>
          <ul>
            <li>
              <h3>About</h3>
            </li>
            <li>
              <a href="#About" className={classes.link}>
                About Me
              </a>
            </li>
            <li>
              <a href="#Projects" className={classes.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Skills" className={classes.link}>
                Skills
              </a>
            </li>
          </ul>
        </div>

        <div className={classes.linkSection}>
          <ul>
            <li>
              <h3>Contact</h3>
            </li>
            <li>
              <a href="https://github.com/LoganCorey" className={classes.link}>
                <Github className={classes.svgLogo} />
                Github
              </a>
            </li>
            <li>
              <a
                href="https://ca.linkedin.com/in/logan-corey"
                className={classes.link}
              >
                <Linkedin className={classes.svgLogo} />
                Linkedin
              </a>
              
            </li>
            <li>
              <a
                href="mailto:logan.corey@mail.utoronto.ca"
                className={classes.link} 
              >
                <Mail className={classes.svgLogo} style={{width:'30px'}}/>
                logan.corey@mail.utoronto.ca
              </a>
              
            </li>
          </ul>
        </div>
      </footer>
    <div className={classes.bottom}>
    <p >&#169; Logan Corey 2020</p>
    </div>
    </React.Fragment>
  );
};
export default Footer;
