import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "WiredWave",
  description: "WiredWave is a e-commerce platform tailored for headphone. This app seamlessly integrates captivating design with advanced functionality to redefine the online headphone shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark">
        <StateContext>
          <Toaster position="top-center" reverseOrder={false} />
          {/* <div id="search-portal"></div> */}
          <div id="shopping-cart-portal"></div>
          <Navbar />
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
