import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center pt-16 overflow-hidden'
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(250,250,250,1) 100%)",
      }}
    >
      <div className='absolute inset-0 z-0'>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className='container relative z-10 mx-auto px-4 py-32 flex flex-col items-center'>
        <div className='text-center mb-10'>
          <div className='w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 opacity-90'>
            <img
              src='/logo.png'
              alt='US Airport Shuttle Logo'
              className='w-full h-full object-contain animate-fadeIn'
            />
          </div>

          <h1
            className='text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeIn'
            style={{ animationDelay: "0.3s" }}
          >
            Your Reliable Airport Transportation
          </h1>

          <p
            className='text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 opacity-0 animate-fadeIn'
            style={{ animationDelay: "0.6s" }}
          >
            Providing affordable and convenient shared-ride shuttle services
            between airports and downtown Chicago and New York City.
          </p>

          <div
            className='inline-block rounded-lg px-8 py-4 opacity-0 animate-fadeIn shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden'
            style={{
              animationDelay: "0.9s",
              background:
                "linear-gradient(135deg, #f0c755 0%, #d4af37 50%, #9e7e2d 100%)",
            }}
          >
            {/* Shiny overlay effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer'></div>

            <p
              className='font-bold text-lg relative z-10'
              style={{
                color: "#000",
                textShadow: "0 1px 2px rgba(255, 255, 255, 0.3)",
              }}
            >
              Coming Soon to Other Cities!
            </p>
          </div>
        </div>

        <a
          href='#services'
          className='border-2 border-gold rounded-full p-3 mt-10 opacity-0 animate-fadeIn bounce-on-hover'
          style={{ animationDelay: "1.2s" }}
        >
          <ArrowDown className='h-6 w-6 text-gold-dark' />
        </a>
      </div>
    </section>
  );
}
