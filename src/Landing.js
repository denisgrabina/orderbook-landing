import React from "react";
import { Header } from "components/header/Header";
import { Hero } from "components/hero/Hero";
import { Benefits } from "components/benefits/Benefits";
import { Investing } from "components/investing/Investing";
import { Stocks } from "components/stocks/Stocks";
import { Exits } from "components/exits/Exits";
import { SignUp } from "components/signup/SignUp";
import { Footer } from "components/footer/Footer";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Benefits />
      <Investing />
      <Stocks />
      <Exits />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Landing;
