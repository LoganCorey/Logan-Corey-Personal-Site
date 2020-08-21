import React from 'react';
import classes from './Skill.module.css';

type SkillProps = {
    skills: string[],
    title: string,
    icon: string,
}

const Skill = (props:SkillProps) =>{
    return(
        <div className={classes.root}>
            <img className={classes.icon} src={props.icon} alt="skill"/>
            <h2 className={classes.title}>{props.title}</h2>
            <hr className={classes.underline}/>
            <ul className={classes.skills}>
                {props.skills.sort().map((skill:string)=>{
                    return(<li className={classes.skill}>{skill}</li>)
                })}
            </ul>

        </div>
    )
}

export default Skill;