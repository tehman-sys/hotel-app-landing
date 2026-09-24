"use client";

import { useState } from "react";

export default function AddAppPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newApp = {
      id: Date.now(),
      name,
      description,
      image: imageUrl,
    };

    const existing = JSON.parse(localStorage.getItem("apps") || "[]");
    const updated = [...existing, newApp];
    localStorage.setItem("apps", JSON.stringify(updated));

    setName("");
    setDescription("");
    setImageUrl("");
    setSuccess(true);
  }

  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 text-center">
          Add an App
        </h1>
        <p className="text-slate-800 text-center mt-2">
          This adds a new app card to the landing page.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="App name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-slate-300 placeholder-slate-400 text-black rounded-lg px-4 py-3"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            className="w-full border border-slate-300 placeholder-slate-400 text-black rounded-lg px-4 py-3"
          />
          <input
            type="url"
            placeholder="Image URL (https://...)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="w-full border border-slate-300 placeholder-slate-400 text-black rounded-lg px-4 py-3"
          />
          <button
            type="submit"
            className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition"
          >
            Add App
          </button>
        </form>

        {success && (
          <p className="mt-4 text-amber-600 text-center font-medium">
            App added! View it on the homepage.
          </p>
        )}
      </div>
    </section>
  );
}