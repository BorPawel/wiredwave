import React from 'react';
import Head from 'next/head';

// import Navbar from './Navbar';
// import Footer from './Footer';

import '../../styles/globals.css'

import Navbar from '../navbar/Navbar';

export default function Layout({ children }) {
  return (
   <div className="bg-dark min-h-screen text-white p-3">
    <Head>
      <title>WiredWave</title>
    </Head>
    <header>
     <Navbar />
    </header>
    <main className="m-auto w-full max-w-[1400px]">
      {children}
    </main>
    {/* <footer>Footer</footer> */}
   </div>
  )
}
