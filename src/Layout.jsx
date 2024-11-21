import React from 'react'
import { BigFooter, Footer, Header } from './components/index';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className='pb-16 w-full overflow-hidden'>
      <Header />
      <Outlet />
      <BigFooter />
      <Footer />
    </div>
  )
}

export default Layout
