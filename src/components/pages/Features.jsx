import React from "react";

const Features = () => {
  return (
    <section id="features" className="feature-section py-16 bg-white mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-5/12">
            <div className="section-title mb-6">
              <h2 className="mb-4 text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-gray-900">
                Modern design with Essential Features
              </h2>
              <p className="text-[16px] leading-[25px] text-gray-700">
                Lorem ipsum dolor amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod te invidunt, Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="single-feature">
              <div className="feature-icon text-cyan-600 text-[32px] mb-2">
                <i className="lni lni-display"></i>
              </div>
              <div className="feature-content">
                <h4 className="text-[20px] font-bold mb-2">SaaS Focused</h4>
                <p className="text-[16px] leading-[25px] text-gray-700">
                  Lorem ipsum dolor amet, consetetur sadipscing elitr,
                  diam nonu eirmod tem invidunt.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="feature-icon text-cyan-600 text-[32px] mb-2">
                <i className="lni lni-compass"></i>
              </div>
              <div className="feature-content">
                <h4 className="text-[20px] font-bold mb-2">Awesome Design</h4>
                <p className="text-[16px] leading-[25px] text-gray-700">
                  Lorem ipsum dolor amet, consetetur sadipscing elitr,
                  diam nonu eirmod tem invidunt.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="feature-icon text-cyan-600 text-[32px] mb-2">
                <i className="lni lni-grid-alt"></i>
              </div>
              <div className="feature-content">
                <h4 className="text-[20px] font-bold mb-2">Ready to Use</h4>
                <p className="text-[16px] leading-[25px] text-gray-700">
                  Lorem ipsum dolor amet, consetetur sadipscing elitr,
                  diam nonu eirmod tem invidunt.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="feature-icon text-cyan-600 text-[32px] mb-2">
                <i className="lni lni-layers"></i>
              </div>
              <div className="feature-content">
                <h4 className="text-[20px] font-bold mb-2">Essential Sections</h4>
                <p className="text-[16px] leading-[25px] text-gray-700">
                  Lorem ipsum dolor amet, consetetur sadipscing elitr,
                  diam nonu eirmod tem invidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
