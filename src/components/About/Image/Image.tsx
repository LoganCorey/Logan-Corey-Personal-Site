import React from "react"
import image1 from "../../../images/hero/1.png"
import image2 from "../../../images/hero/2.png"
import image0 from "../../../images/hero/0.png"
import imageNeg1 from "../../../images/hero/-1.png"
import imageNeg2 from "../../../images/hero/-2.png"
import classes from "./Image.module.css"

const AboutImage = () => {
  return (
    <div className={classes.root}>
  
      <img src={imageNeg2} alt="first part of myself sliced"/>
      <img src={imageNeg1} alt="second part of myself sliced"/>
      <img src={image0} alt="third part of myself sliced"/>
      <img src={image1} alt="fourth part of myself sliced"/>
      <img src={image2} alt="fifth part of myself sliced"/>
 
    </div>
  )
}

export default AboutImage;
