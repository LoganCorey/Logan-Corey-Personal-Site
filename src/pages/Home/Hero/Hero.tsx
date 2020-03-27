import React from "react";
import Filters from '../../../components/Filters/Filters';
import classes from "./Hero.module.scss";

/**
 * Hero component for site, contains information for
 * Name and brief description of myself
 */
export const Hero = () => {
  return (
    <section id="hero">
      <div className={classes.root}>
        <div className={classes.hero}>
          <div className={classes.header__container}>
            <h1 className={classes.header}> Projects - All</h1>
            <h4 className={classes.subtitle}>Winter 2020 Collection</h4>
          </div>
        </div>
      </div>
      <Filters/>
    </section>
  );
};
