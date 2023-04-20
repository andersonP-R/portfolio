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
    name: "teslo-shop",
    decrip:
      "E-commerce web app created with Next.js, NextAuth.js, MongoDB and some more libraries",
    technologies:
      "Next.js - MongoDB - TypeScript - Cloudinary - Paypal - Material-UI - NextAuth.js",
    picture: "teslo-shop.PNG",
    title: "teslo shop",
    url: "https://e-commerce-production-c673.up.railway.app",
  },
  {
    id: 2,
    name: "jira-aplication",
    decrip: "Software to manage text notes (CRUD) in real time",
    technologies: "React.js - MongoDB - Next.js - TypeScript - Axios",
    picture: "openJira-cap.JPG",
    title: "Jira application",
    url: "https://github.com/andersonP-R/jira-project",
  },
  {
    id: 3,
    name: "Weather-app",
    decrip:
      "Application made with React that checks the weather of a city in real time",
    picture: "weather.JPG",
    technologies: "React.js - css-module - netlify -  weather api",
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
