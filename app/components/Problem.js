export default function Problem() {
  const problems = [
    {
      title: "Losing Revenue to OTA Commissions",
      description:
        "Booking.com and Expedia take 15–25% per booking. A direct-booking app keeps that revenue in-house.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Weak Guest Retention",
      description:
        "Without a loyalty app, repeat guests have no reason to book direct instead of through a third party next time.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Falling Behind Bigger Chains",
      description:
        "Major hotel brands already offer app-based booking and service. Independent hotels risk feeling outdated without one.",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl hover:text-amber-500 md:text-4xl font-bold text-slate-900">
          The Problem Hotels Are Losing Money To
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-amber-200 transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-slate-900 mt-4">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}