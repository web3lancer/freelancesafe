import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default HomePage;
