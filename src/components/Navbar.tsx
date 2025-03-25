
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Why Choose Us', href: '#why-choose-us' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-shuttle-darker py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient-gold">US AIRPORT SHUTTLE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm text-white/90 hover:text-white transition-colors duration-200"
            >
              {link.title}
            </a>
          ))}
          <Button className="bg-gold hover:bg-gold-light text-white rounded-md">
            Book Now
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-shuttle-darker shadow-lg py-5 animate-fadeIn">
          <nav className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-white/90 hover:text-white py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button className="bg-gold hover:bg-gold-light text-white rounded-md w-full mt-2">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
