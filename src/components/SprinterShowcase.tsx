import React from "react";

export default function SprinterShowcase() {
  return (
    <section id='sprinter' className='relative w-full py-1'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='pt-4 text-center text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold leading-tight mb-1'>
            Premium Mercedes Sprinter Limo
          </h2>

          {/* Cropped viewport to trim top/bottom whitespace of the image */}
          <div className='mx-auto w-full max-w-6xl overflow-hidden rounded-md h-[240px] md:h-[320px] lg:h-[380px]'>
            <img
              src='/sprinter-van.PNG'
              alt='Mercedes Sprinter Limo'
              className='w-full h-full object-cover object-center'
              loading='lazy'
              decoding='async'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
