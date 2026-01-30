import React, { useState } from "react";

const plans = [
  {
    title: "Starter",
    price: 0,
    priceQuarterly: 0 * 0 * 0.9, 
    period: "month",
    features: [
      "3–5 day turnaround",
      "Native Development",
      "Task delivered one–by–one",
      "Dedicated dashboard",
      "Updates via Dashboard & Slack",
    ],
    tag: "Starter",
  },
  {
    title: "Pro",
    price: 999,
    priceQuarterly: 999 * 3 * 0.9,
    period: "month",
    features: [
      "1–3 day turnaround",
      "Monthly strategy call",
      "Commercial license",
      "Native Development",
      "Tasks delivered one–by–one",
      "Dedicated dashboard",
      "Updates via Dashboard & Slack",
    ],
    tag: "Pro",
  },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState("Monthly");

  return (
    <div className="bg-gradient-to-b from-cyan-bg to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3 mt-28">Simple Plans. No Surprises!</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Select from best plans, ensuring a perfect match. Need more or less?
          Customize your subscription for a seamless fit!
        </p>

        <div className="inline-flex mt-8 bg-white p-1 rounded-full shadow-md">
          {["Monthly", "Quarterly (save 18%)"].map((label) => (
            <button
              key={label}
              onClick={() => setBilling(label)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billing === label
                  ? "bg-gradient-to-r from-cyan-dark to-cyan-dark text-white"
                  : "text-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price =
              billing === "Quarterly (save 18%)"
                ? Math.round(plan.priceQuarterly)
                : plan.price;

            return (
              <div
                key={plan.title}
                className="bg-white rounded-2xl p-8 shadow-lg flex flex-col"
              >
                <div className="text-sm font-semibold text-white bg-cyan-dark px-3 py-1 rounded-full w-fit mb-4">
                  {plan.tag}
                </div>
                <p className="text-gray-600 mb-4">
                  {plan.title === "Pro"
                    ? "Ideal for those who've already got their website up and running and are seeking assistance to enhance and update it further."
                    : "Ideal if you want to build or scale your website fast, with the strategy calls included."}
                </p>
                <h3 className="text-3xl font-bold mb-1">${price}</h3>
                <span className="text-gray-500 mb-6">
                  /{billing === "Monthly" ? "month" : "quarter"}
                </span>

                <ul className="text-left space-y-3 text-sm text-gray-700 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-auto bg-cyan-dark text-white rounded-lg py-2 hover:opacity-90 transition">
                  Get started
                </button>
              </div>
            );
          })}

          <div className="bg-gradient-to-b from-cyan-dark to-cyan-bg rounded-2xl p-8 shadow-lg flex flex-col">
            <div className="text-sm font-semibold text-black bg-white px-3 py-1 rounded-full w-fit mb-4">
              Enterprise
            </div>
            <p className="text-gray-700 mb-4">
              If these plans don’t fit, let’s create one that suits. Customize
              your subscription for a perfect fit, bigger or smaller!
            </p>
            <h3 className="text-2xl font-bold text-black mb-4">Let’s Talks!</h3>

            <ul className="text-left space-y-3 text-sm text-black mb-6">
              <li className="flex items-start gap-2">✓ Everything in design & development</li>
              <li className="flex items-start gap-2">✓ Strategy workshop</li>
              <li className="flex items-start gap-2">✓ Priority support</li>
              <li className="flex items-start gap-2">✓ Multiple tasks at once</li>
              <li className="flex items-start gap-2">✓ Ongoing autonomous A/B testing</li>
              <li className="flex items-start gap-2">✓ Advanced custom development</li>
            </ul>

            <button className="mt-auto bg-cyan-dark text-white rounded-lg py-2 hover:opacity-90 transition">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
