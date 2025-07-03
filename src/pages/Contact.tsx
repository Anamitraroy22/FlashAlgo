import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ScrollAnimation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: EnvelopeSimple,
            title: 'Email',
            details: 'hello@FlashAlgo.ai',
            description: 'Send us an email and we\'ll respond within 24 hours',
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '+1 (555) 123-4567',
            description: 'Call us Monday to Friday from 9am to 6pm EST',
        },
        {
            icon: MapPin,
            title: 'Office',
            details: 'San Francisco, CA',
            description: 'Visit our headquarters in the heart of the financial district',
        },
    ];

    const subjects = [
        'General Inquiry',
        'Technical Support',
        'Enterprise Sales',
        'Partnership',
        'Media & Press',
        'Bug Report',
        'Feature Request',
        'Other',
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
                                    Get in
                                    <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
                                </h1>
                                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                    Have questions about FlashAlgo? Want to learn more about our AI trading platform?
                                    We're here to help you get started on your trading journey.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactInfo.map((info, index) => (
                                <ScrollAnimation key={info.title} delay={0.1 * index}>
                                    <Card className="text-center group hover:scale-105 transition-all duration-300">
                                        <CardContent className="p-8">
                                            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <info.icon size={32} weight="light" className="text-white" />
                                            </div>
                                            <h3 className="text-xl font-medium mb-2">{info.title}</h3>
                                            <div className="text-primary mb-4 font-medium">{info.details}</div>
                                            <p className="text-muted-foreground font-light text-sm">{info.description}</p>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Form */}
                            <ScrollAnimation>
                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="text-3xl font-light mb-6 tracking-tight">
                                            Send us a message
                                        </h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                                                        placeholder="Your full name"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                                                        Company
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                                                        placeholder="Your company"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                        Subject *
                                                    </label>
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        required
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                                                    >
                                                        <option value="">Select a subject</option>
                                                        {subjects.map((subject) => (
                                                            <option key={subject} value={subject}>
                                                                {subject}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows={6}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300 resize-none"
                                                    placeholder="Tell us how we can help..."
                                                />
                                            </div>

                                            <Button type="submit" size="lg" className="w-full">
                                                <PaperPlaneTilt size={20} weight="light" className="mr-2" />
                                                Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>

                            {/* Additional Info */}
                            <ScrollAnimation delay={0.3}>
                                <div className="space-y-8">
                                    <Card>
                                        <CardContent className="p-8">
                                            <h3 className="text-2xl font-light mb-4">
                                                Enterprise Solutions
                                            </h3>
                                            <p className="text-muted-foreground font-light mb-6">
                                                Looking for custom AI trading solutions for your institution? Our enterprise
                                                team can help you integrate FlashAlgo's technology into your existing infrastructure.
                                            </p>
                                            <Button variant="glass" size="lg" className="w-full">
                                                Contact Enterprise Team
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-8">
                                            <h3 className="text-2xl font-light mb-4">
                                                Technical Support
                                            </h3>
                                            <p className="text-muted-foreground font-light mb-6">
                                                Need help with your account or have technical questions? Our support team
                                                is available 24/7 to assist you.
                                            </p>
                                            <Button variant="neumorph" size="lg" className="w-full">
                                                Open Support Ticket
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-8">
                                            <h3 className="text-2xl font-light mb-4">
                                                Partnership Opportunities
                                            </h3>
                                            <p className="text-muted-foreground font-light mb-6">
                                                Interested in partnering with FlashAlgo? We're always looking for strategic
                                                partnerships with exchanges, brokers, and fintech companies.
                                            </p>
                                            <Button variant="outline" size="lg" className="w-full">
                                                Explore Partnerships
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                {/* FAQ Reference */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <Card className="relative overflow-hidden">
                                <CardContent className="p-12 text-center">
                                    <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                                    <div className="relative z-10">
                                        <h2 className="text-4xl font-light mb-6">
                                            Quick Answers
                                        </h2>
                                        <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                                            Looking for quick answers? Check out our comprehensive FAQ section for
                                            immediate help with common questions.
                                        </p>
                                        <Button variant="glass" size="lg">
                                            Visit FAQ Section
                                        </Button>
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

export default Contact;