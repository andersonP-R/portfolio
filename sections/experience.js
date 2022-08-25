import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";
import { Wrapper } from "../styles/experienceStyles";
import { FaLink } from "react-icons/fa";
import { useScroll } from "../hooks/useScroll";
import { sectionsVariants } from "../utils/animationVariants";
import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    name: "blog",
    decrip:
      "Blog created with React. Application made with React that checks the weather of a city in real time. This is a custom text and it contains a lot of words ",
    picture: "blog-img-4.jpg",
    technologies: "react style-components heroku",
    title: "Blog",
    url: "https://larivera.netlify.app",
  },
  {
    id: 2,
    name: "work2",
    decrip:
      "Application made with React that checks the weather of a city in real time. This is a custom text and it contains a lot of words",
    technologies: "react style-components heroku wheater api",
    picture: "dolly.jpg",
    title: "Wheater app",
    url: "https://google.com",
  },
  {
    id: 3,
    name: "work2",
    decrip: "this is a short descripcion about this work ",
    technologies: "react style-components heroku",
    picture: "dolly.jpg",
    title: "Work 3",
    url: "https://google.com",
  },
  {
    id: 4,
    name: "work2",
    decrip: "this is a short descripcion about this work ",
    technologies: "react style-components heroku",

    picture: "dolly.jpg",
    title: "Work 3",
    url: "https://google.com",
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
                  />
                </div>
                <div className="work-card__work-info">
                  <h2 className="work-card__title">{work.title}</h2>
                  <p className="work-card__descrip">{work.decrip}</p>
                  <p className="work-card__technologies">{work.technologies}</p>
                  <a className="work-card__url" href={work.url} target="_blank">
                    Check it out
                    <FaLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Wrapper>
    </MainContainer>
  );
};
