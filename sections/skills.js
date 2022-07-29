import React from "react";
import {
  SkillBox,
  SkillsContainer,
  SkillsWrapper,
} from "../styles/skillsStyles";
import Image from "next/image";

const skills = [
  {
    id: 1,
    picture: "dolly.jpg",
    title: "HTML",
  },
  {
    id: 2,
    picture: "dolly.jpg",
    title: "CSS",
  },
  {
    id: 3,
    picture: "dolly.jpg",
    title: "JavaScript",
  },
  {
    id: 4,
    picture: "dolly.jpg",
    title: "React JS",
  },
  {
    id: 5,
    picture: "dolly.jpg",
    title: "GIT",
  },
  {
    id: 6,
    picture: "dolly.jpg",
    title: "Bootstrap",
  },
  {
    id: 7,
    picture: "dolly.jpg",
    title: "Bootstrap",
  },
];

export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsWrapper>
        <h1>Skillset</h1>
        <SkillBox>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-card__img-container">
                <Image src={`/images/${skill.picture}`} layout="fill" />
              </div>
              <div className="skill-card__skill-info">
                <h2 className="skill-card__title">{skill.title}</h2>
              </div>
            </div>
          ))}
        </SkillBox>
      </SkillsWrapper>
    </SkillsContainer>
  );
};
