import React from "react";
import CardProject from "./card-project";
import { StyledProjects } from "./Projects.styled";
import { ProjectsData } from "./../../../data/projects";
import { ContainedButton, OutlinedButton } from "../../common/Common.styled";
import { motion } from "framer-motion";
import { Fade } from "../../animations/animations";
import Link from "next/link";

const Projects = () => {
  return (
    <StyledProjects>
      <motion.h3 {...Fade}>Some of my projects</motion.h3>
      <motion.h5 {...Fade}>
        I love learning new frontend and backend frameworks and tools while
        praticing! Here are some of my projects!
      </motion.h5>
      <motion.div {...Fade} className="projectsContainer">
        {ProjectsData.slice(0, 3).map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </motion.div>
      <motion.div {...Fade} className="buttonsBox">
        <Link scroll={false} href="portfolio">
          <ContainedButton>More Projects</ContainedButton>
        </Link>
        <OutlinedButton>Contact me</OutlinedButton>
      </motion.div>
    </StyledProjects>
  );
};

export default Projects;
