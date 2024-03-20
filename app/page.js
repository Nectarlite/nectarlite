"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import images from "@/components/assets/index";
import Carousel from "@/components/Carousel/Carousel";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "animate.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the animation duration
      easing: "ease-in-out", // Set the animation easing
    });
  }, []);

  return (
    <>
      <section className=" bgImage mt-4 xl:mt-0 h-[80vh] ">
        <div className="bg-white/40 flex items-center max-w-3xl h-full xl:bg-transparent xl:max-w-full ">
          <div className="flex items-center ">
            <div
              className="pl-4 w-full xl:text-white h-full space-y-8 gap-[4vh] xl:grid xl:place-content-center xl:place-items-center animate__animated animate__fadeInLeft "
              data-aos="fade-left"
            >
              <h1 className="font-thin xl:bg-black font-serif text-6xl xl:text-center mdl:text-4xl smb:text-2xl ">
                <Typewriter
                  options={{
                    strings: [
                      "Become an Elite Software Engineer",
                      "Become a Web Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    //  pauseFor: 2500,
                  }}
                />
              </h1>
              <p className="text-4xl font-thin xl:w-[80%] xl:text-center xl:font-bold mdl:text-2xl mb-5 smb:text-xl ">
                Start the dream here, Strike into the journey of becoming an
                Elite Software Engineer.
              </p>
              <Link
                href={"/learnmore"}
                className="xl:text-xl xl:py-2 w-44 px-7 mt-14 text-center h-10 text-2xl rounded-lg text-white capitalize bg-gradient-to-tr from-blue-500 to-[#b5179e]"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="slantDivA h-[400px] mdl:h-full bg-gray-400">
          <div className="flex justify-center items-center text-white ">
            <div className="w-[90%] grid gap-4 grid-cols-2 mdl:grid mdl:grid-cols-1 mdl:place-content-center mdl:place-items-center place-content-center place-items-center mt-12">
              <div
                className="w-full col-span-1 animate__animated animate__fadeInDown"
                data-aos="fade-up"
              >
                <Image
                  src={images.tech4}
                  alt="website_logo"
                  height={300}
                  width={500}
                  className="rounded-xl shadow-xl shadow-purple-500"
                />
              </div>
              <div className="w-full gap-4[vh] space-y-6 col-span-1">
                <h1 className="text-2xl font-bold uppercase border-b-[#b5179e] border-b-2">
                  Learn Full Stack Software Engineering
                </h1>
                <p className="text-lg font-medium">
                  Start with a solid foundation in programming fundamentals
                  using your preferred language (C#, Java, Node.js, Python,
                  Solidity, PHP, etc.). Understand data structures and
                  algorithms, as they are fundamental to solving complex
                  problems.
                </p>
                <div className="flex space-x-4 items-center smc:flex smc:flex-col smc:space-y-2">
                  <button className="py-3 px-4 bg-[#b5179e] text-white capitalize font-bold  ">
                    read more...
                  </button>
                  <button className="py-3 shadow-xl shadow-black px-4 bg-white text-[#b5179e] capitalize font-bold ">
                    enroll now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-[100px] mt-12"></div>
        <div className="grid place-items-center w-full">
          <div className="text-center align-middle gap-4[vh] space-y-4 max-w-4xl ">
            <h2 className="underline uppercase text-4xl font-bold mdl:text-4xl smg:text-2xl ">
              Build a Tech Career Now
            </h2>
            <h1 className="text-xl font-medium mdl:text-lg smg:text-base smg:p-4 ">
              Do you want to change jobs and take up an IT career? Are you a
              graduate who wants to build a career in IT? Do you have some
              skills in IT but you want to build a career path that can give you
              your dream job? Are you not sure of the IT training and skills you
              need to prepare for the career you want?. Our practical ICT and
              Computer training can be tailored to meet your desire.
              <br />
              Are you bothered about location?. Dont worry, our remote classes
              is here for you, where you can learn from any location with good
              internet and electricity access at your convenient.
            </h1>
            {/* <Link
              href="/learnmore"
              className="text-xl mt-4 text-black font-bold capitalize hover:border-b-2 hover:border-b-purple-500"
            >
              learn more
            </Link> */}
          </div>
        </div>
      </section>

      <section>
        <div className="h-[100px]"></div>
        <div className="slantDiv h-full mdl:h-full bg-[#b5179e]">
          <div className="flex justify-center items-center text-white ">
            <div className="w-[90%] grid gap-4 grid-cols-2 mdl:grid mdl:grid-cols-1 mdl:place-content-center mdl:place-items-center place-content-center place-items-center mt-12">
              <div className="w-full col-span-1">
                <Image
                  src={images.tech3}
                  alt="website_logo"
                  height={300}
                  width={500}
                  className="rounded-xl shadow-xl shadow-purple-500"
                />
              </div>
              <div className="w-full h-full gap-4[vh] space-y-6 col-span-1">
                <h1 className="text-2xl font-bold uppercase border-b-purple-500 border-b-2">
                  PROJECT/PRODUCT MANAGEMENT
                </h1>
                <p className="text-lg font-medium">
                  Start your path to a career in project management. In this
                  program, you’ll learn in-demand skills that will have you
                  job-ready in less than six months. No degree or experience is
                  required.
                  <br />- Gain an immersive understanding of the practices and
                  skills needed to succeed in an entry-level project management
                  role - Learn how to create effective project documentation and
                  artifacts throughout the various phases of a project - Learn
                  the foundations of Agile project management, with a focus on
                  implementing Scrum events, building Scrum artifacts, and
                  understanding Scrum roles - Practice strategic communication,
                  problem-solving, and stakeholder management through real-world
                  scenarios
                </p>
                <div className="flex space-x-4 items-center smc:flex smc:flex-col smc:space-y-2">
                  <button className="py-3 px-4 bg-[#b5179e] border-2 border-white text-white capitalize font-bold  ">
                    read more...
                  </button>
                  <button className="py-3 shadow-xl shadow-black px-4 bg-white text-purple-500 capitalize font-bold ">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-[200px]"></div>
        <Carousel />
      </section>
    </>
  );
}
