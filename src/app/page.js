"use client"


import { useState, useEffect } from "react";
import Hero from "./components/Pages/Hero/Hero"; // your main hero section
import Navbar from "./components/components/Navbar/Navbar";
import Loader from "./components/Pages/Loader/Loader";
import About from "./components/Pages/About/About";
import Skills from "./components/Pages/Skills/Skills";
import Work from "./components/Pages/Work/Work";
import Contact from "./components/Pages/Contact/Contact";

export default function Page() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6200)

    return () => clearTimeout(timer)
  }, [])


  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </>
      )}
    </main>
  );
}
