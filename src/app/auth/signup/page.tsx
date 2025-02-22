import React from 'react';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-2xl font-bold mb-6">Sign Up for FreelanceSafe</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>
        
        <div className="mt-4">
          <button className="btn btn-outline w-full">
            Connect Wallet
          </button>
        </div>
        
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
