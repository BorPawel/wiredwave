import React from 'react';
import Head from 'next/head';

// import Navbar from './Navbar';
// import Footer from './Footer';

import '../styles/globals.css'

import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
   <div className="bg-[#181818] min-h-screen text-white">
    <Head>
      <title>WiredWave</title>
    </Head>
    <header>
     <Navbar />
    </header>
    <main>
      {children}
    </main>
    <footer>Footer</footer>
   </div>
  )
}
