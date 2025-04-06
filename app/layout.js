import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./globals.css";
import "remixicon/fonts/remixicon.css"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nitesh Portfolio",
  description: "Welcome to my personal web portfolio! This site showcases my journey as a Full Stack Web Developer with a passion for building clean, responsive, and dynamic web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent shadow-md shadow-md">
        <Navbar/>
      </div>
        {children}
      <div className="bg-black">
      <Footer/>
      </div>
      </body>
    </html>
  );
}
