"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FaqTwo from "./components/faq-two";
import Switcher from "./components/switcher";
import ClientTwo from "./components/client-two";
import PartnerTwo from "./components/partnerTwo";
import ContactTwo from "./components/contact-two";
import DownloadTwo from "./components/download-two";
import ScrollToTop from "./components/scroll-to-top";
import ScreenshotTwo from "./components/screenshot-two";

import ReactWOW from "react-wow";
import "animate.css";

import { feature2, feature3 } from "./data/data";
import { FiAperture, FiShield } from "react-icons/fi";

export default function Page() {
  let aboutData = [
    {
      icon: FiShield,
      title: "Enhance Security",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: FiAperture,
      title: "High Performance",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
  ];

  return (
    <>
      <Navbar
        navLight={false}
        playBtn={true}
        bgLight={false}
        navCenter={true}
      />

      <section
        className="relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5"
        id="home"
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30"
          style={{ backgroundImage: `url('/images/map.png')` }}
        >
          #NoSpendChallenge
        </div>
        <div className="container relative z-10">
          <ReactWOW animation="fadeInUp" delay="0.1s">
            <div
              className="grid grid-cols-1 mt-10 text-center wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[56px] mb-5">
                Stop impulsive buying
              </h3>

              <p className="text-slate-500 text-lg max-w-xl mx-auto">
                Create challenges that will help you on your journey to
                financial control, avoiding consumerism and impulse buying
              </p>

              <div className="mt-6">
                <Link href="">
                  <Image
                    src="/images/app.png"
                    width={152}
                    height={48}
                    className="h-12 inline-block m-1"
                    alt=""
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/images/play.png"
                    width={152}
                    height={48}
                    className="h-12 inline-block m-1"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </ReactWOW>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative mt-8">
        <div className="container relative ">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-2 duration-500 xl:-mt-[400px] lg:-mt-[320px] md:-mt-[350px] -mt-[140px] m-0">
              <ReactWOW animation="bounceIn" delay="0.7s">
                <Image
                  src="/images/phone/2-phone.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="mx-auto w-80 md:w-96 lg:w-[500px] relative z-2 wow animate__animated animate__bounceIn"
                  data-wow-delay=".7s"
                  alt=""
                />
              </ReactWOW>
              <div className="absolute overflow-hidden lg:size-[600px] md:size-[450px] sm:size-[400px] size-[320px] bg-gradient-to-tl to-red-500/20 via-red-500/70 from-red-500 bottom-0 translate-x-1/2 start-1/2 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative">
          <ReactWOW animation="fadeInUp">
            <div
              className="grid grid-cols-1 pb-6 text-center wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                We're not a new finance tracking app.
              </h6>
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                Take back the control of your wallet
              </h4>

              <p className="text-slate-400 max-w-xl mx-auto">
                Change your life style in community and with your own pace
              </p>
            </div>
          </ReactWOW>

          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-6 gap-6 items-center">
            <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
              <div className="grid grid-cols-1 gap-6">
                {feature2.map((item: any, index: number) => {
                  let Icon = item.icon;
                  return (
                    <ReactWOW animation="fadeInUp" key={index}>
                      <div
                        className="group flex duration-500 xl:p-3 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="flex md:order-2 order-1 align-middle justify-center items-center size-16 mt-1 bg-red-500/5 dark:bg-red-500/10 group-hover:bg-red-500 group-hover:text-white text-red-500 rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                          <Icon className="size-5" />
                        </div>
                        <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                          <h4 className="mb-0 text-lg font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>
                      </div>
                    </ReactWOW>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12 lg:mx-4 lg:order-2 order-1">
              <ReactWOW animation="zoomIn">
                <Image
                  src="/images/phone/1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="mx-auto wow animate__animated animate__zoomIn"
                  data-wow-delay=".7s"
                  alt=""
                />
              </ReactWOW>
            </div>

            <div className="lg:col-span-4 md:col-span-6 order-3">
              <div className="grid grid-cols-1 gap-6">
                {feature3.map((item: any, index: number) => {
                  let Icon = item.icon;
                  return (
                    <ReactWOW animation="fadeInUp" key={index}>
                      <div
                        className="group flex duration-500 xl:p-3 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <div className="flex align-middle justify-center items-center size-16 mt-1 bg-red-500/5 dark:bg-red-500/10 group-hover:bg-red-500 group-hover:text-white text-red-500 rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                          <Icon className="size-5" />
                        </div>
                        <div className="flex-1 ms-4">
                          <h4 className="mb-0 text-lg font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>
                      </div>
                    </ReactWOW>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <FaqTwo />
      </section>

      <Footer />

      <ScrollToTop />

      <Switcher />
    </>
  );
}
