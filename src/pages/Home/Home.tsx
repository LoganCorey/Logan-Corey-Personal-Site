import React from "react";
import { Hero } from "./Hero/Hero";
import Browse from "../../components/Browse/Browse";
export const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Browse />
    </React.Fragment>
  );
};
