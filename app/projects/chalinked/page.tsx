import React from 'react';
import Link from 'next/link';

export default function LinkedPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter">
            <Link href="/linked">Linked</Link>
          </h1>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/linked/map" className="hover:text-blue-600 transition-colors">地図</Link>
            <Link href="https://your-sns-link.com" className="hover:text-blue-600 transition-colors">SNS</Link>
          </nav>
        </div>
      </header>

      <main className="relative flex-grow flex items-center justify-center overflow-hidden">
        {/* Background Video Container */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/chalinked/videos/sample.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text is readable over the video */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            ペダルの先を<em className="text-blue-400 not-italic">地図でつなぐ</em>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Linkedは、サイクリストのために作られた地図Webアプリです。
          </p>
          <Link href="/projects/chalinked/map">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg">
              今すぐ始める
            </button>
          </Link>
        </div>
      </main>

      {/* Footer using your existing component or the custom one below */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
        <p>© 2026 Linked | <Link href="/projects/chalinked/about" className="hover:underline">Linkedについて</Link></p>
      </footer>
    </div>
  );
}