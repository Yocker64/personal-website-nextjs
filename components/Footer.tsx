import React from 'react'
import Link from 'next/link';

function Footer() {
    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'BLOG', href: '/blog' },
        { name: 'PROJECTS', href: '/projects' },
        { name: 'BOOK REVIEWS', href: '/books' },
        { name: 'ABOUT', href: '/about' },
    ];

    return (
        <footer className='text-gray-900 dark:text-gray-100 px-6 md:px-20 lg:px-40 border-t border-gray-200 dark:border-gray-800 mt-20'>
            {/* Grid layout: stacks on mobile, 3 columns on tablet/desktop */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_1fr_1fr] gap-10 py-12 text-sm'>
                
                {/* Brand Section */}
                <div className="flex flex-col gap-3">
                    <p className='text-2xl font-bold tracking-tight'>Yocker64</p>
                    <p className='text-gray-600 dark:text-gray-400 max-w-xs'>
                        Open Source enthusiast currently working as a data scientist.
                    </p>
                </div>

                {/* Navigation Section */}
                <div>
                    <p className='text-lg font-semibold mb-4'>Navigation</p>
                    <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-300'>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href}
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <p className='text-lg font-semibold mb-4'>Get in touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-300'>
                        <li>
                            <a href="mailto:mdyoc74@gmail.com" className="hover:underline">
                                mdyoc74@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-gray-100 dark:border-gray-900'>
                <p className='py-8 text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400'>
                    ©Yocker64 2026 — 
                    <span className="inline-flex gap-2 ml-1">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link> | 
                        <Link href='/terms' className="hover:underline">Terms</Link> | 
                        <Link href='/cookies' className="hover:underline">Cookies</Link> 
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer