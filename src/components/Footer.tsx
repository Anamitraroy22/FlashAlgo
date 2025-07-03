import React from 'react';
import { TwitterLogo, LinkedinLogo, GithubLogo, DiscordLogo } from 'phosphor-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const Footer = () => {
    const footerLinks = {
        Product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'API Documentation', href: '#' },
            { name: 'Security', href: '#' },
        ],
        Company: [
            { name: 'About', href: '/about' },
            { name: 'Blog', href: '/blog' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '/contact' },
        ],
        Resources: [
            { name: 'Help Center', href: '#' },
            { name: 'Community', href: '#' },
            { name: 'Tutorials', href: '#' },
            { name: 'Status', href: '#' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Disclaimer', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: TwitterLogo, href: '#', label: 'Twitter' },
        { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
        { icon: GithubLogo, href: '#', label: 'GitHub' },
        { icon: DiscordLogo, href: '#', label: 'Discord' },
    ];

    return (
        <footer className="py-20 border-t border-border/30">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="grid lg:grid-cols-6 gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent mb-4">
                                FlashAlgo
                            </div>
                            <p className="text-muted-foreground font-light mb-6 max-w-sm">
                                Revolutionizing cryptocurrency trading with advanced AI algorithms.
                                Join thousands of traders growing their portfolios with FlashAlgo.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-10 h-10 glass rounded-lg border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} weight="light" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Sections */}
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-medium mb-4">{category}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-muted-foreground font-light hover:text-primary transition-colors duration-300"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Newsletter Signup */}
                <ScrollAnimation delay={0.2}>
                    <div className="glass rounded-2xl p-8 border border-border/30 mb-12">
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl font-light mb-4">
                                Stay Updated
                            </h3>
                            <p className="text-muted-foreground font-light mb-6">
                                Get the latest updates on AI trading strategies, market insights, and platform features.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                                />
                                <button className="neumorph-btn px-6 py-3 rounded-xl font-light whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Bottom Section */}
                <ScrollAnimation delay={0.4}>
                    <div className="border-t border-border/30 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-muted-foreground font-light mb-4 md:mb-0">
                                © 2025 FlashAlgo. All rights reserved.(By Anamitra Roy)
                            </div>

                            {/* Risk Disclaimer */}
                            <div className="text-xs text-muted-foreground font-light max-w-md text-center md:text-right">
                                Trading cryptocurrencies involves substantial risk. Past performance does not guarantee future results.
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </footer>
    );
};

export default Footer;