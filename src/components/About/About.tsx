import React from "react"
import AboutButton from "./Button/Button"
import AboutImage from "./Image/Image"
import classes from "./About.module.css"
const About = () => {
  return (
    <div className={classes.root} id="About">
         
      <div className={classes.aboutInformation}>
      
        <h1 className={classes.aboutHeader}> Logan Corey </h1>
        <hr className={classes.aboutHeaderUnderline} />
        <h2 className={classes.aboutSubtitle}>Software Developer</h2>
   
        <h4 className={classes.aboutDescription}>
          At a young age my dad eventually got tired of me asking him questions
          on how everything worked and why things worked the way they did.
          "Google it!" became his mantra and very quickly I began just doing
          that until I graduated from the University of Toronto and found a
          passion for programming. It doesn't matter what it is (full stack,
          front end, systems level) it's all exciting to me. I hope you can see
          some of that excitement in the projects I have here on my portfolio.
        </h4>
     
     
        <AboutButton />
     
      </div>
  
      <div className={classes.aboutPicture}>
   
        <AboutImage />
   
      </div>
    
    </div>
  )
}

export default About
