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
      <nav className={`z-50 relative w-full p-4 transition-all duration-300 ${(scrolled || !isHomePage) ? 'bg-navbar' : 'lg:bg-transparent bg-navbar'} ${!isHomePage ? '' : 'lg:fixed lg:top-0 lg:left-0'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-normal text-lg font-bold mx-auto lg:mx-0 text-center">Sky Egg Technologies LLC</Link>
          <div className="space-x-6 hidden lg:flex">
            <Link href="/" className="text-normal hover:underline">Home</Link>
            <Link href="/about" className="text-normal hover:underline">About</Link>
            <Link href="/services" className="text-normal hover:underline">Services</Link>
            <Link href={contactHref} rel="noopener noreferrer" target="_blank"  className="text-normal hover:underline">Contact</Link>
          </div>
        </div>
        <div className="mt-4 lg:hidden flex items-center justify-center">
          <button aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)} className="mx-auto text-normal focus:outline-none">
            <div className="rounded w-6 h-1 bg-hamburger mb-1"></div>
            <div className="rounded w-6 h-1 bg-hamburger mb-1"></div>
            <div className="rounded w-6 h-1 bg-hamburger"></div>
          </button>
        </div>
        {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 text-center -mt-3 bg-navbar">
          <div className="py-2">
            <Link href="/" className="block text-normal mb-2">Home</Link>
            <Link href="/about" className="block text-normal mb-2">About</Link>
            <Link href="/services" className="block text-normal mb-2">Services</Link>
            <Link href={contactHref} className="block text-normal">Contact</Link>
          </div>
        </div>
      )}
      </nav>
    );
  }