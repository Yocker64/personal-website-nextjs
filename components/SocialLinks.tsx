"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Music, Youtube, Binoculars, Mail, Check } from "lucide-react";

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);
  const email = "mdyoc74@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialData = [
    { 
      name: "GitHub", 
      href: "https://github.com/yocker64", 
      icon: <Github size={50} strokeWidth={2} />, 
      hoverColor: "group-hover:text-[#333] dark:group-hover:text-white",
      username: 'Yocker64',
      subtitle: 'My latest projects',
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/your-profile", 
      icon: <Linkedin size={50} strokeWidth={2} />, 
      hoverColor: "group-hover:text-[#0077b5]",
      username: 'Mario David',
      subtitle: 'Professional network',
    },
    { 
      name: "Spotify", 
      href: "https://open.spotify.com/user/314a6pfu2avw5zdy6bvmy2cntvg4", 
      icon: <Music size={50} strokeWidth={2} />, 
      hoverColor: "group-hover:text-[#1DB954]",
      username: 'Yocker64',
      subtitle: 'Work playlists',
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@yocker64", 
      icon: <Youtube size={50} strokeWidth={2} />, 
      hoverColor: "group-hover:text-[#FF0000]",
      username: 'Yocker64',
      subtitle: 'Japan & Tech',
    },
    { 
      name: "Notion", 
      href: "https://future-ulna-469.notion.site/Jap-n-Paquete-completo-29fc3f4253db8039be40fe30e634fe14?pvs=74", 
      icon: <Binoculars size={50} strokeWidth={2} />, 
      hoverColor: "group-hover:text-black dark:group-hover:text-white",
      username: 'Hire me as a tour guide',
      subtitle: 'Japan Travel Itineraries',
    },
  ];

  return (
    <section className="px-6 py-12 flex flex-col items-center border-t border-gray-100 dark:border-gray-800">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
        Social & Networking
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 w-full max-w-7xl">
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            aria-label={social.name}
          >
            <div className={`text-gray-400 transition-colors duration-300 ${social.hoverColor} mb-4`}>
              {social.icon}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                {social.username}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {social.subtitle}
              </span>
            </div>
          </a>
        ))}

        {/* Email Section */}
        <div className="flex flex-col items-center">
          <button
            onClick={copyToClipboard}
            className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 relative"
            aria-label="Copy Email"
          >
            <div className={`mb-4 transition-colors duration-300 ${copied ? "text-green-500" : "text-gray-400 group-hover:text-blue-600"}`}>
              {copied ? <Check size={50} strokeWidth={2} /> : <Mail size={50} strokeWidth={2} />}
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                {copied ? "Copied!" : "Email Me"}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {email}
              </span>
            </div>

            {copied && (
              <span className="absolute -top-8 text-[10px] font-bold text-green-500 animate-bounce">
                SUCCESS
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;