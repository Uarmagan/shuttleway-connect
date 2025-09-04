import { MapPin, Plane } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chicagoServices = [
  {
    title: "O'Hare International Airport",
    description:
      "Shuttle service to and from downtown Chicago with convenient pickup and drop-off locations.",
  },
  {
    title: "Midway International Airport",
    description:
      "Reliable transportation between Midway Airport and downtown Chicago locations.",
  },
];

const newYorkServices = [
  {
    title: "John F. Kennedy International Airport (JFK)",
    description:
      "Convenient shuttle service connecting JFK and New York City locations.",
  },
  {
    title: "LaGuardia Airport (LGA)",
    description:
      "Efficient transportation between LaGuardia Airport and Manhattan destinations.",
  },
  {
    title: "Newark Liberty International Airport (EWR)",
    description:
      "Reliable shuttle service from Newark Airport to New York City locations.",
  },
];

export default function Services() {
  return (
    <section id='services' className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gradient-gold'>
            Our Locations
          </h2>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
            Reliable, affordable and comfortable airport shuttle services in
            major US cities.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {/* Chicago Services */}
          <div
            className='opacity-0 animate-slideInLeft'
            style={{ animationDelay: "0.2s" }}
          >
            <div className='glass-card rounded-xl overflow-hidden h-full'>
              <div className='p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <MapPin className='h-7 w-7 text-gold-dark' />
                  <h3 className='text-2xl md:text-3xl font-bold'>Chicago</h3>
                </div>

                <div className='space-y-6'>
                  {chicagoServices.map((service, index) => (
                    <Card
                      key={index}
                      className='bg-white border border-gray-200'
                    >
                      <CardHeader className='pb-2'>
                        <div className='flex items-start gap-3'>
                          <Plane className='h-5 w-5 text-gold-dark mt-1' />
                          <CardTitle className='text-lg text-gray-900'>
                            {service.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className='text-gray-600'>
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* New York Services */}
          <div
            className='opacity-0 animate-slideInRight'
            style={{ animationDelay: "0.4s" }}
          >
            <div className='glass-card rounded-xl overflow-hidden h-full'>
              <div className='p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <MapPin className='h-7 w-7 text-gold-dark' />
                  <h3 className='text-2xl md:text-3xl font-bold'>New York</h3>
                </div>

                <div className='space-y-6'>
                  {newYorkServices.map((service, index) => (
                    <Card
                      key={index}
                      className='bg-white border border-gray-200'
                    >
                      <CardHeader className='pb-2'>
                        <div className='flex items-start gap-3'>
                          <Plane className='h-5 w-5 text-gold-dark mt-1' />
                          <CardTitle className='text-lg text-gray-900'>
                            {service.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className='text-gray-600'>
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
