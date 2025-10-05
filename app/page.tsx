'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requestType: 'waitlist',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    {
      id: 0,
      icon: '🅿️',
      title: 'Smart Parking Management',
      tagline: 'Turn Any Space Into Revenue',
      description: 'AI-powered lot design and predictive marketing for maximum efficiency',
      highlights: [
        'AI optimizes lot layouts to maximize revenue and accessibility',
        'Predictive marketing with geolocated ads for parking and local businesses',
        'Apple/Android Pay + Stripe integration with revenue sharing',
        'Full digital valet with premium add-ons (cleaning, wash, package loading)'
      ],
      gradient: 'from-cyan-500 to-blue-500',
      accentColor: 'cyan'
    },
    {
      id: 1,
      icon: '🎫',
      title: 'Total Ticket Control',
      tagline: 'You Market It, You Own It',
      description: 'Keep 100% of your revenue minus processing fees',
      highlights: [
        'Manage digital tickets yourself, control revenue splits with artists',
        'VIP ticket management with advanced controls',
        'Waitlist, refunds, and ticket auctions—all in a few clicks',
        'Keep 100% of revenue minus processing fees—you market, you profit'
      ],
      gradient: 'from-purple-500 to-pink-500',
      accentColor: 'purple'
    },
    {
      id: 2,
      icon: '👕',
      title: 'Seamless Merch Sales',
      tagline: 'Shop From Your Seat',
      description: 'Don\'t let your fans miss the show waiting in line',
      highlights: [
        'Setup digital storefronts in minutes for on-site merchandise',
        'Order from your seat—delivered to you, your car, or pickup on exit',
        'Don\'t miss the show waiting in line',
        'Easy profit splits with Stripe handling all transactions'
      ],
      gradient: 'from-pink-500 to-rose-500',
      accentColor: 'pink'
    },
    {
      id: 3,
      icon: '🍿',
      title: 'VIP Concession Services',
      tagline: 'Major League Experience, Any Size Venue',
      description: 'Seat-to-seat delivery with real-time notifications',
      highlights: [
        'Offer major venue VIP services regardless of operation size',
        'Order food and drinks directly from your seat',
        'Get notified before delivery arrives—never miss a moment',
        'Turn every seat into a VIP experience'
      ],
      gradient: 'from-orange-500 to-yellow-500',
      accentColor: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=900&fit=crop&q=80"
            alt="Concert crowd with vibrant lighting"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-slate-900/70"></div>
        </div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"></div>

        {/* Navigation */}
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TruFan.ai
            </div>
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition-transform">
              Get Early Access
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm">
              <span className="text-cyan-400 font-semibold">Coming in 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              The Future of Event Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From parking to concessions, tickets to merch—manage every aspect of your live events with one powerful platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/50">
                Join the Waitlist
              </a>
              <a href="#features" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all">
                Explore Features
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Stats Section */}
      <div className="relative py-16 border-y border-purple-500/20 bg-slate-900/50 backdrop-blur-sm scroll-animate opacity-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400">Revenue Control</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                4-in-1
              </div>
              <div className="text-gray-400">Platform Suite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                AI
              </div>
              <div className="text-gray-400">Smart Automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                VIP
              </div>
              <div className="text-gray-400">For Every Fan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Interactive Showcase */}
      <div id="features" className="relative py-32" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 scroll-animate opacity-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Choose individual services à la carte or get the complete suite at a singular price
            </p>
          </div>

          {/* Interactive Feature Display */}
          <div className="max-w-7xl mx-auto">
            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-animate opacity-0">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`px-6 py-4 rounded-2xl transition-all duration-500 ${
                    activeFeature === idx
                      ? `bg-gradient-to-r ${feature.gradient} text-white shadow-xl scale-105`
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 border border-purple-500/20'
                  }`}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-sm">{feature.title}</div>
                </button>
              ))}
            </div>

            {/* Active Feature Display */}
            <div className="relative min-h-[600px]">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeFeature === idx
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Feature Visual */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-3xl opacity-20 animate-pulse`}></div>
                      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 hover:scale-105 transition-transform duration-500">
                        <div className="text-9xl mb-8 text-center animate-bounce-slow">{feature.icon}</div>
                        <div className={`text-center text-6xl font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Feature Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-4xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-xl text-gray-400 mb-8">{feature.description}</p>
                      </div>

                      <div className="space-y-4">
                        {feature.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
                            style={{ animationDelay: `${hIdx * 100}ms` }}
                          >
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform`}>
                              ✓
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Powered Features Highlight */}
          <div className="max-w-6xl mx-auto mt-32 scroll-animate opacity-0">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Powered by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Intelligent AI</span>
              </h3>
              <p className="text-xl text-gray-400">
                Smart automation that works behind the scenes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Parking */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group">
                <div className="text-5xl mb-4">🚗</div>
                <h4 className="text-2xl font-bold text-white mb-3">Parking Optimization</h4>
                <p className="text-gray-400">
                  AI analyzes your space and designs optimal parking layouts to maximize capacity and revenue while ensuring smooth traffic flow.
                </p>
              </div>

              {/* AI Marketing */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                <div className="text-5xl mb-4">📊</div>
                <h4 className="text-2xl font-bold text-white mb-3">Predictive Marketing</h4>
                <p className="text-gray-400">
                  Target the right customers at the right time with AI-driven marketing insights and geolocated promotional campaigns.
                </p>
              </div>

              {/* AI Concierge */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/50 transition-all group">
                <div className="text-5xl mb-4">🤖</div>
                <h4 className="text-2xl font-bold text-white mb-3">AI Guest Concierge</h4>
                <p className="text-gray-400">
                  Instant answers to guest questions about the venue, artists, schedule, parking, and more—24/7 intelligent support.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile App CTA */}
          <div className="max-w-4xl mx-auto mt-32 scroll-animate opacity-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 md:p-16">
                <div className="text-center">
                  <div className="text-7xl mb-6 animate-bounce-slow">📱</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">All-in-One Mobile App</h3>
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    The TruFan app handles everything for you and your customers with plenty of opportunities to brand the experience with your own logos.
                  </p>
                  <p className="text-2xl md:text-3xl font-bold mt-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Built for the biggest fans of live entertainment—YOU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="relative py-32 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 scroll-animate opacity-0">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join the Revolution
              </h2>
              <p className="text-2xl text-gray-400">
                Get early access or request an advanced demo
              </p>
            </div>

            <div className="scroll-animate opacity-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all duration-500">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-8xl mb-6 animate-bounce">✓</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-400">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company/Venue
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="Your venue"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-300 mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      required
                      value={formData.requestType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    >
                      <option value="waitlist">Joining the Waitlist</option>
                      <option value="demo">Requesting an Advanced Demo</option>
                      <option value="both">Both Waitlist & Demo</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Tell us about your venue or event needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-purple-500/50 hover:shadow-cyan-500/50"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                TruFan.ai
              </div>
              <p className="text-gray-400 mb-4">
                The future of event management is here.
              </p>
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full">
                <span className="text-cyan-400 font-semibold text-sm">Coming 2026</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Parking Management
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Ticketing
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Merch Sales
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Concessions
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <a href="mailto:hello@trufan.ai" className="hover:text-cyan-400 transition-colors">
                    hello@trufan.ai
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="mailto:support@trufan.ai" className="hover:text-cyan-400 transition-colors">
                    support@trufan.ai
                  </a>
                </li>
                <li className="text-gray-400 mt-4">
                  <div className="text-sm">
                    123 Innovation Drive<br />
                    Suite 400<br />
                    San Francisco, CA 94105
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-purple-500/20 pt-8 mb-8">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <div>
                © 2025 TruFan.ai, Inc. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
