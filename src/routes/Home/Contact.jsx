import React, { useMemo, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";

function Contact() {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //    console.log(formData,'formData')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formData.email || !emailRegex.test(formData.email)){
        Swal.fire("Please enter a valid email","","error");
        return;
    };
    if(!formData.name){
        Swal.fire("Please enter a valid name","","error");
        return;
    };
    if(!formData.message){
        Swal.fire("Please enter a message","","error");
        return;
    }
    emailjs
      .send(
        "service_idrha3r",
        "template_ywwxbr5",
        {
          from_name: formData.name,
          to_name: "Sukanta",
          message: formData.message,
          reply_to:formData.email
        },
       "DNXjg3N0OToabwNa0" 
      )
      .then(
        (response) => {
        //   console.log("SUCCESS!", response.status, response.text);
        Swal.fire("Email Sent Successfully!","","success");
        setFormData({
            name:"",
            email:"",
            message:""
        })
        },
        (err) => {
        //   console.log("FAILED...", err);
         Swal.fire("Something Went Wrong.Please Try after some time.","","error")
        }
      );
  };

  return (
    <section id="contact">
    <ScrollAnimationWrapper>
      <motion.div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-8 lg:py-10" variants={scrollAnimation}>
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              Drop me a line and let's start the conversation. Your next big
              idea is just an email away!
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mb-3 text-lg text-gray-600 dark:text-slate-400">
                Whether you have a project in mind, want to discuss
                collaboration opportunities, or simply want to say hello, I'd
                love to hear from you.
              </p>
              {/* <p className="mb-6 text-lg text-gray-600 dark:text-slate-400">
                    Ready to take your project to new heights? Whether you're looking to create a stunning website, craft an intuitive app, or revolutionize user experiences, I'm here to make it happen.
                    </p> */}
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <CiLocationOn color="white" size={30} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Official Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      East Meddinipur,West Bengal
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      India , 721139
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FiPhoneCall size={30} color="white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +91 78725 28238
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: mesukanta.developer@gmail.com
                    </p>
                  </div>
                </li>
                {/* <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li> */}
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autocomplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autocomplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      for="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                        value={formData.message}
                      onChange={handleChange}
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default Contact;
