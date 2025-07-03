import React from 'react';
import { motion } from 'framer-motion';
import { CalendarBlank, Clock, User, ArrowRight } from 'phosphor-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ScrollAnimation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
    const featuredPost = {
        title: 'The Future of AI-Powered Crypto Trading: What to Expect in 2024',
        excerpt: 'Explore the cutting-edge developments in artificial intelligence that are revolutionizing cryptocurrency trading and what traders can expect in the coming year.',
        author: 'Alex Kim',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'AI Technology',
        image: '/placeholder-blog-hero.jpg',
    };

    const blogPosts = [
        {
            title: 'Understanding Risk Management in Automated Trading',
            excerpt: 'Learn how AI algorithms assess and manage risk to protect your portfolio while maximizing returns in volatile crypto markets.',
            author: 'Sarah Chen',
            date: '2024-01-10',
            readTime: '6 min read',
            category: 'Risk Management',
            image: '/placeholder-blog-1.jpg',
        },
        {
            title: 'Machine Learning Models That Beat the Market',
            excerpt: 'Deep dive into the specific machine learning techniques and models that consistently outperform traditional trading strategies.',
            author: 'Marcus Rodriguez',
            date: '2024-01-05',
            readTime: '10 min read',
            category: 'Machine Learning',
            image: '/placeholder-blog-2.jpg',
        },
        {
            title: 'Building a Diversified Crypto Portfolio with AI',
            excerpt: 'Discover how artificial intelligence can help you build and maintain a balanced cryptocurrency portfolio that minimizes risk.',
            author: 'Emma Thompson',
            date: '2023-12-28',
            readTime: '7 min read',
            category: 'Portfolio Strategy',
            image: '/placeholder-blog-3.jpg',
        },
    ];

    const categories = [
        'All Posts',
        'AI Technology',
        'Trading Strategies',
        'Risk Management',
        'Market Analysis',
        'Portfolio Strategy',
        'Machine Learning',
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
                            <div className="text-center max-w-4xl mx-auto mb-16">
                                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                                    FlashAlgo
                                    <span className="bg-gradient-primary bg-clip-text text-transparent"> Blog</span>
                                </h1>
                                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                    Insights, strategies, and expert analysis on AI-powered cryptocurrency trading.
                                    Stay ahead of the market with our latest research and findings.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Categories */}
                        <ScrollAnimation delay={0.2}>
                            <div className="flex flex-wrap justify-center gap-4 mb-16">
                                {categories.map((category, index) => (
                                    <button
                                        key={category}
                                        className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                                            index === 0
                                                ? 'bg-primary text-primary-foreground'
                                                : 'glass border border-border/30 text-muted-foreground hover:border-primary/30'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Featured Post */}
                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <Card className="overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                                <div className="grid lg:grid-cols-2">
                                    {/* Image */}
                                    <div className="h-64 lg:h-full bg-gradient-primary opacity-20 flex items-center justify-center">
                                        <div className="text-white text-center p-8">
                                            <div className="text-6xl mb-4">📈</div>
                                            <div className="text-lg">Featured Article Image</div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4 w-fit">
                                            Featured Post
                                        </div>

                                        <h2 className="text-3xl lg:text-4xl font-light mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                                            {featuredPost.title}
                                        </h2>

                                        <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-6">
                                            <div className="flex items-center space-x-2">
                                                <User size={16} weight="light" />
                                                <span>{featuredPost.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CalendarBlank size={16} weight="light" />
                                                <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Clock size={16} weight="light" />
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                        </div>

                                        <Button variant="default" size="lg" className="w-fit">
                                            Read Full Article
                                            <ArrowRight size={16} weight="light" className="ml-2" />
                                        </Button>
                                    </CardContent>
                                </div>
                            </Card>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <h2 className="text-4xl font-light mb-12 tracking-tight text-center">
                                Latest Articles
                            </h2>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <ScrollAnimation key={post.title} delay={0.1 * index}>
                                    <Card className="group hover:scale-105 transition-all duration-500 h-full">
                                        <CardContent className="p-0">
                                            {/* Image */}
                                            <div className="h-48 bg-gradient-primary/20 flex items-center justify-center">
                                                <div className="text-white text-center">
                                                    <div className="text-3xl mb-2">📊</div>
                                                    <div className="text-sm">Article Image</div>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                {/* Category */}
                                                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs rounded-full mb-3">
                                                    {post.category}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                                    {post.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-muted-foreground font-light text-sm mb-4 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                {/* Meta */}
                                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                    <div className="flex items-center space-x-4">
                                                        <span>{post.author}</span>
                                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                                    </div>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </div>

                        {/* Load More */}
                        <ScrollAnimation delay={0.6}>
                            <div className="text-center mt-12">
                                <Button variant="glass" size="lg">
                                    Load More Articles
                                </Button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <ScrollAnimation>
                            <Card className="relative overflow-hidden">
                                <CardContent className="p-12 text-center">
                                    <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                                    <div className="relative z-10 max-w-2xl mx-auto">
                                        <h2 className="text-4xl font-light mb-6">
                                            Stay Informed
                                        </h2>
                                        <p className="text-xl text-muted-foreground font-light mb-8">
                                            Get the latest insights on AI trading, market analysis, and cryptocurrency
                                            trends delivered directly to your inbox.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                                            />
                                            <Button size="lg" className="whitespace-nowrap">
                                                Subscribe
                                            </Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-4">
                                            No spam, unsubscribe at any time. Read our privacy policy.
                                        </p>
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

export default Blog;