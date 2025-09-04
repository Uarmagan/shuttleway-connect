import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Locations", href: "#services" },
  { title: "Why Choose Us", href: "#why-choose-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 supports-[backdrop-filter]:bg-white/80 backdrop-blur border-b border-gray-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className='container flex items-center justify-between'>
        <a href='#home' className='flex items-center gap-2'>
          <span className='text-2xl font-bold text-gradient-gold'>
            US AIRPORT SHUTTLE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className='text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200'
            >
              {link.title}
            </a>
          ))}
          <Button
            asChild
            className='bg-gold hover:bg-gold-light text-black rounded-md'
          >
            <a href='#contact'>Book Now</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className='h-6 w-6 text-gray-900' />
          ) : (
            <Menu className='h-6 w-6 text-gray-900' />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md py-5 animate-fadeIn'>
          <nav className='container flex flex-col gap-4'>
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className='text-gray-700 hover:text-gray-900 py-2 transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button
              asChild
              className='bg-gold hover:bg-gold-light text-black rounded-md w-full mt-2'
            >
              <a href='#contact' onClick={() => setIsMenuOpen(false)}>
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
