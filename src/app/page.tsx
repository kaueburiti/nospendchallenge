import React from "react";
import Image from "next/image";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FaqTwo from "./components/faq-two";
import ScrollToTop from "./components/scroll-to-top";

import "animate.css";

import LeadForm from "./components/lead-form";
import HeadComponent from "./components/head";
import LandingPageContent from "./components/landing/content";

export const metadata = {
  title: "#NoSpendChallenge - Stop Impulsive Buying",
  description:
    "Join the #NoSpendChallenge and learn how to save money effectively. Take control of your finances today!",
  alternates: {
    canonical: "https://nospendchallenge.app",
  },
};

export default async function Page() {
  return (
    <>
      <HeadComponent />
      <Navbar
        navLight={false}
        playBtn={false}
        bgLight={false}
        navCenter={false}
      />

      <LandingPageContent />

      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <FaqTwo />
      </section>

      <Footer />

      <ScrollToTop />
    </>
  );
}
