
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Animate sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll('.js-show-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-shuttle-dark text-white relative">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
