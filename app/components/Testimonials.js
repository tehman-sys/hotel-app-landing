export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Raza",
      role: "General Manager, Silver Oak Hotel",
      quote:
        "Our direct bookings jumped noticeably within the first two months of launching the app. Guests love being able to book and manage their stay without going through a third party.",
      initials: "AR",
    },
    {
      name: "Bilal Ahmed",
      role: "Owner, Coastal Breeze Resort",
      quote:
        "The team understood exactly what our staff needed. The operations app alone has cut down so much back-and-forth between front desk and housekeeping.",
      initials: "BA",
    },
    {
      name: "Sara Khan",
      role: "Marketing Head, Meridian Suites",
      quote:
        "Clean, fast, and genuinely easy for our guests to use. The loyalty features have already brought back several repeat bookings.",
      initials: "SK",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl hover:text-amber-500 hover:translate-y-[-2px] font-bold text-slate-900">
          What Hotels Are Saying
        </h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          Real feedback from hotels we've built apps for.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.958z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}