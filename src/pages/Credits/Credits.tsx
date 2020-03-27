import React from "react";
import classes from "./Credits.module.scss";

export const Credits = () => {
  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.header__container}>
          <h1 className={classes.header}> Thank you</h1>
        </div>
      </div>

      <div className={classes.container}>
        <h1 className={classes.light}>Special Thanks</h1>
        <p>
          Websites can no longer be done alone due to all of the moving parts
          involved in creating one such as pictures, videos and effects that are
          going on. Thankfully there are so many people on the internet willing
          to lend a helping hand with all aspects of web development and as
          thanks I thought at the very least they deserve a page where I can
          express my gratitude. I would like to give a special thanks to...
        </p>
        <ul>
          <li>
            <strong>Aleksandr Varnin</strong> and this article on how to use
            emailJS:{" "}
            <a
              className={classes.link}
              href="https://blog.mailtrap.io/react-send-email/"
            >
              https://blog.mailtrap.io/react-send-email/
            </a>
          </li>
          <li>
            <strong>Pexels</strong> and their contributors for all the amazing
            free photos they have available:{" "}
            <a className={classes.link} href="https://www.pexels.com">
              https://www.pexels.com
            </a>
          </li>
          <li>
            <strong>Sarah Dorweiler</strong> for her amazing photo that I used
            on this page:{" "}
            <a
              className={classes.link}
              href="https://unsplash.com/@sarahdorweiler"
            >
              https://unsplash.com/@sarahdorweiler
            </a>
          </li>
          <li>
            <strong>W3 Schools</strong> for all the amazing content they have
            for free:{" "}
            <a className={classes.link} href="https://www.w3schools.com">
              https://www.w3schools.com
            </a>
          </li>
          <li>
            <strong>Ylanite Koppens</strong> for her amazing minimalistic
            desktop photos:{" "}
            <a className={classes.link} href="https://www.pexels.com/@nietjuh">
              https://www.pexels.com/@nietjuh
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
