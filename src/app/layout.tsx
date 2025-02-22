import React from 'react';
import './globals.css';

export const metadata = {
  title: 'FreelanceSafe - Secure Freelance Payments',
  description: 'Secure platform for freelance payments and escrow management',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
