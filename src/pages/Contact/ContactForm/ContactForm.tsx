import React, { useState, ChangeEvent, FormEvent } from "react";
import { Alert } from "../../../components";
import emailjs from "emailjs-com";
import classes from "./ContactForm.module.scss";

export const ContactForm = () => {
  let [name, setName] = useState<string>("");
  let [subject, setSubject] = useState<string>("");
  let [body, setBody] = useState<string>("");
  let [show, setShow] = useState<boolean>(false);
  let [initialize, setInitialize] = useState<boolean>(true);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const templateParams = {
      name: name,
      subject: subject,
      body: body
    };
    const service_id = "default_service";
    const template_id = "template_Xg3Ubpyz";

    emailjs
      .send(
        service_id,
        template_id,
        templateParams,
        "user_ChgANteOnxkTFoY4AzA0y"
      )
      .then(
        (response: any) => {
          //console.log("SUCCESS!", response.status, response.text);
          setShow(true);
          setTimeout(() => {
            setShow(false);
            setInitialize(false);
          }, 3000);
        },
        (err: any) => {
          //console.log("FAILED...", err);
          setShow(true);
          setTimeout(() => {
            setShow(false);
            setInitialize(false);
          }, 3000);
        }
      );
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };
  return (
    <div>
      <form
        className={classes.form__container}
        onSubmit={event => submitHandler(event)}
      >
        <label>
          Your Name
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name"
            onChange={event => handleChangeName(event)}
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            id="lname"
            name="lastname"
            onChange={event => handleChangeSubject(event)}
            placeholder="Subject"
          />
        </label>
        <label>
          Message
          <textarea
            id="subject"
            name="subject"
            onChange={event => handleChangeBody(event)}
            placeholder="Your Message"
            style={{ height: "200px" }}
          ></textarea>
        </label>

        <input
          type="submit"
          value="Submit"
          className={classes.popuptext + " " + classes.show}
        />
      </form>
      <Alert
        text="Your Message Has Been Sent!"
        show={show}
        initialize={initialize}
      />
    </div>
  );
};
