import React, { useState, useRef, useEffect } from "react";
import classes from "./FadeInSection.module.css";


type FadeInSectionProps = {
    children:any
}

export default function FadeInSection(props: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);

  const domRef:any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        //@ts-ignore
        observer.unobserve(domRef.current);
      }
    });
    // @ts-ignore
    observer.observe(domRef.current);
    const currentRef = domRef.current
    //@ts-ignore
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div
      ref={domRef}
      className={classes.fadeInSection + ' '  + (isVisible ? classes.isVisible : "")}
    >
      {props.children}
    </div>
  );
}
