export default function CTABanner() {
  return (
    <section className="bg-emerald-500   px-6 py-2">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-white text-lg font-semibold">
          Have questions about your hotel app? Let's talk.
        </p>
        <a
          href="#contact"
          className="bg-white text-emerald-700 px-6 py-3 rounded-full font-medium hover:bg-slate-200 hover:translate-y-[-2px] transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}