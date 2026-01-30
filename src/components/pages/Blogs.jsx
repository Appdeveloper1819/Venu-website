import React from "react";
import { Link } from "react-router-dom";
import sampleImg from "../../assets/sample.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Let’s Talk!",
      description: "If these plans don’t fit, let’s create one that suits.",
      Image: sampleImg,
      url: "#",
    },
    {
      id: 2,
      title: "Next Steps",
      description: "Plan your next move with our expert advice and insights.",
      Image: sampleImg,
      url: "#",
    },
    {
      id: 3,
      title: "Getting Started",
      description: "A complete beginner’s guide to get you going with ease.",
      Image: sampleImg,
      url: "https://www.buzzsprout.com/blog?msclkid=41073fbf6bce1868e0b45717c774cef7",
    },
    {
      id: 4,
      title: "Explore More",
      description: "Discover more insights and tips tailored for you.",
      Image: sampleImg,
      url: "#",
    },
  ];

  return (
    <section
      id="blogs"
      className="bg-gradient-to-b from-cyan-100 via-white to-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-16 text-gray-900 tracking-tight">
          Our Latest Blogs
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map(({ id, title, description, Image, url }) => (
            <article
              key={id}
              className="rounded-3xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-200 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={Image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity duration-500 hover:opacity-40"></div>
              </div>
              <div className="p-6 text-left transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-cyan-600">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {description}
                </p>
                <Link
                  to={url}
                  className="text-cyan-600 font-semibold no-underline hover:underline transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
