"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const HomePage = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-text-primary dark:bg-dark-background dark:text-dark-text-primary">
      {/* Hero Section */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <header className="relative top-header bg-white/95 dark:bg-dark-paper/95">
          <h1 className="text-2xl font-bold text-primary dark:text-white">FreelanceSafe</h1>
          <div className="flex gap-2">
            <button onClick={toggleTheme} className="btn btn-outline">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <Link href="/auth/signin">
              <button className="btn btn-outline">Sign In</button>
            </Link>
            <Link href="/auth/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        </header>
        
        <div className="relative p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Secure Freelance Payments & Escrow Management
            </h1>
            <p className="text-xl mb-8 text-white/90">
              FreelanceSafe provides a secure platform for managing freelance payments
              with built-in escrow protection.
            </p>
            <Link href="/auth/signup">
              <button className="btn btn-primary bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white dark:bg-dark-paper">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Secure Payments', icon: '🔒', desc: 'Built-in escrow protection' },
              { title: 'Smart Contracts', icon: '📄', desc: 'Automated agreements' },
              { title: 'Cross-platform', icon: '🌐', desc: 'Web, mobile & CLI access' }
            ].map((feature) => (
              <div key={feature.title} className="p-6 elevation-1 rounded-lg dark:bg-dark-elevation-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="section bg-background dark:bg-dark-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 rounded-lg elevation-1 dark:bg-dark-paper dark:elevation-1">
              <h3 className="text-xl font-bold mb-4">CLI Setup 🐍</h3>
              <pre className="bg-gray-900 text-white p-4 rounded text-sm">
                {`git clone freelancesafe
cd freelancesafe/cli
pip install -e .`}
              </pre>
            </div>
            <div className="bg-paper p-8 rounded-lg elevation-1 dark:bg-dark-paper dark:elevation-1">
              <h3 className="text-xl font-bold mb-4">Web Setup 🌐</h3>
              <pre className="bg-gray-900 text-white p-4 rounded text-sm">
                {`cd freelancesafe/src
pnpm install
pnpm dev`}
              </pre>
            </div>
            <div className="bg-paper p-8 rounded-lg elevation-1 dark:bg-dark-paper dark:elevation-1">
              <h3 className="text-xl font-bold mb-4">Mobile Setup 📱</h3>
              <pre className="bg-gray-900 text-white p-4 rounded text-sm">
                {`cd freelancesafe/apps
flutter pub get
flutter run`}
              </pre>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/docs" className="btn btn-primary">
              View Full Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Download Apps Section */}
      <section className="section bg-paper dark:bg-dark-paper">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { platform: 'iOS', image: '/app-store.png' },
              { platform: 'Android', image: '/play-store.png' }
            ].map((app) => (
              <div key={app.platform} className="relative">
                <div className="blur-overlay absolute inset-0 flex items-center justify-center">
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
                <Image
                  src={app.image}
                  alt={`Download on ${app.platform}`}
                  width={200}
                  height={60}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Stats Section */}
      <section className="section bg-paper dark:bg-dark-paper">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Users', value: '10,000+' },
              { label: 'Total Transactions', value: '$5M+' },
              { label: 'Success Rate', value: '99.9%' },
              { label: 'Countries', value: '50+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-text-secondary dark:text-dark-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ThemeSwitcher />
    </div>
  );
};

export default HomePage;
