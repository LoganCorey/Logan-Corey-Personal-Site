import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import classes from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.header__container}>
          <h1 className={classes.header}> Contact Me</h1>
        </div>
      </div>

      <div className={classes.container}>
        <h1 className={classes.light}>Let's Have a Conversation</h1>
        <p>
          Feel free to reach out to me using the form below for any questions or
          inquiries. Alternatively, feel free to reach out to me on my
          <a
            href="https://ca.linkedin.com/in/logan-corey"
            className={classes.link}
          >
            {" "}
            LinkedIn{" "}
          </a>
          or
          <a href="https://github.com/LoganCorey" className={classes.link}>
            {" "}
            Github{" "}
          </a>
        </p>

        <ContactForm />
      </div>
    </div>
  );
};
