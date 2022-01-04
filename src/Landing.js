import React, { useState } from "react";
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
  const clickHandler = () => toggleIsMenuOpen(!isMenuOpen);

  return (
    <div className="landing">
      <Header clickHandler={clickHandler} isMenuOpen={isMenuOpen} />
      <Hero />
      <Benefits />
      <Investing />
      <Stocks />
      <Exits />
      <SignUp />
      <Footer />
      <AdaptiveMenu clickHandler={clickHandler} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Landing;
