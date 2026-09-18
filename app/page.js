import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Pricing />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}