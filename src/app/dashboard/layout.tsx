import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
