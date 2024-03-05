import React, { useMemo } from 'react'
import CountUp from 'react-countup';
import { FaUserTie } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import getScrollAnimation from '../../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../../layouts/ScrollAnimationWrapper';
import { motion } from "framer-motion";

function Featured() {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const listItems=[
    {
      id:1,
      title:"Projects",
      count:100,
      icon: <PiSuitcaseSimpleBold size={50}  color='#1e40af'/>
    },
    {
      id:2,
      count:2,
      title:"Y.O.E.",
      icon: <FaUserTie size={50}  color='#1e40af'/>
    },
    {
      id:3,
      count:40,
      title:"Technology Used",
      icon: <MdOutlineSettingsSuggest size={50} color='#1e40af'/>
    },
  ];

  return (
    <section className="text-gray-700 body-font">
      <ScrollAnimationWrapper>
  <motion.div className="container px-5 py-10 mx-auto text-center" variants={scrollAnimation}>
    <div className="flex flex-wrap -m-4 text-center justify-center items-center">
      {
        listItems.map((item,i)=>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={i}>
        <div className="flex justify-center flex-col items-center border-2 border-[#1e40af] px-4 py-6 rounded-lg justify-center transform transition duration-500 hover:scale-110">
          {item.icon}
          <h2 className="title-font font-medium text-3xl text-gray-900">
          <CountUp end={item.count} suffix='+' />
          </h2>
          <p className="leading-relaxed font-bold">{item.title}</p>
        </div>
      </div>
        )
      }
      {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg justify-center transform transition duration-500 hover:scale-110">
         <PiSuitcaseSimpleBold size={50} />
          <h2 className="title-font font-medium text-3xl text-gray-900">
          <CountUp end={100} suffix='+' />
          </h2>
          <p className="leading-relaxed">Projects</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg justify-center transform transition duration-500 hover:scale-110">
         <PiSuitcaseSimpleBold size={50} />
          <h2 className="title-font font-medium text-3xl text-gray-900">
          <CountUp end={100} suffix='+' />
          </h2>
          <p className="leading-relaxed">Projects</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg justify-center transform transition duration-500 hover:scale-110">
         <PiSuitcaseSimpleBold size={50} />
          <h2 className="title-font font-medium text-3xl text-gray-900">
          <CountUp end={100} suffix='+' />
          </h2>
          <p className="leading-relaxed">Projects</p>
        </div>
      </div> */}
    </div>
  </motion.div>
  </ScrollAnimationWrapper>
</section>
  )
}

export default Featured