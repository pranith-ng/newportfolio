"use client"


import { useState, useEffect, useContext } from "react";
import Hero from "./components/Pages/Hero/Hero"; // your main hero section
import Navbar from "./components/components/Navbar/Navbar";
import Loader from "./components/Pages/Loader/Loader";
import About from "./components/Pages/About/About";
import Skills from "./components/Pages/Skills/Skills";
import Work from "./components/Pages/Work/Work";
import Contact from "./components/Pages/Contact/Contact";
import { GlobalContext } from "./Context/Context";
import Transition from "./components/components/Transition/Transition";
import useLenis from "./Hooks/useLenis";

export default function Page() {
  useLenis()

  const { loading, setLoading } = useContext(GlobalContext)

  const [fontsloaded, setFontsLoaded] = useState(false)


  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true)
    })
  }, [])

  return (
    <main>
      <Transition />
      {!loading ? (
        <Loader />
      ) : (
        fontsloaded && (
          <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </>
        )
      )}
    </main>
  );
}
