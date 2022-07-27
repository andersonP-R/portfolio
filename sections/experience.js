import { Container, WorksCont, Wrapper } from "../styles/experienceStyles";
import Image from "next/image";

const works = [
  {
    id: 1,
    name: "work1",
    decrip: "this is a short descripcion about this work ",
    picture: "dolly.jpg",
    title: "Work 1",
    url: "https://google.com",
  },
  {
    id: 2,
    name: "work2",
    decrip: "this is a short descripcion about this work ",
    picture: "dolly.jpg",
    title: "Work 2",
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
];

export const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <h1>Here a few of my works</h1>
        <WorksCont>
          {works.map((work) => (
            <div key={work.id} className="work-card">
              <div className="work-card__img-container">
                <Image src={`/images/${work.picture}`} layout="fill" />
              </div>
              <div className="work-card__work-info">
                <h2 className="work-card__title">{work.title}</h2>
                <p className="work-card__descrip">{work.decrip}</p>
                <a className="work-card__url" href={work.url} target="_blank">
                  Check it out
                </a>
              </div>
            </div>
          ))}
        </WorksCont>
      </Wrapper>
    </Container>
  );
};
