import React from 'react';
import classes from './Logo.module.scss';

export const Logo =() =>{
    return(
        <svg>
            <text x="0" y="50" fill='white' className={classes.l}> L</text>
            <text x="0" y="50" fill="white" className={classes.c}>C</text>
        </svg>
    )
}