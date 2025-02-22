'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav-header py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-default">
        FreelanceSafe
      </Link>
      
      <div className="flex gap-4 items-center">
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
  );
};

export default Header;
