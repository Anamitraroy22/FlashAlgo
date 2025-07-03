import React from 'react';
import { Brain, Shield, TrendUp, Lightning } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';

const FeaturesSection = () => {
    const features = [
        {
            icon: Brain,
            title: 'Advanced AI Algorithm',
            description: 'Our proprietary machine learning models analyze market patterns, news sentiment, and technical indicators to make intelligent trading decisions.',
            color: 'text-purple-400',
            bgColor: 'bg-purple-400/10',
        },
        {
            icon: Shield,
            title: 'Risk Management',
            description: 'Built-in stop-loss mechanisms, position sizing, and portfolio diversification to protect your capital while maximizing returns.',
            color: 'text-blue-400',
            bgColor: 'bg-blue-400/10',
        },
        {
            icon: TrendUp,
            title: 'Performance Analytics',
            description: 'Comprehensive reports and real-time dashboards showing your portfolio performance, trade history, and ROI metrics.',
            color: 'text-green-400',
            bgColor: 'bg-green-400/10',
        },
        {
            icon: Lightning,
            title: '24/7 Automated Trading',
            description: 'Never miss an opportunity. Our AI works around the clock, executing trades even while you sleep or focus on other priorities.',
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-400/10',
        },
    ];

    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            Powerful
                            <span className="bg-gradient-primary bg-clip-text text-transparent"> Features</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                            Everything you need to succeed in crypto trading, powered by cutting-edge artificial intelligence
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <ScrollAnimation key={feature.title} delay={0.1 * index}>
                            <Card className="group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                                <CardContent className="p-8">
                                    {/* Background Glow Effect */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon size={32} weight="light" className={feature.color} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground font-light leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="mt-6">
                                        <button className={`${feature.color} font-light text-sm hover:underline transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0`}>
                                            Learn more →
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Feature Highlight */}
                <ScrollAnimation delay={0.6}>
                    <div className="mt-16">
                        <Card className="relative overflow-hidden">
                            <CardContent className="p-12 text-center">
                                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-light mb-4">
                                        Proven Track Record
                                    </h3>
                                    <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                                        Our AI has analyzed over 10 billion data points and executed more than 1 million trades,
                                        consistently outperforming the market with an average annual return of 127%.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                        <div>
                                            <div className="text-3xl font-light text-primary mb-2">127%</div>
                                            <div className="text-sm text-muted-foreground">Average Annual Return</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-light text-primary mb-2">94%</div>
                                            <div className="text-sm text-muted-foreground">Success Rate</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-light text-primary mb-2">1M+</div>
                                            <div className="text-sm text-muted-foreground">Trades Executed</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-light text-primary mb-2">24/7</div>
                                            <div className="text-sm text-muted-foreground">Market Monitoring</div>
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

export default FeaturesSection;