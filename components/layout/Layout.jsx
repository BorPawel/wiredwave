import React, { useEffect } from 'react';
import Head from 'next/head';

// import Navbar from './Navbar';
// import Footer from './Footer';

import '../../styles/globals.css'

import Navbar from '../navbar/Navbar';

export default function Layout({ children }) {
  useEffect(() => {
    const main_container = document.querySelector('.main_container');
    const navbar = document.querySelector('nav');
    main_container.style.marginTop = `${navbar.offsetHeight}px`

  },[])
  return (
   <div className="bg-dark min-h-screen text-white p-3 ">
    <Head>
      <title>WiredWave</title>
    </Head>
    <header>
     <Navbar />
    </header>
    <main className="main_container m-auto w-full max-w-[1400px]">
      {children}
    </main>
    {/* <footer>Footer</footer> */}
   </div>
  )
}
