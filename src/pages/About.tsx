import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Trophy, Brain } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
    const team = [
        {
            name: 'Anamitra Roy',
            role: 'CEO & Co-founder',
            bio: 'Former Goldman Sachs quantitative analyst with 10+ years in algorithmic trading.',
            avatar: 'AK',
        },
        {
            name: 'Anamitra Roy',
            role: 'CTO & Co-founder',
            bio: 'Ex-Google AI researcher specializing in machine learning and financial modeling.',
            avatar: 'SC',
        },
        {
            name: 'Anamitra Roy',
            role: 'Head of AI',
            bio: 'PhD in Computer Science from MIT, published researcher in algorithmic trading.',
            avatar: 'MR',
        },
        {
            name: 'Anamitra Roy',
            role: 'Head of Product',
            bio: 'Former Coinbase product lead with expertise in crypto market infrastructure.',
            avatar: 'ET',
        },
    ];

    const values = [
        {
            icon: Target,
            title: 'Precision',
            description: 'Every algorithm is meticulously crafted and tested for maximum accuracy.',
        },
        {
            icon: Users,
            title: 'Accessibility',
            description: 'Making institutional-grade trading tools available to everyone.',
        },
        {
            icon: Trophy,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality AI trading platform.',
        },
        {
            icon: Brain,
            title: 'Innovation',
            description: 'Continuously pushing the boundaries of AI-powered finance.',
        },
    ];

    const milestones = [
        { year: '2021', event: 'FlashAlgo founded by former Wall Street quants' },
        { year: '2022', event: 'Launched first AI trading algorithm' },
        { year: '2023', event: 'Reached $500M in assets under management' },
        { year: '2024', event: 'Expanded to 15+ crypto exchanges globally' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-dark"
        >
            <Navigation />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <div className="text-center max-w-4xl mx-auto">
                                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                                    About
                                    <span className="bg-gradient-primary bg-clip-text text-transparent"> FlashAlgo</span>
                                </h1>
                                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                    We're a team of former Wall Street quantitative analysts, AI researchers, and crypto experts
                                    on a mission to democratize access to institutional-grade trading technology.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <ScrollAnimation>
                                <div>
                                    <h2 className="text-4xl font-light mb-6 tracking-tight">
                                        Our Story
                                    </h2>
                                    <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                                        <p>
                                            FlashAlgo was born from frustration. Our founders, Alex and Sarah, spent years building
                                            algorithmic trading systems for hedge funds and investment banks, watching as
                                            sophisticated AI technology generated massive returns for the ultra-wealthy.
                                        </p>
                                        <p>
                                            Meanwhile, retail traders were left with basic tools and emotional decision-making,
                                            often losing money in markets that institutional traders dominated with AI.
                                        </p>
                                        <p>
                                            We decided to change that. In 2021, we left our high-paying Wall Street jobs to build
                                            FlashAlgo – a platform that gives everyone access to the same advanced AI trading
                                            algorithms used by top hedge funds.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={0.3}>
                                <Card className="p-8">
                                    <CardContent className="p-0">
                                        <h3 className="text-2xl font-light mb-6">Company Timeline</h3>
                                        <div className="space-y-6">
                                            {milestones.map((milestone, index) => (
                                                <div key={index} className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
                                                        {milestone.year.slice(-2)}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{milestone.year}</div>
                                                        <div className="text-muted-foreground font-light">{milestone.event}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-light mb-4 tracking-tight">
                                    Our Values
                                </h2>
                                <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                                    The principles that guide everything we do at FlashAlgo
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <ScrollAnimation key={value.title} delay={0.1 * index}>
                                    <Card className="text-center group hover:scale-105 transition-all duration-300">
                                        <CardContent className="p-8">
                                            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <value.icon size={32} weight="light" className="text-white" />
                                            </div>
                                            <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                                            <p className="text-muted-foreground font-light">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-light mb-4 tracking-tight">
                                    Meet Our Team
                                </h2>
                                <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                                    World-class experts in AI, finance, and cryptocurrency trading
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <ScrollAnimation key={member.name} delay={0.1 * index}>
                                    <Card className="text-center group hover:scale-105 transition-all duration-300">
                                        <CardContent className="p-8">
                                            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-semibold">
                                                {member.avatar}
                                            </div>
                                            <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                                            <div className="text-primary mb-4 font-light">{member.role}</div>
                                            <p className="text-muted-foreground font-light text-sm">{member.bio}</p>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <Card className="relative overflow-hidden">
                                <CardContent className="p-12 text-center">
                                    <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                                    <div className="relative z-10">
                                        <h2 className="text-4xl font-light mb-6">
                                            Join Our Mission
                                        </h2>
                                        <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                                            Ready to experience the future of crypto trading? Start your journey with FlashAlgo today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="neumorph-btn px-8 py-4 rounded-xl font-light text-lg">
                                                Get Started Free
                                            </button>
                                            <button className="glass border border-border/30 px-8 py-4 rounded-xl font-light text-lg hover:border-primary/30 transition-colors duration-300">
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </div>
                </section>
            </main>

            <Footer />
        </motion.div>
    );
};

export default About;