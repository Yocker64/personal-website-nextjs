"use client";

import React, { useState } from 'react';
// Next.js uses 'next/link' for navigation and 'next/navigation' for hooks
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [visible, setVisible] = useState(false);
  
  // This hook replaces the "active" logic from NavLink
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'BOOK REVIEWS', href: '/books' },
    { name: 'ABOUT', href: '/about' },
  ];

  // Helper to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className='sticky top-0 left-0 right-0 z-50 flex items-center justify-between py-5 font-medium bg-white dark:bg-[#242535] px-4 sm:px-10 md:px-15 lg:px-40'>
      
      {/* Logo / Brand */}
      <Link href="/">
        <div className="cursor-pointer">
          <p className="text-xl font-bold">YOCKER64</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-400 hidden'/>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-400'>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={`p-3 transition-colors hover:text-white ${
              isActive(link.href) ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='flex items-center gap-6 sm:hidden'>
        <button 
          onClick={() => setVisible(true)} 
          className='text-2xl p-2'
          aria-label="Open Menu"
        >
          ☰ {/* Replace with your assets.menu_icon if preferred */}
        </button>
      </div>

      {/* Sidebar menu for small screens */}
      <div 
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 z-50 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex justify-end p-5">
          <button 
            onClick={() => setVisible(false)} 
            className="text-4xl"
            aria-label="Close Menu"
          >
            ×
          </button>
        </div>
        
        <ul className='flex flex-col items-center text-lg mt-10'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setVisible(false)}
              className={`w-full text-center py-6 border-b border-gray-100 ${
                isActive(link.href) ? 'bg-gray-50 font-bold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;  