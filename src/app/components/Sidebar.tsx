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
    <nav className="sidebar">
      <div className="mb-8">
        <h1 className="text-xl font-bold">FreelanceSafe</h1>
      </div>
      
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path} className="flex items-center p-2 hover:bg-gray-700 rounded">
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
