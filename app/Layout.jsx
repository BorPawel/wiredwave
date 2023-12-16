import React, { useEffect } from 'react';
import Head from 'next/head';

// import Navbar from './Navbar';
// import Footer from './Footer';

import '@/styles/globals.css'

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Layout({ children }) {
  useEffect(() => {
    const main_container = document.querySelector('.main_container');
    const navbar = document.querySelector('nav');
    main_container.style.paddingTop = `${navbar.offsetHeight}px`

  },[])
  return (
   <div className="bg-dark min-h-screen text-white">
    <Head>
      <title>WiredWave</title>
      <script
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
    </Head>
    <header>
     <Navbar />
    </header>
    <main className="main_container m-auto w-full max-w-[1600px]">
      {children}
    </main>
  
    <Footer/>
   </div>
  )
}
