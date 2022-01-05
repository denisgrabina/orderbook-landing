import React, { useState, useRef } from "react";
import { Header } from "components/header/Header";
import { Hero } from "components/hero/Hero";
import { Benefits } from "components/benefits/Benefits";
import { Investing } from "components/investing/Investing";
import { Stocks } from "components/stocks/Stocks";
import { Exits } from "components/exits/Exits";
import { SignUp } from "components/signup/SignUp";
import { Footer } from "components/footer/Footer";
import { AdaptiveMenu } from "components/adaptiveMenu/AdaptiveMenu";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "Landing.css";

const Landing = () => {
  const [isMenuOpen, toggleIsMenuOpen] = useState(false);
  const ref = useRef();
  const toggleMenu = () => toggleIsMenuOpen(!isMenuOpen);
  const scrollToSection = () =>
    ref.current.scrollIntoView({ block: "start", behavior: "smooth" });

  return (
    <div className="landing">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Hero scrollToSection={scrollToSection} />
      <Benefits />
      <Investing />
      <Stocks />
      <Exits ref={ref} />
      <SignUp />
      <Footer />
      <AdaptiveMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Landing;
