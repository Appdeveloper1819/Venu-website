import React from "react";
import sampleImg from "../../assets/sample.jpg";
import { Link } from "react-router-dom";
const Products = () => {
  const products = [
    {
      title: "Custom Plan",
      description:
        "If these plans don’t fit, let’s create one that suits. Customize your subscription for a perfect fit, bigger or smaller!",
      Image: sampleImg,
    },
    {
      title: "Premium Plan",
      description:
        "Enjoy top-tier benefits with our premium plan tailored for your needs and goals.",
      Image: sampleImg,
    },
    {
      title: "Starter Plan",
      description:
        "Begin your journey with our flexible starter plan to get you going.",
      Image: sampleImg,
    },
    {
      title: "Business Plan",
      description:
        "Scale your business with powerful features and flexible options.",
      Image: sampleImg,
    },
    {
      title: "Enterprise Plan",
      description:
        "For large teams and organizations looking for complete flexibility and control.",
      Image: sampleImg,
    },
    {
      title: "Family Plan",
      description:
        "Share benefits with your loved ones with our inclusive family plan.",
      Image: sampleImg,
    },
  ];

  return (
    <section className="bg-white py-32   sm:px-12 lg:px-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 mt-18">
            Our Other Products
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-2 shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-32 rounded-lg mb-4 overflow-hidden shadow-inner">
                <img
                  src={product.Image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {product.description}
              </p>

              <Link
                to="/trydemo"
                className="mt-auto main-btn btn-hover text-white font-medium rounded-lg py-2 shadow-md transition-all text-center no-underline"
              >
                Try Demo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
