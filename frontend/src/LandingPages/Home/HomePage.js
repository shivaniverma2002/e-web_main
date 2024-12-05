import React from "react";
import Hero from "./Hero";
// import Program from "./Program";
import About from "./About";

import Teamseaction from "./Teamsection"
import Company from "./Company";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Company/>
      <About />
      <Teamseaction/>
      <Footer/>
    </>
  );
}

export default HomePage;
