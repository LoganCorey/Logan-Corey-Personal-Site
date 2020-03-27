import { IProject } from "../utils/IProject";
import caev from "../assets/images/projects/caev.png";
import caevHero from "../assets/images/projects/caev-hero.jpg";
import caev2 from "../assets/images/projects/caev-2.png";
export const Projects: IProject[] = [
  {
    name: "Caev",
    subtitle: "Cater to Events",
    description: `Caev is an online platform which allow it's users to have food catered to them. This platform was created using 
    React (Typescript) and Redux for the frontend and Nodejs with MySql for the backend.  One of the most enjoyable parts of this project
    was being able to work with many talented developers and a lead management team to bring its suers somethign that they will really enjoy 
    and benefit from. `,
    hero: caevHero,
    icon: caev,
    pictures: [caev2, caev],
    languages: ["ReactJS", "HTML", "SCSS", "Javascript", "MYSQL", "Typescript"],
    link: "https://caev.ca"
  }
];
