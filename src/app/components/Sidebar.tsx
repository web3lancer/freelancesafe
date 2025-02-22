import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Contracts', path: '/dashboard/contracts', icon: '📄' },
    { label: 'Escrow', path: '/dashboard/escrow', icon: '🔒' },
    { label: 'Payments', path: '/dashboard/payments', icon: '💰' },
    { label: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
  ];

  return (
    <nav className="sidebar elevation-2">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold">FreelanceSafe</h1>
      </div>
      
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
            >
              <span className="mr-3">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
