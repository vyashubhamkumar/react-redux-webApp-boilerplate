import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

export default ({children}) => (
  <div className="">
    <Header />
    {children}
    <Footer />
  </div>
)