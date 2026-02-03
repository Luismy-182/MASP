import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom';
function MLayout() {
  return (
    <>
        <Header />
        <main className='container mx-auto'>
            <Outlet></Outlet>
        </main>
        <Footer />
    </>
  )
}

export default MLayout