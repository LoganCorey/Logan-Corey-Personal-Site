import React from "react";
import classes from "./About.module.scss";

export const About = () => {
  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.header__container}>
          <h1 className={classes.header}> About Me</h1>
          <h4 className={classes.subtitle}>Logan Sterling Corey</h4>
        </div>
      </div>

      <div className={classes.container}>
        <h1 className={classes.light}> About Me</h1>
        <p>
          At a young age my dad eventually got tired of me asking him questions
          on how everything worked and why things worked the way they did.
          "Google it!" became his mantra and very quickly I began just doing
          that until I graduated from the University of Toronto and found a
          passion for programming. It doesn't matter what it is (full stack,
          front end, systems level) it's all exciting to me. I hope you can see
          some of that excitement in the projects I have here on my portfolio.
        </p>

        <h1 className={classes.light} style={{ marginTop: "80px" }}>
          {" "}
          Why Does My Site Look Like a Shop?
        </h1>
        <p>
          While I wanted to create this site to showcase some of the things I've
          worked on I also took it as an opportunity to create something a bit
          different. Typically a portfolio site is done for the purpose of
          finding a job and while some are really amazing I felt like that when
          one creates a site such as this for the purpose of seeking a job they
          lose a bit of specialness from their creator. As a response to this I
          created this site to be a browse page to express how my feelings on
          this. Instead of creating a site to showcase who you are the site
          becomes estentially a browse page for employers.
        </p>
      </div>
    </div>
  );
};
