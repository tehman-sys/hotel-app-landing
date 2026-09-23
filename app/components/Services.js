import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Booking & Reservation Apps",
      description: "Let guests browse rooms, check availability, and book directly from their phone — no OTA commission.",
      image: "/service-booking1.jpeg",
    },
    {
      title: "Guest Services Apps",
      description: "In-app room service, housekeeping requests, and spa or restaurant bookings, all from one place.",
      image: "/service-guest.jpeg",
    },
    {
      title: "Loyalty & Rewards Apps",
      description: "Points, offers, and push notifications that bring repeat guests back to book direct.",
      image: "/service-loyalty1.jpeg",
    },
    {
      title: "Staff & Operations Apps",
      description: "Internal tools for staff to manage bookings, housekeeping tasks, and maintenance requests efficiently.",
      image: "/service-staff.jpeg",
    },
  ];

  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  hover:text-amber-500 hover:translate-y-[-2px] font-bold text-slate-900">What We Build</h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          Custom mobile apps built around how hotels actually operate.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-amber-200 transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}