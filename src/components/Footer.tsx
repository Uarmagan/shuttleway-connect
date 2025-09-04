
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <a 
            href="#home" 
            className="bg-gold hover:bg-gold-light text-black p-3 rounded-full transition-colors duration-300"
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
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-gold-dark" />
                <span className="text-gray-900 font-medium">Chicago</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-dark" />
                <span className="text-gray-700">312-473-8000</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-gold-dark" />
                <span className="text-gray-900 font-medium">New York</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-dark" />
                <span className="text-gray-700">212-903-4460</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-8">
            <Mail className="h-4 w-4 text-gold-dark" />
            <span className="text-gray-700">info@usairportshuttle.com</span>
          </div>
          
          <p className="text-gray-600 text-sm">
            Serving Chicago and New York City with reliable airport transportation
          </p>
          
          <p className="text-gray-500 text-sm mt-4">
            © {currentYear} US Airport Shuttle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
