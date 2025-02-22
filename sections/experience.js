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
    name: "rainbow-project",
    decrip:
      "E-commerce creado con Next.js, NextAuth.js, PostgreSQL y otras librerías",
    technologies: "Next.js - PostgreSQL - TypeScript - Cloudinary - Auth.js",
    picture: "rainbow.png",
    title: "Rainbow shop",
    url: "https://rainbow-front.vercel.app/",
  },
  {
    id: 2,
    name: "app-test",
    decrip: "Prototipo de aplicación móvil construido con herramientas web",
    technologies: "React.js - Next.js - TypeScript - HTML5 - CSS3 - JavaScript",
    picture: "app.png",
    title: "app prototype",
    url: "https://calam.vercel.app/",
  },
  {
    id: 3,
    name: "Weather-app",
    decrip:
      "Aplicación hecha con React que comprueba el tiempo de una ciudad en tiempo real",
    picture: "weather.JPG",
    technologies: "React.js - css-module - netlify -  weather api",
    title: "weather application",
    url: "https://wheaterprojectapp.netlify.app/",
  },
  {
    id: 4,
    name: "",
    decrip: "Echa un vistazo a mi perfil de github para ver más proyectos",
    technologies: "",
    picture: "github-cap.png",
    title: "¡Más proyectos!",
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
            <div className="t-3"> Proyectos</div>
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
                    Ver más
                    <FaLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="swipe">
            <p>Desliza</p>
            <FaArrowRight />
          </div>
        </motion.div>
      </Wrapper>
    </MainContainer>
  );
};
