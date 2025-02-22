import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <header className="top-header">
          <h1>FreelanceSafe</h1>
          <div>
            <Link href="/auth/signin">
              <button className="btn btn-outline mr-2">Sign In</button>
            </Link>
            <Link href="/auth/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        </header>
        
        <main className="p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Secure Freelance Payments & Escrow Management
            </h1>
            <p className="text-xl mb-8">
              FreelanceSafe provides a secure platform for managing freelance payments
              with built-in escrow protection.
            </p>
            <Link href="/auth/signup">
              <button className="btn btn-primary text-lg px-8 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </main>
      </section>

      {/* Features Section */}
      <section className="section bg-paper">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Secure Payments', icon: '🔒', desc: 'Built-in escrow protection' },
              { title: 'Smart Contracts', icon: '📄', desc: 'Automated agreements' },
              { title: 'Cross-platform', icon: '🌐', desc: 'Web, mobile & CLI access' }
            ].map((feature) => (
              <div key={feature.title} className="p-6 elevation-1 rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="section bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Developer SDK</h2>
          <div className="bg-paper p-8 rounded-lg elevation-1">
            <pre className="bg-gray-900 text-white p-4 rounded">
              pip install freelancesafe-sdk
            </pre>
            <div className="mt-6 flex justify-center">
              <Link href="/docs" className="btn btn-primary">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download Apps Section */}
      <section className="section bg-paper">
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
    </div>
  );
};

export default HomePage;
