import React, { useState } from "react";
import Select from "react-select";

const countries = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "USA", code: "+1", flag: "🇺🇸" },
  { name: "UK", code: "+44", flag: "🇬🇧" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
];

const options = [
  { value: "tech_consultant", label: "Tech Consultant" },
  { value: "bpa", label: "Business Process Automation" },
  { value: "warehouse", label: "Warehouse Management" },
  { value: "supply_chain", label: "Supply Chain Management" },
  { value: "erp", label: "ERP" },
  { value: "crm", label: "CRM" },
  { value: "dealer", label: "Dealer Management" },
  { value: "pos", label: "Retail POS" },
];

const Register = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [selectedOptions, setSelectedOptions] = useState([]);

  function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <section className="book-demo-section">
      <div className="bg-gradient-to-b from-cyan-bg to-white py-16 px-6 sm:px-12 lg:px-32">
        <div className="py-16">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-10 flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 relative max-w-screen-xl mx-auto">
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-300"></div>
            <div className="flex-1 pr-0 lg:pr-10 mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                LET’S BUILD YOUR FUTURE TOGETHER!
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to take your business to the next level? Sign up and let’s
                discuss how VenuPilot can help you scale efficiently and
                maximize your potential. Our team is here to understand your
                needs and craft the perfect solution for your enterprise.
              </p>
              <p className="text-gray-600 mb-6">
                At VenuPilot, we specialize in cutting-edge ERP, CRM, and
                automation solutions designed to streamline your business
                processes, enhance supply chain efficiency, and drive digital
                transformation.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                WHY CHOOSE VenuPilot?
              </h3>
              <h4 className="text-lg font-bold text-gray-800">
                End-to-End Supply Chain Optimization
              </h4>
              <p className="text-gray-600 mb-4">
                Improve efficiency and reduce costs across your operations.
              </p>
              <h4 className="text-lg font-bold text-gray-800">
                Smart ERP & CRM Solutions
              </h4>
              <p className="text-gray-600 mb-4">
                Automate workflows, enhance customer relationships, and make
                data-driven decisions.
              </p>
              <h4 className="text-lg font-bold text-gray-800">
                Custom Business Process Automation
              </h4>
              <p className="text-gray-600">
                Minimize manual tasks and boost productivity with AI-driven
                automation.
              </p>
            </div>
            <div className="flex-1 w-full px-0 sm:px-4 lg:pl-10 space-y-4 max-w-screen-md mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">
                SIGN UP TODAY – YOUR SUCCESS BEGINS HERE!
              </h2>
              <div className="space-y-4 w-full">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full border border-gray-300 rounded px-2 py-2"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 rounded px-2 py-2"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full border border-gray-300 rounded px-2 py-2"
                />

                <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full">
                  <select className="bg-gray-100 text-sm py-2 outline-none h-full">
                    {countries.map((country) => (
                      <option
                        key={`${country.code}-${country.name}`}
                        value={country.code}
                      >
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Your Mobile No *"
                    className="flex-1 px-2 py-2 text-sm outline-none"
                  />
                </div>

                <div className="w-full outline-none">
                  <Select
                    options={options}
                    isSearchable={true}
                    isClearable={true}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={setSelectedOptions}
                    value={selectedOptions}
                    placeholder="Select some options"
                    className="w-full outline-none border-gray-300 rounded py-2"
                  />
                </div>

                <select className="w-full border border-gray-300 rounded px-2 py-2 outline-none">
                  <option>What Type Of Business Do You Own Or Manage</option>
                  <option>Manufacturer</option>
                  <option>Distributor</option>
                  <option>Multi Branch Enterprise</option>
                  <option>E-Commerce Business</option>
                  <option>Service-Based Company</option>
                  <option>Other</option>
                </select>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Captcha"
                    className="w-full border border-gray-300 rounded px-2 py-2"
                  />
                  <div className="flex items-center bg-cyan-dark text-white px-2 py-2 rounded">
                    {captcha}
                    <button className="ml-2" onClick={refreshCaptcha}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v6h6M20 20v-6h-6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <button className="w-full py-2 main-btn btn-hover text-white text-lg font-semibold rounded-lg transition duration-300">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
