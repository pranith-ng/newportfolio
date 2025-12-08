

import Hero from "./components/Pages/Hero/Hero"; // your main hero section
import Navbar from "./components/components/Navbar";
import Loader from "./components/Pages/Loader/Loader";
import About from "./components/Pages/About/About";
import Skills from "./components/Pages/Skills/Skills";
import Work from "./components/Pages/Work/Work";
import Contact from "./components/Pages/Contact/Contact";

export default function Page() {
  return (
    <main>
      <Loader />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
