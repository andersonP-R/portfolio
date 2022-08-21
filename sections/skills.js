import React from "react";
import {
  SkillBox,
  SkillsContainer,
  SkillsWrapper,
} from "../styles/skillsStyles";
import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";

const skills = [
  {
    id: 1,
    picture: "html5.png",
    title: "HTML",
    alt: "html5",
  },
  {
    id: 2,
    picture: "css-logo.png",
    title: "CSS",
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
    title: "React JS",
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
];

export const Skills = () => {
  return (
    <MainContainer id="skills">
      <SkillsWrapper>
        <h1>Skillset</h1>
        <SkillBox>
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
        </SkillBox>
      </SkillsWrapper>
    </MainContainer>
  );
};
