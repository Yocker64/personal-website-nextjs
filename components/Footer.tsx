import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Music, Youtube, NotebookPen } from 'lucide-react';

const Footer = () => {
    
  const socialData = [
    { 
      name: "GitHub", 
      href: "https://github.com/yocker64", 
      icon: <Github size={50} strokeWidth={2} />, 
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/your-profile", 
      icon: <Linkedin size={50} strokeWidth={2} />, 
    },
    { 
      name: "Spotify", 
      href: "https://open.spotify.com/user/314a6pfu2avw5zdy6bvmy2cntvg4", 
      icon: <Music size={50} strokeWidth={2} />, 
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@yocker64", 
      icon: <Youtube size={50} strokeWidth={2} />, 
    },
    { 
      name: "Notion", 
      href: "https://future-ulna-469.notion.site/Jap-n-Paquete-completo-29fc3f4253db8039be40fe30e634fe14?pvs=74", 
      icon: <NotebookPen size={50} strokeWidth={2} />, 
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 duration-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Adjusted grid to 4 columns on large screens: Brand (2fr) | Social | Nav | Contact */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-12 text-sm'>
            
            {/* Brand Section - Expanded */}
            <div className="flex flex-col gap-4">
                <div>
                    <p className='text-2xl font-bold tracking-tight text-black dark:text-white'>Yocker64</p>
                    <p className='text-xs text-gray-500 dark:text-gray-500 mt-1'>
                        © {new Date().getFullYear()} Sandoval Mario. All rights reserved.
                    </p>
                </div>
                <div className='text-gray-600 dark:text-gray-400 max-w-sm space-y-3'>
                    <p>
                        Open Source enthusiast and Data Scientist bridging the gap between complex data and user-friendly web experiences.
                    </p>
                    <p>
                        Currently based in Kyoto, Japan. Exploring technology, culture, and the perfect cup of coffee.
                    </p>
                </div>
            </div>

            {/* Socials Section - Newly Added */}
            <div>
                <p className='text-lg font-semibold mb-4 text-black dark:text-white'>Follow Me</p>
                <ul className='flex flex-col gap-3 text-gray-600 dark:text-gray-300'>
                    {socialData.map((social) => (
                        <li key={social.name}>
                            <a 
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            >
                                {/* Rendering a smaller version of the icon for the footer list */}
                                <span className="text-gray-400 group-hover:text-current transition-colors">
                                    {React.cloneElement(social.icon as React.ReactElement)}
                                </span>
                                {social.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navigation Section */}
            <div>
                <p className='text-lg font-semibold mb-4 text-black dark:text-white'>Navigation</p>
                <ul className='flex flex-col gap-3 text-gray-600 dark:text-gray-300'>
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
                <p className='text-lg font-semibold mb-4 text-black dark:text-white'>Get in touch</p>
                <ul className='flex flex-col gap-3 text-gray-600 dark:text-gray-300'>
                    <li>
                        <a href="mailto:mdyoc74@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
                            mdyoc74@gmail.com
                        </a>
                    </li>
                    <li className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                        Available for freelance opportunities and tech consultations.
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;