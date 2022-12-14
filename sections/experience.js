import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";
import { Wrapper } from "../styles/experienceStyles";
import { FaLink, FaArrowRight } from "react-icons/fa";
import { useScroll } from "../hooks/useScroll";
import { sectionsVariants } from "../utils/animationVariants";
import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    name: "Agroconcentrados-cipa",
    decrip: "Company web site created with Next.js and styled-components",
    technologies: "react - style-components - Next.js",
    picture: "agroconcentrados-cap.jpg",
    title: "agroconcentrados cipa",
    url: "https://github.com/andersonP-R/agroconcentrados-cipa",
  },
  {
    id: 2,
    name: "jira-aplication",
    decrip: "Software to manage text notes (CRUD) in real time",
    technologies: "react - MongoDB - Next.js - TypeScript - Axios",
    picture: "openJira-cap.jpg",
    title: "Jira application",
    url: "https://github.com/andersonP-R/jira-project",
  },
  {
    id: 3,
    name: "Weather-app",
    decrip:
      "Application made with React that checks the weather of a city in real time",
    picture: "weather.JPG",
    technologies: "react - css-module - netlify -  weather api",
    title: "weather application",
    url: "https://wheaterprojectapp.netlify.app/",
  },
  {
    id: 4,
    name: "",
    decrip: "Check out my github profile for more projects",
    technologies: "",
    picture: "github-cap.png",
    title: "See more",
    url: "https://github.com/andersonP-R",
  },
];

export const Experience = () => {
  const [element, controls] = useScroll();

  return (
    <MainContainer id="experience">
      <Wrapper ref={element}>
        <motion.div
          animate={controls}
          variants={sectionsVariants}
          transition={{ delay: 0.3, duration: 0.4, type: "tween" }}
        >
          <div className="title-container">
            <div className="t-1">some</div>
            <div className="t-2">
              of
              <br />
              my
            </div>
            <div className="t-3"> projects</div>
          </div>
          <div className="works-container">
            {works.map((work) => (
              <div key={work.id} className="work-card">
                <div className="work-card__img-container">
                  <Image
                    src={`/images/${work.picture}`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <div className="work-card__work-info">
                  <h2 className="work-card__title">{work.title}</h2>
                  <p className="work-card__descrip">{work.decrip}</p>
                  <p className="work-card__technologies">{work.technologies}</p>
                  <a
                    className="work-card__url"
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check it out
                    <FaLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="swipe">
            <p>Swipe</p>
            <FaArrowRight />
          </div>
        </motion.div>
      </Wrapper>
    </MainContainer>
  );
};
