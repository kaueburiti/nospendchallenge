"use client";
import React from "react";
import Image from "next/image";

import ReactWOW from "react-wow";
import "animate.css";
import LeadForm from "../lead-form";
import { feature2, feature3 } from "@/app/data/data";

export default async function LandingPageContent() {
  return (
    <>
      <section
        className="relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5"
        id="home"
      >
        <div className="container relative z-10 mb-2">
          <ReactWOW animation="fadeInUp" delay="0.1s">
            <div
              className="grid grid-cols-1 mt-10 text-center wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[56px] mb-4">
                Stop Impulsive Buying with
                <br /> No Spend Challenge!
              </h1>

              <h2 className="text-slate-500 text-lg max-w-xl mx-auto mb-4">
                Save money and track your spendings by creating challenges that
                guides you to financial control one step per day!
              </h2>

              <div className="flex mt-6 flex-col gap-1 justify-center">
                <div className=" flex-1">
                  <a
                    href="https://apps.apple.com/us/app/nospendchallenge/id6744117715"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 inline-flex items-center"
                  >
                    <svg
                      className="w-5 h-5 me-2"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    Download App for{" "}
                    <span className="underline ml-1">Free</span>
                  </a>
                </div>

                <div className="flex-1">
                  <p className="text-gray-500 rounded-full px-6 py-3 inline-flex items-center text-xs">
                    Coming soon to Android platform
                  </p>
                </div>
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
                  src="/images/phone/mock-double.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mx-auto w-80 md:w-96 lg:w-[500px] relative z-2 wow animate__animated animate__bounceIn"
                  data-wow-delay=".7s"
                  alt=""
                />
              </ReactWOW>
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
                Take back the control of your budget
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
                  src="/images/phone/mock-home.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mx-auto wow animate__animated animate__zoomIn max-h-[620px] lg:max-h-max lg:max-h-auto w-auto"
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

      <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
        <div className=" relative max-w-[620px] mx-auto text-center px-2">
          <ReactWOW animation="fadeInRight">
            <div className="w-full wow animate__animated animate__fadeInRight">
              <h3 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-bold">
                Ready to Take Control of Your Spending?
              </h3>

              <p className="text-slate-400 mb-6">
                Join our community of people who are breaking free from
                impulsive buying habits and achieving their financial goals with
                #NoSpendChallenge. Download the app today and start your journey
                to financial freedom.
              </p>

              <div className="flex justify-center flex-col gap-1">
                <div className="flex-1">
                  <a
                    href="https://apps.apple.com/us/app/nospendchallenge/id6744117715"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 inline-flex items-center"
                  >
                    <svg
                      className="w-5 h-5 me-2"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    Download App for{" "}
                    <span className=" ml-1 underline">Free</span>
                  </a>
                </div>

                <div className="flex-1">
                  <p className="text-gray-500 rounded-full px-6 py-3 inline-flex items-center text-xs">
                    Coming soon to Android platform
                  </p>
                </div>
              </div>

              {/* <div className="mt-8 flex items-center">
                    <div className="flex -space-x-2">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <div
                            key={i}
                            className={`inline-block size-10 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden bg-${["red", "blue", "green", "purple", "yellow"][i]}-100`}
                          >
                            <Image
                              src={`/images/users/avatar-${i + 1}.jpg`}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                              alt="User"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                  "none";
                              }}
                            />
                          </div>
                        ))}
                    </div>
                    <p className="ms-3 text-slate-400">
                      <span className="text-red-500 font-semibold">5000+</span>{" "}
                      happy users are already saving!
                    </p>
                  </div> */}
            </div>
          </ReactWOW>
        </div>
      </section>
    </>
  );
}
