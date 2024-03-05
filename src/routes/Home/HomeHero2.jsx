import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../layouts/ScrollAnimationWrapper";

const HomeHero2 = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const handleBtnPress = () => {
    const sectionToScroll = document.querySelector("#contact");
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto" id="home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#1e40af] leading-normal">
              I'm <strong>Sukanta Dolai</strong>
            </h1>
            <h1 className="my-3 text-2xl lg:text-3xl xl:text-4xl font-medium text-[#1e40af] leading-normal">
              A {" "}
              <span className="text-xl lg:text-2xl xl:text-3xl font-medium leading-normal">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Fullstack", "App","Web", "ReactJS", "NodeJS",]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </span>Developer
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Hi there! 👋 I'm a seasoned full-stack developer specializing in
            both web and app development. With a passion for crafting seamless
            user experiences, I thrive on bringing ideas to life through clean,
            efficient code. Let's collaborate to turn your vision into reality!
          </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button
                onClick={handleBtnPress}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1e40af] hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/assets/documents/Sukanta-Dolai-Resume-v2.pdf"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Download CV
              </a>
            </div>
          </div>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img
                src="/assets/img/man1.png"
                alt="1st hero image"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
    </div>
  );
};

export default HomeHero2;
