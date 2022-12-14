import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { NavBar2 } from "../components/NavBar2";
import { SEO } from "../components/SEO";
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
      <SEO />

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
