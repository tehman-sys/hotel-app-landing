export default function Process() {
  const steps = [
    { number: "01", title: "Discovery Call", description: "We learn about your hotel's operations, guest experience goals, and current booking setup." },
    { number: "02", title: "Design", description: "We map out the app's screens and flow, tailored to your brand and guest journey." },
    { number: "03", title: "Build", description: "We develop the app using modern, reliable technology — tested at every stage." },
    { number: "04", title: "Launch & Support", description: "We deploy your app and stay on for updates, fixes, and future improvements." },
  ];

  return (
    <section id="process" className="bg-slate-50 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl hover:text-amber-500 hover:translate-y-[-2px] transition-colors font-bold text-slate-900">
          How We Work
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-left">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-white p-6 hover:translate-y-[-2px] hover:shadow-md transition-transform hover:border-amber-200 rounded-xl border border-slate-100"
            >
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold group-hover:bg-amber-600 transition">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mt-4">
                {step.title}
              </h3>
              <p className="text-slate-600 mt-2 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}