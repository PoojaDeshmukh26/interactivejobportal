import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    {/* layout will do not change navbar and Footer content  but changes inner content with outlet  */}
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  );
};

export default Layout;