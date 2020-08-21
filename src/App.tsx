import React, {useEffect} from "react";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
import {initGA} from './index';

import "./App.css";

function App() {
  useEffect(() => { initGA(); }, []);
  return (

      <div className="App">
        <Helmet>
        <title>Logan Corey</title>
        <meta name="description" content="Hello and welcome to my personal website.  Come check it out to learn a bit more about me and see what I've been working on." />
        <meta name="keywords" content="react,seo,helmet" />
        </Helmet>
        <Navigation />
        <About />
        <Projects />
        <Skills/>
        <Contact/>
        <Footer />
      </div>

  );
}

export default App;
