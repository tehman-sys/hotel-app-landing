import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Pricing />
      <ContactForm />
      <FAQ />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}