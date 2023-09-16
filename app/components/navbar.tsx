'use client'

import Link from "next/link";
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import contactHref from '../util/contact'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

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
      <nav className={`z-50 drop-shadow-lg relative w-full p-4 transition-all duration-300 ${(scrolled || !isHomePage) ? 'bg-navbar' : 'md:bg-transparent bg-navbar'} rounded-b-xl ${!isHomePage ? 'rounded-b-xl' : 'md:fixed md:top-0 md:left-0'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold mx-auto md:mx-0 text-center">Sky Egg Technologies LLC</Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/about" className="text-white hover:underline">About</Link>
            <Link href="/services" className="text-white hover:underline">Services</Link>
            <Link href={contactHref} rel="noopener noreferrer" target="_blank"  className="text-white hover:underline">Contact</Link>
          </div>
        </div>
        <div className="mt-4 md:hidden flex items-center justify-center">
          <button aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)} className="mx-auto text-white focus:outline-none">
            <div className="rounded w-6 h-1 bg-white mb-1"></div>
            <div className="rounded w-6 h-1 bg-white mb-1"></div>
            <div className="rounded w-6 h-1 bg-white"></div>
          </button>
        </div>
        {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 text-center -mt-3 rounded-b-xl bg-navbar">
          <div className="py-2">
            <Link href="/" className="block text-white mb-2">Home</Link>
            <Link href="/about" className="block text-white mb-2">About</Link>
            <Link href="/services" className="block text-white mb-2">Services</Link>
            <Link href={contactHref} className="block text-white">Contact</Link>
          </div>
        </div>
      )}
      </nav>
    );
  }