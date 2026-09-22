"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a hotel app?",
      answer:
        "Most projects take 4–8 weeks depending on features, from discovery call to launch.",
    },
    {
      question: "Do you integrate with our existing booking system?",
      answer:
        "Yes — we can connect with most PMS and channel manager platforms, including SiteMinder, Cloudbeds, and others.",
    },
    {
      question: "Will the app work on both iPhone and Android?",
      answer:
        "Yes, every app we build works across both platforms from a single codebase.",
    },
    {
      question: "What happens after the app launches?",
      answer:
        "We offer ongoing support and updates so your app keeps running smoothly as your hotel grows.",
    },
  ];

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold hover:text-amber-500 hover:translate-y-[-2px] transition-transform text-slate-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 font-medium text-slate-900 hover:text-amber-600 transition"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}