import React from 'react';
import Skill from './Skill/Skill';
import skillsData from '../../content/skills.json';
import Monitor from '../../images/assets/monitor.svg';
import Programming from '../../images/assets/programming.svg';
import Tools from '../../images/assets/tools.svg';
import FadeInSection from '../FadeInSection/FadeInSection';
import classes from './Skills.module.css';

const Skills = () =>{
    
    return(
        <div className={classes.root} id="Skills">
            <h2 className={classes.skillsTitle}> Skills </h2>
            <h2 className={classes.skillsSubtitle}>
          Check out a small selection of what I know
        </h2>
            <FadeInSection>
            <div className={classes.skillsContainer}>
               
                <Skill title="Front-End Development" skills={skillsData["Front-End Development"]} icon={Monitor}/>
                <Skill title="Languages" skills={skillsData["Languages"]} icon={Programming}/>
                <Skill title="Other" skills={skillsData["Other"]} icon={Tools}/>
             
            </div>
            </FadeInSection>
        </div>
    )
}

export default Skills