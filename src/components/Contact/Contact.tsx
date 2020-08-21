import React from 'react';
import FadeInSection from '../FadeInSection/FadeInSection';
import classes from './Contact.module.css';


const Contact = () =>{
    return(
        <FadeInSection>
        <div className={classes.root} id="Contact">
            <h3 className={classes.contactText}>If there was anything that you didn't see please feel free to contact me <a href="mailto:logan.corey@mail.utoronto.ca">here</a></h3>

        </div>
        </FadeInSection>
    )
}

export default Contact;