import React from "react";
import { IHero } from "./IHero";
import classes from "./Hero.module.scss";

export const Hero = (props: IHero) => {
  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url(${props.image})`
      }}
    >
      <div className={classes.header__container}>
        <h1 className={classes.header}> {props.text}</h1>
        <h4 className={classes.subtitle}>{props.subtitle}</h4>
      </div>
    </div>
  );
};
