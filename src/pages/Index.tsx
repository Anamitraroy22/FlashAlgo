import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HomeSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import MissionSection from '@/components/sections/MissionSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/Footer';
import HomeSection from '@/components/sections/HomeSection';

const Index = () => {
    useEffect(() => {
        // Add scroll animation observer for existing fade-in-up elements
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '-50px',
        });

        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-dark"
        >
            <Navigation />

            <main>
                <HomeSection />
                <FeaturedSection />
                <TestimonialsSection />
                <HowItWorksSection />
                <FeaturesSection />
                <MissionSection />
                <PricingSection />
                <FAQSection />
            </main>

            <Footer />
        </motion.div>
    );
};

export default Index;
