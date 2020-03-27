import React, { useState } from "react";
import { IGallery } from "./IGallery";
import { GalleryModal } from "./GalleryModal/GalleryModal";
import { GalleryImage } from "./GalleryImage/GalleryImage";
import classes from "./Gallery.module.scss";
export const Gallery = (props: IGallery) => {
  let [show, setShow] = useState<boolean>(false);
  let [selectedPicture, setSelectedPicture] = useState<string>("");

  const modalClickHandler = (event: Event, picture: string) => {
    event.preventDefault();
    setSelectedPicture(picture);
    setShow(!show);
  };

  const closeModal = (event: Event) => {
    event.preventDefault();
    setShow(false);
  };
  return (
    <React.Fragment>
      <h1 className={classes.header}>Gallery</h1>
      <div className={classes.gallery}>
        {props.pictures.map((picture: string, index: number) => {
          return (
            <GalleryImage
              key={index}
              image={picture}
              clickHandler={(event: any) => modalClickHandler(event, picture)}
            />
          );
        })}
      </div>
      <GalleryModal
        show={show}
        image={selectedPicture}
        clickHandler={(event: any) => closeModal(event)}
      />
    </React.Fragment>
  );
};

/*
 <div className={classes.root}>
        {props.pictures.map((picture: string) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={picture}
              className={classes.container}
            >
              <img src={picture} className={classes.image} />
            </a>
          );
        })}
      </div>

*/
