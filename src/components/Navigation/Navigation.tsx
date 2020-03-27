import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";

export class Navigation extends React.Component<{}> {
  private navRef: React.RefObject<any> = React.createRef();

  state = {
    stylesNavigation: {},
    showFlair: true,
    animation: classes.slideDownAnimation
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e: Event) => {
    const y: number = window.scrollY;
    if (y > 150) {
      this.setState({
        ...this.state,
        stylesNavigation: {
          backgroundColor: "#111111",
          transition: "0.5s linear"
        },
        showFlair: false,
        animation: classes.slideUpAnimation
      });
    } else {
      this.setState({
        ...this.state,
        stylesNavigation: {
          backgroundColor: "transparent",
          transition: "0.5s linear"
        },
        showFlair: true,
        animation: classes.slideDownAnimation
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className={classes.root + " " + this.state.animation}
          ref={this.navRef}
          style={this.state.stylesNavigation}
        >
          <div className={classes.flair}>
            <h1 className={classes.name}>Logan Corey</h1>
          </div>
          <div className={classes.nav}>
            <div className={classes.link}>
              <Link className={classes.link} to="/">
                Projects
              </Link>
            </div>
            <div className={classes.link}>
              <Link className={classes.link} to="/about">
                {" "}
                About
              </Link>
            </div>{" "}
            <div className={classes.link}>
              <Link className={classes.link} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
