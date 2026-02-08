import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      {/* Increased height and scale for a more "massive" feel */}
      <main className="relative flex-grow flex flex-col items-center justify-center px-6 min-h-[80vh] overflow-hidden">
        
        {/* Background with a subtle zoom/parallax feel */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          }}
        >
          {/* Heavier vignette for depth */}
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-[10rem] md:text-[15rem] font-black text-white/10 select-none leading-none">
            404
          </h1>
          
          <div className="mt-[-60px] md:mt-[-100px]">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              Lost in the Multiverse
            </h2>
            
            <div className="space-y-4">
                <p className="text-xl md:text-2xl text-blue-300 font-medium">
                  Page not found in this Universe
                </p>
                <p className="text-lg md:text-xl text-gray-400 italic max-w-xl mx-auto leading-relaxed">
                  Somewhere in a parallel universe, your alternative self actually found what they were looking for. 
                  <span className="block mt-2 font-semibold not-italic text-gray-200">Lucky them.</span>
                </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="rounded-full bg-white text-black px-10 py-4 text-sm font-bold hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Back to C-137
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-xl px-10 py-4 text-sm font-bold hover:bg-white/10 transition-all border-dashed"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}