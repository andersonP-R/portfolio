import { Container, WorksCont, Wrapper } from "../styles/experienceStyles";
import Image from "next/image";

import { FaLink } from "react-icons/fa";
import { MainContainer } from "../styles/GlobalStyles";

const works = [
  {
    id: 1,
    name: "blog",
    decrip: "Blog created with React",
    picture: "blog-img-4.jpg",
    title: "Blog",
    url: "https://larivera.netlify.app",
  },
  {
    id: 2,
    name: "work2",
    decrip:
      "Application made with React that checks the weather of a city in real time",
    picture: "dolly.jpg",
    title: "Wheater app",
    url: "https://google.com",
  },
  {
    id: 3,
    name: "work2",
    decrip: "this is a short descripcion about this work ",
    picture: "dolly.jpg",
    title: "Work 3",
    url: "https://google.com",
  },
  {
    id: 4,
    name: "work2",
    decrip: "this is a short descripcion about this work ",
    picture: "dolly.jpg",
    title: "Work 3",
    url: "https://google.com",
  },
];

export const Experience = () => {
  return (
    <MainContainer id="experience">
      <Wrapper>
        <div className="title-container">
          <div className="t-1">some</div>
          <div className="t-2">
            of
            <br />
            my
          </div>
          <div className="t-3"> projects</div>
        </div>
        <WorksCont>
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
                <a className="work-card__url" href={work.url} target="_blank">
                  Check it out
                  <FaLink />
                </a>
              </div>
            </div>
          ))}
        </WorksCont>
      </Wrapper>
    </MainContainer>
  );
};
