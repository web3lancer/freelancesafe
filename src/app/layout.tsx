import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>FreelanceSafe</title>
      </head>
      <body>
        <header>
          <h1>FreelanceSafe</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2023 FreelanceSafe. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
