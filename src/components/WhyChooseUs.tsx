
import { DollarSign, Clock, Shield, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Affordable Flat Fares",
    description: "Competitive pricing with no hidden fees or surge pricing, allowing you to plan your budget with confidence."
  },
  {
    icon: Clock,
    title: "Reliable and Scheduled Service",
    description: "Consistent departure times and efficient routes to ensure you reach your destination on time, every time."
  },
  {
    icon: Shield,
    title: "Professional Drivers",
    description: "Experienced, courteous, and professionally trained drivers focused on providing a safe and comfortable journey."
  },
  {
    icon: ThumbsUp,
    title: "Comfortable Vehicles",
    description: "Well-maintained, clean vehicles with ample luggage space and comfortable seating for a pleasant travel experience."
  }
];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="py-24 relative bg-gray-50"
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">Why Choose US Airport Shuttle?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience premium airport transportation service with these key benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 md:p-8 zoom-on-hover opacity-0 animate-fadeIn"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="bg-gold/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-gold-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
