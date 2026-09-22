import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16">
      <Image
        src="/hero-app1.jpeg"
        alt="Hotel booking app on a mobile phone"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

     <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-900/90 via-slate-900/70 md:via-slate-900/50 to-slate-900/60 md:to-transparent" />
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl md:text-6xl hover:text-amber-500 hover:translate-y-[-2px] transition-colors font-bold text-white leading-tight">
          Mobile Apps Built for the Hotel Industry
        </h1>
        <p className="text-slate-200 text-lg mt-6">
          Custom booking, guest service, and loyalty apps that help hotels
          cut OTA commissions and win direct bookings.
        </p>

        <a href="#contact"
          className="inline-block mt-8 bg-amber-600 text-white px-6 py-3 text-xl rounded-full font-semibold hover:bg-amber-700 hover:scale-105 transition"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
}