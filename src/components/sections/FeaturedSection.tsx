import ScrollAnimation from '@/components/ScrollAnimation';
import techcrunch from '@/assets/logos/techcrunch.svg';
import forbes from '@/assets/logos/forbes.svg';
import coindesk from '@/assets/logos/coindesk.svg';
import wired from '@/assets/logos/wired.svg';
import bloomberg from '@/assets/logos/bloomberg.svg';
import ft from '@/assets/logos/financial-times.svg';
import React from 'react';


const publications = [
  { name: 'TechCrunch', logo: techcrunch, bg: 'bg-[#FFFFF0]' }, // Ivory background
  { name: 'Forbes', logo: forbes, bg: 'bg-[#101820]' },         // Dark Black
  { name: 'CoinDesk', logo: coindesk, bg: 'bg-[#ffb400]' },     // Yellow
  { name: 'Wired', logo: wired, bg: 'bg-[#FFFFF0]' },           // Ivory background
  { name: 'Bloomberg', logo: bloomberg, bg: 'bg-[#5B2C6F]' },   // Purple tone
  { name: 'Financial Times', logo: ft, bg: 'bg-[#F3DFD5]' },    // Pink-beige
];
const FeaturedSection = () => {
  return (
    <section id="featured" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <p className="text-muted-foreground font-light text-lg">
              Featured in leading publications
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
  {publications.map((pub, index) => (
    <ScrollAnimation key={pub.name} delay={0.1 * index}>
      <div className={`rounded-xl p-6 w-28 h-28 flex items-center justify-center ${pub.bg} shadow-md hover:scale-105 transition`}>
        <img
          src={pub.logo}
          alt={`${pub.name} logo`}
          className="max-h-10 object-contain"
        />
      </div>
    </ScrollAnimation>
  ))}
</div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturedSection;
