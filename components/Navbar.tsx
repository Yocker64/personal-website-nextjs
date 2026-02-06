"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const links = [{ displayName: "Blog", herf: "/blog" }];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'BLOG', href: '/blog' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'BOOK REVIEWS', href: '/books' },
    { name: 'ABOUT', href: '/about' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className='sticky top-0 left-0 right-0 z-50 flex items-center justify-between py-5 font-medium bg-white dark:bg-[#242535] px-4 sm:px-10 md:px-15 lg:px-40 transition-colors duration-300'>
      
      {/* Logo / Brand */}
      <Link href="/">
        <div className="cursor-pointer">
          <p className="text-xl font-bold dark:text-white">YOCKER64</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-5">
        <ul className='hidden sm:flex gap-5 text-sm items-center'>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`p-3 transition-colors ${
                isActive(link.href) 
                  ? 'text-black dark:text-white font-semibold' 
                  : 'text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

        </ul>
        <button
          onClick={toggleTheme}
          className="focus:outline-none"
          aria-label="Toggle theme"
        >
          <Image
            src={theme === "light" ? "/light-toggle.svg" : "/dark-toggle.svg"}
            alt="theme toggle"
            width={48}
            height={28}
            priority
          />
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='flex items-center gap-6 sm:hidden'>
        <button 
          onClick={() => setVisible(true)} 
          className='text-2xl p-2 dark:text-white'
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>

      {/* Sidebar menu for small screens */}
      <div 
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-[#242535] transition-all duration-300 z-50 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex justify-end p-5">
          <button 
            onClick={() => setVisible(false)} 
            className="text-4xl dark:text-white"
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
              className={`w-full text-center py-6 border-b border-gray-100 dark:border-gray-800 dark:text-white ${
                isActive(link.href) ? 'bg-gray-50 dark:bg-gray-800 font-bold' : ''
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