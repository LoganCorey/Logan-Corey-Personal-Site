import React, { useState } from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [showMobileNav, setMobileNav] = useState(false);
  const triggerMobileNav = () => {
    setMobileNav(!showMobileNav);
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <a href="#About">Logan Corey</a>
      </div>
      <div className={classes.mainLinks}>
        <ul className={classes.navLinks}>
          <li>
            <a href="#About">
              About <span></span>
              <span></span>{" "}
            </a>
          </li>
          <li>
            <a href="#Projects">
              Projects <span></span>
              <span></span>{" "}
            </a>
          </li>
          <li>
            <a href="#Skills">
              Skills <span></span>
              <span></span>{" "}
            </a>
          </li>
          <li>
            <a href="#Contact">
              Contact <span></span>
              <span></span>{" "}
            </a>
          </li>
        </ul>
      </div>
      <span className={classes.icon} onClick={triggerMobileNav}>
        <i></i>
        <i></i>
        <i></i>
      </span>
      {showMobileNav ? (
        <div className={classes.mobileLinks}>
          <ul className={classes.mobileNavLinks}>
            <li className={classes.mobileLink}>
              <a href="#About" onClick={triggerMobileNav}>
                About
              </a>
              <span></span>
              <span></span>
            </li>
            <li className={classes.mobileLink}>
              <a href="#Projects" onClick={triggerMobileNav}>
                Projects
              </a>
            </li>
            <li className={classes.mobileLink}>
              <a href="#Skills" onClick={triggerMobileNav}>
                Skills
              </a>
            </li>
            <li className={classes.mobileLink}>
              <a href="#Contact" onClick={triggerMobileNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;

/*
 <div className={classes.root}>
      <div className={classes.flair}>
        <a href="#About" className={classes.link}>
          Logan Corey
        </a>
      </div>
      <div className={classes.links}>
        <ul>
          <li style={{float:'right'}}>
            <a href="#About" className={classes.link}>
              About Me
              <span></span>
              <span></span>{" "}
            </a>
          </li>
          <li style={{float:'right'}}>
            {" "}
            <a href="#Projects" className={classes.link}>
              Projects <span></span>
              <span></span>
            </a>
          </li>
          <li style={{float:'right'}}>
            <a href="#Contact" style={{float:'right'}} className={classes.link}>
              {" "}
              Contact <span></span>
              <span></span>
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>

*/
