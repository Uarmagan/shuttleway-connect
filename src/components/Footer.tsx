
import { ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-shuttle-darker border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <a 
            href="#home" 
            className="bg-gold hover:bg-gold-light text-white p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src="/lovable-uploads/e18a6ff7-1211-4715-8f19-4b8f2b7178e2.png" 
            alt="US Airport Shuttle Logo" 
            className="w-36 h-36 object-contain mb-6"
          />
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <span className="text-white/80">1-800-SHUTTLE</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <span className="text-white/80">info@usairportshuttle.com</span>
            </div>
          </div>
          
          <p className="text-white/60 text-sm">
            Serving Chicago and New York City with reliable airport transportation
          </p>
          
          <p className="text-white/40 text-sm mt-4">
            © {currentYear} US Airport Shuttle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
