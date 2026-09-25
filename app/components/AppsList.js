"use client";

import { useState, useEffect } from "react";

export default function AppsList() {
  const [apps, setApps] = useState([]);

  function loadApps() {
    const stored = JSON.parse(localStorage.getItem("apps") || "[]");
    setApps(stored);
  }

  useEffect(() => {
    loadApps();
    window.addEventListener("apps-updated", loadApps);
    return () => window.removeEventListener("apps-updated", loadApps);
  }, []);

  if (apps.length === 0) return null;

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold  hover:text-amber-500 hover:translate-y-[-2px] text-slate-900">Added Apps</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {app.name}
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}