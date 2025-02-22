import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>FreelanceSafe</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 FreelanceSafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
