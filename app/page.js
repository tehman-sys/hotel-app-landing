import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import AppsList from "./components/AppsList";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Pricing />
      <AppsList />
      <ContactForm />
      <FAQ />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}