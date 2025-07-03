import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';

const MissionSection = () => {
    const values = [
        {
            icon: Target,
            title: 'Precision',
            description: 'Every algorithm is fine-tuned for maximum accuracy and performance',
        },
        {
            icon: Users,
            title: 'Accessibility',
            description: 'Making advanced trading tools available to everyone, not just institutions',
        },
        {
            icon: Globe,
            title: 'Innovation',
            description: 'Continuously pushing the boundaries of AI-powered financial technology',
        },
    ];

    return (
        <section id="mission" className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <ScrollAnimation>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                                Our
                                <span className="bg-gradient-primary bg-clip-text text-transparent"> Mission</span>
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                <p>
                                    At FlashAlgo, we believe that advanced trading technology shouldn't be reserved for
                                    Wall Street elite. We're democratizing access to institutional-grade AI trading
                                    algorithms that were once only available to hedge funds and investment banks.
                                </p>
                                <p>
                                    Our team of former quantitative analysts, machine learning engineers, and financial
                                    experts has spent years developing algorithms that can process market data at
                                    superhuman speeds and identify profitable opportunities that human traders miss.
                                </p>
                                <p>
                                    We built FlashAlgo because we saw too many talented individuals struggle with the
                                    emotional and time-intensive nature of manual trading. Our AI removes the guesswork,
                                    fear, and greed from trading decisions, allowing you to build wealth systematically
                                    and consistently.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 mt-12">
                                <div className="glass rounded-xl p-6 border border-border/30">
                                    <div className="text-3xl font-light text-primary mb-2">$2.1B</div>
                                    <div className="text-sm text-muted-foreground">Assets Under Management</div>
                                </div>
                                <div className="glass rounded-xl p-6 border border-border/30">
                                    <div className="text-3xl font-light text-primary mb-2">50K+</div>
                                    <div className="text-sm text-muted-foreground">Active Traders</div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Right Content - Values */}
                    <ScrollAnimation delay={0.3}>
                        <div className="space-y-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="group hover:scale-105 transition-all duration-300">
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <value.icon size={24} weight="light" className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                                                    {value.title}
                                                </h3>
                                                <p className="text-muted-foreground font-light">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Team Quote */}
                <ScrollAnimation delay={0.6}>
                    <div className="mt-20">
                        <Card className="relative overflow-hidden">
                            <CardContent className="p-12 text-center">
                                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <div className="text-6xl text-primary/20 mb-4">"</div>
                                    <blockquote className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                                        We're not just building trading software – we're creating a future where
                                        financial freedom is accessible to everyone, regardless of their background
                                        or experience level.
                                    </blockquote>
                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                                            <span className="text-white font-semibold">AR</span>
                                        </div>
                                        <div className="text-left">
                                            <div className="font-medium">Anamitra Roy</div>
                                            <div className="text-sm text-muted-foreground">CEO & Co-founder</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> 
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default MissionSection;