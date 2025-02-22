import React from 'react';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-paper p-8 rounded-lg elevation-2 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-text">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-text">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-background border border-text/20 text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 text-text">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-background border border-text/20 text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-text/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-paper text-text/60">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="btn btn-outline w-full">
            Connect Wallet
          </button>
        </div>
        
        <p className="mt-4 text-center text-text/80">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-primary hover:text-primary-dark">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
