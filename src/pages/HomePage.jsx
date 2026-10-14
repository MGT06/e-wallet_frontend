import CTASection from "../components/Home/CTASection";
import FeaturesSection from "../components/Home/FeaturesSection";
import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import TestimoniesSection from "../components/Home/TestimoniesSection";
import WelcomeSection from "../components/Home/WelcomeSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WelcomeSection />
      <FeaturesSection />
      <TestimoniesSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
