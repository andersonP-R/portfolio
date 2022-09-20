import React from "react";
import { SkillsWrapper } from "../styles/skillsStyles";
import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { sectionsVariants } from "../utils/animationVariants";

const skills = [
  {
    id: 1,
    picture: "html5.png",
    title: "HTML5",
    alt: "html5",
  },
  {
    id: 2,
    picture: "css-logo.png",
    title: "CSS3",
    alt: "css3",
  },
  {
    id: 3,
    picture: "js.png",
    title: "JavaScript",
    alt: "javascript",
  },
  {
    id: 4,
    picture: "react.png",
    title: "ReactJS",
    alt: "react js",
  },
  {
    id: 5,
    picture: "git.png",
    title: "GIT",
    alt: "git",
  },
  {
    id: 6,
    picture: "bootstrap2.jpg",
    title: "Bootstrap",
    alt: "bootstrap",
  },
  {
    id: 7,
    picture: "node3.png",
    title: "NodeJS",
    alt: "nodejs",
  },
  {
    id: 8,
    picture: "express2.png",
    title: "ExpressJS",
    alt: "express",
  },
  {
    id: 9,
    picture: "mongo.png",
    title: "MongoDB",
    alt: "mongodb",
  },
  {
    id: 10,
    picture: "python.png",
    title: "Python",
    alt: "python",
  },
];

export const Skills = () => {
  const [element, controls] = useScroll();

  return (
    <MainContainer id="skills">
      <SkillsWrapper ref={element}>
        <motion.div
          animate={controls}
          variants={sectionsVariants}
          transition={{ delay: 0.3, duration: 0.4, type: "tween" }}
        >
          <h1 className="title">Skillset</h1>
          <div className="skill-box">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-card__img-container">
                  <Image
                    src={`/images/${skill.picture}`}
                    layout="fill"
                    alt={skill.alt}
                  />
                </div>
                <h2 className="skill-card__title">{skill.title}</h2>
              </div>
            ))}
          </div>
        </motion.div>
      </SkillsWrapper>
    </MainContainer>
  );
};
