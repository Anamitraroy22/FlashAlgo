import React from 'react';
import { Check, Star } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';

const PricingSection = () => {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Perfect for getting started with AI trading',
            features: [
                'Basic AI trading bot',
                'Up to $1,000 portfolio value',
                'Weekly performance reports',
                'Email support',
                'Community access',
            ],
            buttonText: 'Start Free',
            buttonVariant: 'outline' as const,
            popular: false,
        },
        {
            name: 'Pro',
            price: '$49',
            period: 'per month',
            description: 'Advanced features for serious traders',
            features: [
                'Advanced AI algorithms',
                'Unlimited portfolio value',
                'Real-time analytics',
                'Priority support',
                'Custom risk settings',
                'Mobile app access',
                'API integration',
            ],
            buttonText: 'Start Pro Trial',
            buttonVariant: 'default' as const,
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'pricing',
            description: 'Tailored solutions for institutions',
            features: [
                'Custom AI model training',
                'Dedicated account manager',
                'White-label solutions',
                'Advanced compliance tools',
                'Multi-exchange integration',
                'Custom reporting',
                '24/7 phone support',
            ],
            buttonText: 'Contact Sales',
            buttonVariant: 'glass' as const,
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            Simple
                            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                            Choose the perfect plan for your trading goals. Start free and upgrade as you grow.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <ScrollAnimation key={plan.name} delay={0.1 * index}>
                            <Card className={`relative h-full group hover:scale-105 transition-all duration-500 ${
                                plan.popular ? 'border-primary shadow-glow' : ''
                            }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-primary px-6 py-2 rounded-full text-white text-sm font-light flex items-center space-x-1">
                                            <Star size={16} weight="fill" />
                                            <span>Recommended</span>
                                        </div>
                                    </div>
                                )}

                                <CardContent className="p-8">
                                    {/* Plan Header */}
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-light">{plan.price}</span>
                                            {plan.period !== 'pricing' && (
                                                <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground font-light">{plan.description}</p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-3">
                                                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Check size={12} weight="bold" className="text-primary" />
                                                </div>
                                                <span className="text-muted-foreground font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        variant={plan.buttonVariant}
                                        className="w-full"
                                        size="lg"
                                    >
                                        {plan.buttonText}
                                    </Button>

                                    {/* Additional Info */}
                                    {plan.name === 'Pro' && (
                                        <div className="mt-4 text-center">
                                            <p className="text-xs text-muted-foreground">
                                                14-day free trial • No credit card required
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Pricing Notes */}
                <ScrollAnimation delay={0.6}>
                    <div className="mt-16 text-center">
                        <div className="glass rounded-2xl p-8 border border-border/30 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-light mb-6">
                                Frequently Asked Questions
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                <div>
                                    <h4 className="font-medium mb-2">Is there a free trial?</h4>
                                    <p className="text-muted-foreground font-light text-sm">
                                        Yes! Our Pro plan includes a 14-day free trial with no credit card required.
                                        You can cancel anytime during the trial period.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Can I cancel anytime?</h4>
                                    <p className="text-muted-foreground font-light text-sm">
                                        Absolutely. You can cancel your subscription at any time through your account settings.
                                        No hidden fees or cancellation charges.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">What exchanges do you support?</h4>
                                    <p className="text-muted-foreground font-light text-sm">
                                        We support all major exchanges including Binance, Coinbase Pro, Kraken,
                                        and 15+ others with more being added regularly.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Is my data secure?</h4>
                                    <p className="text-muted-foreground font-light text-sm">
                                        Security is our top priority. We use bank-grade encryption and never store
                                        your private keys or withdrawal permissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default PricingSection;