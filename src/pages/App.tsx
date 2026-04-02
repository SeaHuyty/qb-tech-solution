import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServiceSection from "../components/sections/ServicesSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import StatsSection from "../components/sections/StatsSection";
import ContactSection from "../components/sections/ContactSection";

export default function App() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <NavBar />

      <main>
        <HeroSection />
        <ServiceSection />
        <WhyChooseUsSection />
        <StatsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
