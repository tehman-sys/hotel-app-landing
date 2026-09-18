"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full border border-slate-300 rounded-lg px-4 py-3 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition";

  return (
    <section id="contact" className="bg-slate-50 px-6 py-20">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Let's Talk About Your App
        </h2>
        <p className="text-slate-600 mt-4">
          Tell us a bit about your hotel and we'll get back to you.
        </p>

        {submitted ? (
          <p className="mt-8 text-amber-600 font-medium">
            Thanks! We'll be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 text-left space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <textarea
              name="message"
              placeholder="Tell us about your hotel"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={inputClasses}
            />
            <button
              type="submit"
              className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}