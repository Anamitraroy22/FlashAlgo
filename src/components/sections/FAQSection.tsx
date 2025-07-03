import React, { useState } from 'react';
import { Plus, Minus } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'How does the AI trading algorithm work?',
            answer: 'Our AI uses advanced machine learning models that analyze market patterns, news sentiment, technical indicators, and historical data. It processes over 10,000 data points per second to identify profitable trading opportunities and automatically executes trades based on your risk preferences and investment goals.',
        },
        {
            question: 'Is my cryptocurrency safe with FlashAlgo?',
            answer: 'Absolutely. We never hold your funds or private keys. Our platform connects to exchanges through secure API keys with trading permissions only - no withdrawal permissions. Your cryptocurrency remains in your exchange account, and we use bank-grade encryption to protect all data.',
        },
        {
            question: 'What is the minimum amount needed to start?',
            answer: 'You can start with as little as $100. Our Free plan supports portfolios up to $1,000, making it accessible for beginners. As your portfolio grows, you can upgrade to our Pro plan for unlimited portfolio value and advanced features.',
        },
        {
            question: 'Can I stop the AI trading at any time?',
            answer: 'Yes, you have complete control. You can pause, stop, or modify your AI trading settings at any time through our dashboard. The system will immediately stop placing new trades and you can withdraw your funds whenever you want.',
        },
        {
            question: 'What exchanges do you support?',
            answer: 'We support 15+ major exchanges including Binance, Coinbase Pro, Kraken, KuCoin, Huobi, and more. We\'re constantly adding new exchanges based on user demand. Check our integrations page for the complete list.',
        },
        {
            question: 'How much can I expect to earn?',
            answer: 'While past performance doesn\'t guarantee future results, our AI has achieved an average annual return of 127% with a 94% success rate. Returns vary based on market conditions, your risk settings, and portfolio size. We recommend starting conservatively and adjusting as you become more comfortable.',
        },
        {
            question: 'Do I need trading experience to use FlashAlgo?',
            answer: 'No trading experience is required. Our AI handles all the complex analysis and trading decisions. Simply set your risk tolerance and investment goals, and the system does the rest. We also provide educational resources to help you understand the process.',
        },
        {
            question: 'What customer support do you offer?',
            answer: 'Free users receive email support with 24-48 hour response times. Pro users get priority support with same-day responses. Enterprise customers receive dedicated account management and 24/7 phone support.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            Frequently Asked
                            <span className="bg-gradient-primary bg-clip-text text-transparent"> Questions</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                            Everything you need to know about FlashAlgo AI trading platform
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <ScrollAnimation key={index} delay={0.1 * index}>
                            <Card className="mb-4 overflow-hidden">
                                <CardContent className="p-0">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/5 transition-colors duration-300"
                                    >
                                        <h3 className="text-lg font-medium pr-4">{faq.question}</h3>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <Minus size={20} weight="light" className="text-primary" />
                                            ) : (
                                                <Plus size={20} weight="light" className="text-muted-foreground" />
                                            )}
                                        </div>
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-6 pb-6">
                                            <div className="border-t border-border/30 pt-4">
                                                <p className="text-muted-foreground font-light leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* CTA Section */}
                <ScrollAnimation delay={0.6}>
                    <div className="text-center mt-16">
                        <div className="glass rounded-2xl p-8 border border-border/30 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-light mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-muted-foreground mb-6 font-light">
                                Our team is here to help. Get in touch and we'll answer any questions you have.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="neumorph-btn px-6 py-3 rounded-xl font-light">
                                    Contact Support
                                </button>
                                <button className="glass border border-border/30 px-6 py-3 rounded-xl font-light hover:border-primary/30 transition-colors duration-300">
                                    Schedule Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default FAQSection;