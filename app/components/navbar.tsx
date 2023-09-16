'use client'

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);
  
    return (
      <nav className={`z-50 w-full p-4 transition-all duration-300 ${scrolled ? 'bg-skyegg-orange' : 'md:bg-transparent bg-skyegg-orange'} md:rounded-bl-3xl md:rounded-br-3xl md:fixed md:top-0 md:left-0`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold mx-auto md:mx-0 text-center">Sky Egg Technologies LLC</Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="/about" className="text-white hover:underline">Home</Link>
            <Link href="/about" className="text-white hover:underline">About</Link>
            <Link href="/services" className="text-white hover:underline">Services</Link>
            <Link href="/contact" className="text-white hover:underline">Contact</Link>
          </div>
        </div>
        <div className="mt-4 flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="mx-auto text-white focus:outline-none">
            <div className="rounded w-6 h-1 bg-white mb-1"></div>
            <div className="rounded w-6 h-1 bg-white mb-1"></div>
            <div className="rounded w-6 h-1 bg-white"></div>
          </button>
        </div>
        {menuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block text-white mb-2">Home</Link>
          <Link href="/about" className="block text-white mb-2">About</Link>
          <Link href="/services" className="block text-white mb-2">Services</Link>
          <Link href="/contact" className="block text-white">Contact</Link>
        </div>
      )}
      </nav>
    );
  }
  