import React from 'react';
import { Wallet, Robot, TrendUp } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';
import connectWalletImg from '../../assets/connect-wallet.jpg';
import aiAssistantImg from '../../assets/ai-assistant.jpg';
import autoTradeImg from '../../assets/automate-trading.jpg';

const HowItWorksSection = () => {
    const steps = [
        {
            icon: Wallet,
            title: 'Connect Your Wallet',
            description: 'Securely link your crypto wallet to FlashAlgo with industry-leading encryption and security protocols.',
            image: connectWalletImg,
            step: '01',
        },
        {
            icon: Robot,
            title: 'Set Up Your AI Assistant',
            description: 'Configure your trading preferences, risk tolerance, and investment goals. Our AI learns your strategy.',
            image: aiAssistantImg,
            step: '02',
        },
        {
            icon: TrendUp,
            title: 'Automate Your Trading',
            description: 'Sit back and watch as our advanced AI executes profitable trades 24/7, maximizing your returns.',
            image: autoTradeImg,
            step: '03',
        },
    ];

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            How It
                            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                            Get started with FlashAlgo in three simple steps and watch your portfolio grow
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <ScrollAnimation key={step.title} delay={0.2 * index}>
                            <Card className="relative overflow-hidden group hover:scale-105 transition-all duration-500">
                                <CardContent className="p-8">
                                    {/* Step Number */}
                                    <div className="absolute top-4 right-4 text-6xl font-light text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                                        {step.step}
                                    </div>

                                    {/* Image */}
                                    <div className="mb-6 relative">
                                        <div className="w-full h-48 rounded-xl overflow-hidden glass border border-border/30">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Icon Overlay */}
                                        <div className="absolute -bottom-4 left-6 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                                            <step.icon size={24} weight="light" className="text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-8">
                                        <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Arrow for Desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className="w-8 h-0.5 bg-gradient-primary"></div>
                                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* CTA Section */}
                <ScrollAnimation delay={0.8}>
                    <div className="text-center mt-16">
                        <div className="glass rounded-2xl p-8 border border-border/30 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-light mb-4">
                                Ready to get started?
                            </h3>
                            <p className="text-muted-foreground mb-6 font-light">
                                Join thousands of traders who trust FlashAlgo to grow their portfolios
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="neumorph-btn px-8 py-4 rounded-xl font-light">
                                    Start Free Trial
                                </button>
                                <button className="glass border border-border/30 px-8 py-4 rounded-xl font-light hover:border-primary/30 transition-colors duration-300">
                                    View Pricing
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default HowItWorksSection;