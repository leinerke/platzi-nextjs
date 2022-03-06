import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
    <footer>This is the footer</footer>
  </>
);

export default Layout;
