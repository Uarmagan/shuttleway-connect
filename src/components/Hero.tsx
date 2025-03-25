
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(15,15,15,1) 100%)"
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-32 flex flex-col items-center">
        <div className="text-center mb-10">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 opacity-90">
            <img 
              src="/lovable-uploads/e18a6ff7-1211-4715-8f19-4b8f2b7178e2.png" 
              alt="US Airport Shuttle Logo" 
              className="w-full h-full object-contain animate-fadeIn"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Your Reliable Airport Transportation
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Providing affordable and convenient shared-ride shuttle services between airports and downtown Chicago and New York City.
          </p>
          
          <div 
            className="inline-block rounded-lg px-6 py-3 opacity-0 animate-fadeIn shadow-lg transform transition-all duration-300 hover:scale-105"
            style={{ 
              animationDelay: '0.9s',
              background: 'linear-gradient(135deg, #dbba5b 0%, #b38728 50%, #8c6914 100%)',
              boxShadow: '0 10px 15px -3px rgba(179, 135, 40, 0.3), 0 4px 6px -4px rgba(179, 135, 40, 0.4)'
            }}
          >
            <p className="font-bold" style={{ 
              color: '#000',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)'
            }}>
              Coming Soon to Other Cities!
            </p>
          </div>
        </div>
        
        <a 
          href="#services" 
          className="border border-gold rounded-full p-3 mt-10 opacity-0 animate-fadeIn bounce-on-hover"
          style={{ animationDelay: '1.2s' }}
        >
          <ArrowDown className="h-6 w-6 text-gold" />
        </a>
      </div>
    </section>
  );
}
