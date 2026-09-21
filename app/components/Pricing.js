export default function Pricing() {
  const plans = [
    {
      name: "Starter App",
      tagline: "For single-property hotels",
      features: [
        "Booking & reservation flow",
        "Guest service requests",
        "Basic push notifications",
      ],
    },
    {
      name: "Growth App",
      tagline: "For hotels or small chains scaling up",
      features: [
        "Everything in Starter",
        "Loyalty & rewards system",
        "OTA/channel manager integration",
      ],
    },
    {
      name: "Custom Build",
      tagline: "For hotel groups with specific needs",
      features: [
        "Fully custom feature set",
        "Staff & operations tools",
        "Dedicated support & updates",
      ],
    },
  ];

  return (
   <section id="pricing" className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl hover:text-amber-500 transition-colors font-bold text-slate-900">
          Pricing Built Around Your Property
        </h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          Every hotel is different, so every quote is custom. Here's roughly
          where clients start.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col hover:shadow-md hover:-translate-y-1 hover:border-amber-200 transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.name}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{plan.tagline}</p>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <a
          href="#contact"
          className="inline-block mt-10 bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 hover:scale-105 transition"
        >
          Get a Custom Quote
        </a>
      </div>
    </section>
  );
}