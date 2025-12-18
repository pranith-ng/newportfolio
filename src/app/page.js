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

export default function Page() {

  const {loading, setLoading} = useContext(GlobalContext)

  // useEffect(() => {
  //   const saved = sessionStorage.getItem("loading")
  //   if(saved === "false") {
  //     setLoading(false)
  //     return
  //   }

  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //     sessionStorage.setItem("loading", "false")
  //   }, 6200)

  //   return () => clearTimeout(timer)
  // }, [])


  return (
    <main>
      <Transition />
      {!loading ? (
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
