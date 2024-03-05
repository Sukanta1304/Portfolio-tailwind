import React from "react";

function HomeHero() {
  const handleBtnPress = () => {
    const sectionToScroll = document.querySelector("#contact");
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hey, I'm Sukanta</span>
          </h1>
          <h3 className="text-2xl tracking-tight font-extrabold text-indigo-800 sm:text-2xl md:text-3xl pt-5">
            Cross Platform Developer
          </h3>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Hi there! 👋 I'm a seasoned full-stack developer specializing in
            both web and app development. With a passion for crafting seamless
            user experiences, I thrive on bringing ideas to life through clean,
            efficient code. Let's collaborate to turn your vision into reality!
          </p>
          {/* <!-- Button Section --> */}
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
          {/* <!-- End of Button Section --> */}
        </div>

        {/* <!--   Image Section     --> */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
        {/* <!--   End of Image Section     --> */}
      </div>
    </section>
  );
}

export default HomeHero;
