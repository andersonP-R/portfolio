import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { NavBar2 } from "../components/NavBar2";
import { Social } from "../components/Social";
import { About } from "../sections/about";
import { Contact } from "../sections/contact";
import { Experience } from "../sections/experience";
import { Hero } from "../sections/hero";
import { Skills } from "../sections/skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>Anderson Rivera</title>
        <meta
          name="description"
          content="Anderson Rivera is a software developer specialized in front-end development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="copyright" content="andersonpr.co" />
        <meta name="author" content="Anderson Rivera" />
        <meta name="audience" content="all" />
        <meta name="keywords" content="web, software, website" />
        <meta name="robots" content="index, all, follow" />
        <meta name="category" content="software" />
        <meta name="language" content="English" />

        <link rel="icon" href="/log.ico" type="image/x-icon" />
      </Head>

      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <NavBar2 />
          <Social />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
