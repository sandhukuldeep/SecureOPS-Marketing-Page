import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, GitBranch, Activity, Users, Lock, Zap, CheckCircle, ArrowRight, Github, BarChart3, AlertTriangle, TrendingUp } from 'lucide-react';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Load Calendly scripts
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      if (link.parentNode) document.head.removeChild(link);
      if (script.parentNode) document.body.removeChild(script);
    };
  }, []);
  
  // Function to open Calendly popup
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/mphamilton/30min'});
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        // Limit the parallax effect to prevent overlap with the section below
        const maxParallax = 200; // Maximum parallax movement in pixels
        const parallax = Math.min(scrolled * 0.5, maxParallax);
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="floating-shapes">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-shape"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SecureOPS ASPM
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#integrations" className="hover:text-blue-400 transition-colors">Integrations</a>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Zap className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm">Next-Gen Security Platform</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Secure Your
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                    Application
                  </span>
                  <span className="text-white">Ecosystem</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  SecureOPS ASPM provides comprehensive application security posture management 
                  with real-time vulnerability scanning, GitHub integration, and intelligent 
                  risk assessment to protect your entire software supply chain.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={openCalendly}
                  className="border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors"
                >
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500K+</div>
                  <div className="text-gray-400">Repos Scanned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-400">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="dashboard-preview">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Security Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-500/30">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-8 h-8 text-blue-400" />
                        <div>
                          <div className="text-2xl font-bold text-blue-400">342</div>
                          <div className="text-gray-300 text-sm">Repositories</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-4 rounded-lg border border-red-500/30">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-8 h-8 text-red-400" />
                        <div>
                          <div className="text-2xl font-bold text-red-400">23</div>
                          <div className="text-gray-300 text-sm">Critical Issues</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Github className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">auth-service</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-red-400 text-sm">5 Critical</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Github className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">payment-api</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-yellow-400 text-sm">12 Medium</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Github className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">frontend-app</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 text-sm">Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Security </span>
              Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover vulnerabilities, manage risks, and secure your applications 
              with our advanced ASPM platform powered by AI and automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Real-time Vulnerability Scanning",
                description: "Continuous monitoring of your entire codebase with instant alerts for critical security issues.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <GitBranch className="w-12 h-12" />,
                title: "GitHub Integration",
                description: "Seamless integration with GitHub repositories for automated security assessment and reporting.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Activity className="w-12 h-12" />,
                title: "Risk Management",
                description: "Intelligent risk scoring and prioritization to focus on the most critical security threats first.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <Eye className="w-12 h-12" />,
                title: "Security Posture Monitoring",
                description: "Comprehensive visibility into your application security posture across all environments.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Team Collaboration",
                description: "Enable security teams to work together efficiently with shared dashboards and workflows.",
                color: "from-red-500 to-rose-500"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Advanced Analytics",
                description: "Detailed reports and analytics to track security improvements and compliance metrics.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Powerful
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Dashboard </span>
              Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get complete visibility into your security posture with our intuitive dashboard 
              featuring real-time metrics, trends, and actionable insights.
            </p>
          </div>
          <div className="bg-gray-800/20 backdrop-blur-lg rounded-3xl border border-white/10 p-12 hover:scale-[1.02] transition-transform duration-500">
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              {[
                { label: "Total Repositories", value: "1,247", change: "+12%", icon: <Github className="w-6 h-6" />, color: "text-blue-400" },
                { label: "Critical Vulnerabilities", value: "23", change: "-8%", icon: <AlertTriangle className="w-6 h-6" />, color: "text-red-400" },
                { label: "Security Score", value: "94.2", change: "+2.1%", icon: <Shield className="w-6 h-6" />, color: "text-green-400" },
                { label: "Active Scans", value: "156", change: "+5%", icon: <Activity className="w-6 h-6" />, color: "text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-700/30 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-gray-600/50 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-700/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Recent Security Events</h3>
              <div className="space-y-4">
                {[
                  { type: "Critical", repo: "payment-service", issue: "SQL Injection vulnerability detected", time: "2 minutes ago", severity: "bg-red-500" },
                  { type: "Medium", repo: "user-auth", issue: "Outdated dependency: lodash@4.17.15", time: "15 minutes ago", severity: "bg-yellow-500" },
                  { type: "Info", repo: "frontend-app", issue: "Security scan completed successfully", time: "1 hour ago", severity: "bg-green-500" },
                  { type: "High", repo: "api-gateway", issue: "Missing security headers detected", time: "2 hours ago", severity: "bg-orange-500" }
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-600/20 rounded-lg hover:bg-gray-600/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${event.severity}`}></div>
                      <div>
                        <div className="font-medium">{event.issue}</div>
                        <div className="text-sm text-gray-400">{event.repo}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{event.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Enterprise
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Pricing </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your applications with our comprehensive ASPM platform. 
              Get custom pricing tailored to your organization's specific needs and scale.
            </p>
          </div>
          
          <div className="bg-gray-800/10 backdrop-blur-lg rounded-3xl border border-white/10 p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-6">Enterprise Security Solutions</h3>
                <p className="text-xl text-gray-300">
                  Get custom pricing tailored to your organization's needs. Our enterprise solutions 
                  scale with your business and provide comprehensive security coverage.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Form */}
                <div id="contact-form" className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h4 className="text-2xl font-semibold mb-6 text-center">Contact Our Sales Team</h4>
                  <form action="https://formspree.io/f/xyzparjn" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-3">
                          First Name *
                        </label>
                        <input 
                          type="text" 
                          id="firstName"
                          name="firstName" 
                          required 
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200" 
                          placeholder="John" 
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-3">
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          id="lastName"
                          name="lastName" 
                          required 
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required 
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200" 
                        placeholder="john.doe@company.com" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                          Company Name *
                        </label>
                        <input 
                          type="text" 
                          id="company"
                          name="company" 
                          required 
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200" 
                          placeholder="Acme Corp" 
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone" 
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200" 
                          placeholder="+1 (555) 123-4567" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-3">
                        Team Size
                      </label>
                      <select 
                        id="teamSize"
                        name="teamSize" 
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="" style={{ backgroundColor: '#374151', color: '#ffffff' }}>Select team size</option>
                        <option value="1-10" style={{ backgroundColor: '#374151', color: '#ffffff' }}>1-10 employees</option>
                        <option value="11-50" style={{ backgroundColor: '#374151', color: '#ffffff' }}>11-50 employees</option>
                        <option value="51-200" style={{ backgroundColor: '#374151', color: '#ffffff' }}>51-200 employees</option>
                        <option value="201-1000" style={{ backgroundColor: '#374151', color: '#ffffff' }}>201-1000 employees</option>
                        <option value="1000+" style={{ backgroundColor: '#374151', color: '#ffffff' }}>1000+ employees</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-3">
                        Requirements & Compliance Needs
                      </label>
                      <textarea 
                        id="requirements"
                        name="requirements" 
                        rows={4} 
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 resize-vertical" 
                        placeholder="Tell us about your security requirements, compliance needs (SOC2, HIPAA, etc.), and any specific features you're looking for..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      Contact Sales Team
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                </div>
                
                {/* Enterprise Features */}
                <div className="space-y-8">
                  <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <h4 className="text-2xl font-semibold mb-6">Enterprise Features</h4>
                    <div className="space-y-4">
                      {[
                        "Unlimited repository scanning",
                        "Advanced threat intelligence",
                        "Custom compliance reporting",
                        "24/7 dedicated support",
                        "Single Sign-On (SSO) integration",
                        "API access and webhooks",
                        "Custom security policies",
                        "Priority vulnerability alerts",
                        "Advanced analytics and reporting",
                        "Multi-tenant management"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                    <h4 className="text-2xl font-semibold mb-4">Why Choose SecureOPS ASPM?</h4>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        <strong className="text-white">Industry Leading:</strong> Trusted by Fortune 500 companies 
                        for comprehensive application security management.
                      </p>
                      <p>
                        <strong className="text-white">Scalable Solution:</strong> From startups to enterprise, 
                        our platform grows with your security needs.
                      </p>
                      <p>
                        <strong className="text-white">Expert Support:</strong> Dedicated security experts 
                        available 24/7 to help optimize your security posture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="relative z-10 py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Powerful
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Integrations </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SecureOPS ASPM seamlessly integrates with your existing tools and workflows to provide comprehensive security coverage across your entire application ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">🐙</div>
              <h3 className="text-2xl font-semibold mb-4">GitHub Integration</h3>
              <p className="text-gray-300 mb-6">
                Connect your GitHub repositories for continuous security scanning and vulnerability detection. Automatically scan pull requests and enforce security policies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated code scanning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pull request security checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dependency analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">☁️</div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Provider Integration</h3>
              <p className="text-gray-300 mb-6">
                Monitor and secure your cloud infrastructure across AWS, Azure, and Google Cloud. Detect misconfigurations and security vulnerabilities in your cloud resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Infrastructure scanning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>IAM policy analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Container security</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-semibold mb-4">CI/CD Pipeline Integration</h3>
              <p className="text-gray-300 mb-6">
                Integrate security scanning into your CI/CD pipelines with Jenkins, GitLab CI, and GitHub Actions. Catch security issues before they reach production.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pipeline integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Build-time security scanning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Deployment gates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">🐳</div>
              <h3 className="text-2xl font-semibold mb-4">Container Security</h3>
              <p className="text-gray-300 mb-6">
                Scan Docker images and Kubernetes deployments for vulnerabilities. Ensure your containerized applications are secure from development to production.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Image scanning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Runtime security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Registry integration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Issue Tracking Integration</h3>
              <p className="text-gray-300 mb-6">
                Automatically create and track security issues in Jira, GitHub Issues, and other issue tracking systems. Streamline your remediation workflow.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated issue creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Vulnerability tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Two-way synchronization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-2xl font-semibold mb-4">Communication Tools</h3>
              <p className="text-gray-300 mb-6">
                Receive security alerts and notifications in Slack, Microsoft Teams, and other communication platforms. Stay informed about security issues in real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time security alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customizable notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Interactive commands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-8">
            Ready to
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Secure </span>
            Your Apps?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of development teams who trust SecureOPS ASPM to protect their applications.
            Start your free trial today and experience the future of application security.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openCalendly}
              className="border-2 border-white/30 px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </button>
          </div>
          <div className="flex items-center justify-center space-x-8 mt-16 text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SecureOPS ASPM
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SecureOPS ASPM. All rights reserved. Protecting your applications, one vulnerability at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
