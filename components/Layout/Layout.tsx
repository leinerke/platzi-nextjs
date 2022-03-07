import React from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <div className="container mx-auto px-4">
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
