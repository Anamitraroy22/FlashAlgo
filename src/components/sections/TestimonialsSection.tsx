import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight, Star } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Crypto Investor',
            avatar: 'SC',
            content: 'FlashAlgo completely transformed my trading strategy. The AI consistently outperforms my manual trades.',
            result: '+127% Portfolio Growth',
            rating: 5,
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Day Trader',
            avatar: 'MR',
            content: 'Finally, I can sleep peacefully knowing my investments are being managed 24/7 by intelligent algorithms.',
            result: '+89% in 6 Months',
            rating: 5,
        },
        {
            name: 'Emma Thompson',
            role: 'Financial Advisor',
            avatar: 'ET',
            content: 'The risk management features are exceptional. FlashAlgo protects capital while maximizing opportunities.',
            result: '+156% Annual Return',
            rating: 5,
        },
        {
            name: 'David Kim',
            role: 'Tech Entrepreneur',
            avatar: 'DK',
            content: 'As someone in tech, I appreciate the sophisticated AI models. The performance speaks for itself.',
            result: '+203% ROI',
            rating: 5,
        },
        {
            name: 'Lisa Wang',
            role: 'Portfolio Manager',
            avatar: 'LW',
            content: 'FlashAlgo has become an essential tool for institutional-grade crypto trading strategies.',
            result: '+98% Success Rate',
            rating: 5,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            Trusted by
                            <span className="bg-gradient-primary bg-clip-text text-transparent"> Thousands</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                            Real results from real traders who transformed their portfolios with FlashAlgo AI
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="relative">
                    {/* Desktop View */}
                    <div className="hidden md:block">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {getVisibleTestimonials().map((testimonial, index) => (
                                <ScrollAnimation key={`${currentIndex}-${index}`} delay={0.1 * index}>
                                    <Card className="h-full">
                                        <CardContent className="p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">{testimonial.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} size={16} weight="fill" className="text-yellow-500" />
                                                ))}
                                            </div>

                                            <p className="text-muted-foreground mb-4 font-light leading-relaxed">
                                                "{testimonial.content}"
                                            </p>

                                            <div className="glass rounded-lg p-3 border border-primary/20">
                                                <div className="text-primary font-semibold">{testimonial.result}</div>
                                                <div className="text-xs text-muted-foreground">Verified Result</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </motion.div>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                            {testimonials[currentIndex].avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={16} weight="fill" className="text-yellow-500" />
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground mb-4 font-light leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    <div className="glass rounded-lg p-3 border border-primary/20">
                                        <div className="text-primary font-semibold">{testimonials[currentIndex].result}</div>
                                        <div className="text-xs text-muted-foreground">Verified Result</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <Button variant="glass" size="icon" onClick={prevTestimonial}>
                            <CaretLeft size={20} weight="light" />
                        </Button>

                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                                    }`}
                                />
                            ))}
                        </div>

                        <Button variant="glass" size="icon" onClick={nextTestimonial}>
                            <CaretRight size={20} weight="light" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;