import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "../Navbar";

const TryDemo = () => {
  const features = [
    {
      img: "/assets/imgs/features-1.png",
      title: "Premium Figma File Included",
      text: "These files include all the design elements, layouts, and assets used in the WordPress theme, allowing for customization.",
    },
    {
      img: "/assets/imgs/features-12.png",
      title: "Fast & Friendly Support",
      text: "No need to manually create pages or configure settings. Your site will look like the demo in minutes.",
    },
    {
      img: "/assets/imgs/features-3.png",
      title: "Top Notch Template Performance",
      text: "A high-performing template is key to retaining visitors, improving SEO, and enhancing site functionality.",
    },
  ];

  const demos = [
    { img: "/assets/imgs/home-5.jpg", title: "Digital Studio" },
    { img: "/assets/imgs/home-5.jpg", title: "Digital Marketing" },
    { img: "/assets/imgs/home-5.jpg", title: "Digital Marketing" },
    { img: "/assets/imgs/home-5.jpg", title: "Digital Marketing" },
    { img: "/assets/imgs/home-5.jpg", title: "Digital Agency" },
  ];

  const feature = [
    {
      img: "/assets/imgs/html.webp",
      title: "HTML5",
      text: "Latest HTML",
    },
    {
      img: "/assets/imgs/css.png",
      title: "CSS Used",
      text: "CSS Processor",
    },
    {
      img: "/assets/imgs/features-7.png",
      title: "Sass Used",
      text: "CSS Pre-Processor",
    },
    {
      img: "/assets/imgs/features-8.png",
      title: "Bootstrap 5",
      text: "CSS Framework",
    },
    {
      img: "/assets/imgs/js.webp",
      title: "JavaScript",
      text: "Language",
    },
    {
      img: "/assets/imgs/gsap.svg",
      title: "GSAP Animation",
      text: "Used Animation",
    },
    {
      img: "/assets/imgs/jquery.png",
      title: "Jquery",
      text: "Used Plugin",
    },
    {
      img: "/assets/imgs/features-12.png",
      title: "Customer Support",
      text: "24/7 Free Support",
    },
  ];

  const testimonials = [
    {
      name: "Benjamin William",
      position: "Manager, IIT Docs",
      img: "assets/imgs/testi-author-1.png",
      feedback:
        "We engaged with Bizan to help us navigate a challenging period of growth and expansion. Their team provided invaluable insights, strategic guidance.",
      rating: 5,
    },
    {
      name: "Alex Doremon",
      position: "Manager, IIT Docs",
      img: "assets/imgs/testi-author-2.png",
      feedback:
        "We engaged with Bizan to help us navigate a challenging period of growth and expansion. Their team provided invaluable insights, strategic guidance.",
      rating: 5,
    },
    {
      name: "Richard Michael",
      position: "Manager, IIT Docs",
      img: "assets/imgs/testi-author-1.png",
      feedback:
        "We engaged with Bizan to help us navigate a challenging period of growth and expansion. Their team provided invaluable insights, strategic guidance.",
      rating: 5,
    },
    {
      img: "assets/imgs/testi-author-1.png",
      name: "Sophia Lee",
      position: "CEO, TechNova",
      rating: 5,
      feedback:
        "Absolutely amazing service! Highly recommend to anyone looking for top-notch support.",
    },
    {
      img: "assets/imgs/testi-author-2.png",
      name: "John Carter",
      position: "Marketing Head, BrightAds",
      rating: 4,
      feedback:
        "Professional team and very responsive. My business growth skyrocketed.",
    },
    {
      img: "assets/imgs/testi-author-1.png",
      name: "Emma Watson",
      position: "Founder, Bloom Agency",
      rating: 5,
      feedback:
        "They exceeded my expectations. The design and service are outstanding!",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-b from-cyan-bg to-white py-32 px-6">
        <div className=" flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto md:py-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Lift your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                business
              </span>{" "}
              to new heights with our{" "}
              <span className="text-pink-500">digital marketing</span> services
            </h1>
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              laoreet donec augue pellentesque id facilisis sit. Nulla diam erat
              lacus eleifend lorem.
            </p>
            <div className="flex items-center gap-6">
              <button className="main-btn btn-hover text-white px-6 py-3 rounded-lg shadow">
                Get Started Now
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-pink-500">
                <span className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white">
                  <FaPlay />
                </span>
                Watch a video
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="assets/images/hero/hero-image.svg"
              alt="Hero Illustration"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
          >
            <h5 className="text-cyan-dark font-semibold mb-3">
              Build With Incredible
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold">
              Incredible Unique Features
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="flex justify-center mb-6">
                  <img src={feature.img} alt={feature.title} className="h-16" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-center">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-[#1D1F1E] py-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
          >
            <h5 className="text-white opacity-80 mb-3">
              Build With Incredible
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Incredible Beautiful Demos
            </h2>
          </motion.div>
          <motion.ul
            className="text-white flex flex-wrap justify-center gap-10 mb-12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.15 }}
            viewport={{ amount: 0.2 }}
          >
            {[
              "Unique design",
              "Free Life Time Update",
              "Fast & Friendly Support",
              "Easy to Customize",
            ].map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center"
                variants={fadeUp}
              >
                <span className="bg-green-700 rounded-full p-1 mr-2 flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={demo.img}
                    alt={demo.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="section3" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
          >
            <h5 className="text-cyan-dark font-semibold mb-3">
              Build With Incredible
            </h5>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              We Have Lot’s Of Template Core Features
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {feature.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ amount: 0.2 }}
              >
                <motion.div
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4 transition-colors duration-300 "
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h4>
                <span className="text-gray-500 text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="section4"
        className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
          >
            <h5 className="text-cyan-dark font-semibold uppercase tracking-wider mb-3">
              Client’s Feedbacks
            </h5>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Amazing Feedback{" "}
              <span className="text-cyan-dark">About Services</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Hear from our happy clients who have trusted us with their
              projects.
            </p>
          </motion.div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="pb-14"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col h-full min-h-[320px] transition-all duration-300 hover:scale-[1.02]"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ amount: 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.img
                        src={testi.img}
                        alt={testi.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {testi.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {testi.position}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="flex text-yellow-400"
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3,
                          },
                        },
                      }}
                      viewport={{ amount: 0.2 }}
                    >
                      {Array.from({ length: testi.rating }).map((_, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  <div className="my-4 border-t border-gray-200"></div>

                  <motion.p
                    className="text-gray-600 text-base leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ amount: 0.2 }}
                  >
                    {testi.feedback}
                  </motion.p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#111] text-white overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[-15%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center leading-snug z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Start <br /> Your Business Today!
        </motion.h1>
        <motion.p
          className="mt-4 text-center text-sm md:text-base font-semibold text-white/80 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          One-time payment & get free lifetime license and updates
        </motion.p>
        <motion.button
          className="mt-8 bg-cyan-dark text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-300 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </section>
    </div>
  );
};

export default TryDemo;
