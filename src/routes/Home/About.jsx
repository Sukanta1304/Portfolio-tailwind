import React, { useMemo } from "react";
import ScrollAnimationWrapper from "../../layouts/ScrollAnimationWrapper";
import getScrollAnimation from "../../utils/getScrollAnimation";
import { motion } from "framer-motion";

function About() {

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
    <section className="pt-5 overflow-hidden md:pt-0 sm:pt-5 2xl:pt-5" id="about">
      <ScrollAnimationWrapper>
      <motion.div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" variants={scrollAnimation}>
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* <!-- Image section on the left --> */}
          <div className="relative">
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt=""
            />
          </div>

          {/* <!-- Text section on the right --> */}
          <div>
            <h3 className="text-2xl text-[#1e40af] font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
              Introducing Sukanta Dolai
            </h3>
            <h6 className="text-md text-[#1e40af] font-bold leading-tight text-black sm:text-lg lg:text-xl my-3">
              Versatile Full-Stack Developer: Crafting Digital Excellence with
              Frontend and Backend Expertise
            </h6>
            <p className="max-w-xl mt-3 text-lg leading-relaxed text-gray-600 md:mt-8">
              Hey there! I'm Sukanta, a seasoned full-stack developer with
              expertise in frontend, backend, and mobile app development. I
              craft sleek user interfaces with HTML, CSS (including frameworks
              like Bootstrap,Material UI, Chakra UI and Tailwind CSS), and
              JavaScript, utilizing frameworks like React. In the mobile realm,
              I excel in building cross-platform apps with React Native,
              ensuring seamless experiences across iOS and Android. My backend
              skills encompass languages like Node js, frameworks like Express,
              and database management with SQL and NoSQL solutions like MongoDB
              and MySQL. With over 2 years of experience, I offer flexible
              part-time availability for hourly-based projects. Let's
              collaborate to bring your digital visions to life!
            </p>

            {/* 
            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p> */}
            <div className="mt-5">
              <button
                onClick={handleBtnPress}
                className="flex items-center justify-center px-8 py-10 border border-transparent text-base font-medium rounded-md text-white bg-[#1e40af] hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default About;
