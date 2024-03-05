import React, { useMemo } from "react";
import Slider from "react-slick";
import ScrollAnimationWrapper from "../../layouts/ScrollAnimationWrapper";
import getScrollAnimation from "../../utils/getScrollAnimation";
import { motion } from "framer-motion";

function Projects() {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const imageArray = [
    { name: "html", url: "/assets/img/html.png" },
    { name: "css", url: "/assets/img/css.png" },
    { name: "js", url: "/assets/img/js.png" },
    { name: "react", url: "/assets/img/React.png" },
    { name: "node", url: "/assets/img/node.png" },
    { name: "express", url: "/assets/img/express.png" },
    { name: "mongodb", url: "/assets/img/mongodb.png" },
    { name: "json", url: "/assets/img/json.png" },
  ];
  

  const projects = [
    {
      id:1,
      title:'A job searching platform',
      subtitle: 'MERN',
      image:'https://user-images.githubusercontent.com/101576636/213684622-e839d7c3-d41c-4cd4-8014-737f6ca05dad.jpg',
      liveurl:'https://job-room-in.netlify.app/',
      github:'https://github.com/Sukanta1304/A-Jobsearching-App',
      techstacks:["html","css","js","node","react","mongodb","express"]
    },
    {
      id:2,
      title:'A basic ecommerce page',
      subtitle: 'React',
      image:'https://github.com/Sukanta1304/TeeRexStore/assets/101576636/fa134362-1c28-454f-921f-634e8b382750',
      liveurl:'https://ecommerce-frontend-teerex-store.netlify.app/',
      github:'https://github.com/Sukanta1304/TeeRexStore',
      techstacks:["html","css","js","react","json"]
    },
    {
      id:3,
      title:'Clockify Website Clone',
      subtitle: 'MERN(Group Project)',
      image:'https://user-images.githubusercontent.com/97459069/232349037-bb078cf8-040c-4ada-9e1d-a4f4c25a7e86.PNG',
      liveurl:'https://clockify-timetracker.vercel.app/',
      github:'https://github.com/hitesht4/Clockify_Clone',
      techstacks:["html","css","js","node","react","mongodb","express"]
    },
    {
      id:3,
      title:'Get Harvest Website Clone',
      subtitle: 'MERN(Group Project)',
      image:'https://github.com/Sukanta1304/HarvestFrontEnd/assets/101576636/67025f84-5190-4d21-ab52-5962b00e1ef8',
      liveurl:'https://masai-getharvest-clone.netlify.app/',
      github:'https://github.com/Sukanta1304/HarvestFrontEnd',
      techstacks:["html","css","js","node","react","mongodb","express"]
    }
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
     // Adjusted centerPadding
    // autoplay: true,
  };

  // Function to generate image URLs along with technology names based on techstacks
function generateImageUrlsWithTechNames(techstacks) {
  const imageUrls = [];
  techstacks?.forEach(tech => {
    const imageInfo = imageArray?.find(img => img.name === tech);
    if (imageInfo) {
      imageUrls?.push({ name: tech, url: imageInfo.url });
    }
  });
  return imageUrls;
}



  return (
    <div className="container mx-auto px-4 pb-10">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
      {" "}
      {/* Adjusted container class */}
      <Slider {...settings}>
        {projects?.map((project, index) => (
          <div key={index} className="px-2 projects-carousel">
            {" "}
            {/* Added padding class */}
            <div className="rounded-lg shadow-lg mb-5 transform transition duration-500 hover:scale-105">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover rounded-t-lg"
                  src={project?.image}
                  alt={`${project.title} image`}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                      {project.subtitle}
                    </a>
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </p>
                    <p className="mt-2 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing eli
                    </p>
                  </a>
                </div>
                <div className="mt-3 flex items-center">
                  <div className="lg:my-2 my-1">
                    <div className="flex flex-wrap items-center">
                      {
                        generateImageUrlsWithTechNames(project.techstacks)?.map((tech)=>
                        <button type="button">
                        <span className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                          <img
                            alt=" "
                            src={tech?.url}
                            decoding="async"
                            data-nimg="1"
                            className="object-cover w-4 h-4 mr-1"
                            loading="lazy"
                            style={{color:"transparent"}}
                            width="16"
                            height="16"
                          />
                          <span className="capitalize lg:inline leading-5">
                            {tech?.name}
                          </span>
                        </span>
                      </button>
                        )
                      }
                      {/* <button type="button">
                        <span className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                          <img
                            alt=" "
                            src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover w-4 h-4 mr-1"
                            loading="lazy"
                            style={{color:"transparent"}}
                            width="16"
                            height="16"
                          />
                          <span className="capitalize lg:inline leading-5">
                            JavaScript
                          </span>
                        </span>
                      </button> */}
                      {/* <button type="button">
                        <span className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                          <img
                            alt=" "
                            src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/php.svg"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover w-4 h-4 mr-1"
                            loading="lazy"
                            style={{color:"transparent"}}
                            width="16"
                            height="16"
                          />
                          <span className="capitalize lg:inline leading-5">
                            PHP
                          </span>
                        </span>
                      </button>
                      <button type="button">
                        <span className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                          <img
                            alt=" "
                            src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/mysql.svg"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover w-4 h-4 mr-1"
                            loading="lazy"
                            style={{color:"transparent"}}
                            width="16"
                            height="16"
                          />
                          <span className="capitalize lg:inline leading-5">
                            MySQL
                          </span>
                        </span>
                      </button>
                      <button type="button">
                        <span className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                          <img
                            alt=" "
                            src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover w-4 h-4 mr-1"
                            loading="lazy"
                            style={{color:"transparent"}}
                            width="16"
                            height="16"
                          />
                          <span className="capitalize lg:inline leading-5">
                            TailwindCSS
                          </span>
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default Projects;
