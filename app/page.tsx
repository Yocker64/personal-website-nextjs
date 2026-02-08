import Image from "next/image";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import { posts} from "@/posts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      
      {/* Hero section */}
      <main className="flex-grow flex items-center justify-center px-6 py-10 md:py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hello there!
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
              Mario here.
            </h2>
            
            <div className="mt-8 space-y-2">
              <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                Data scientist & opensource enthusiast
              </h3>
              <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                I'm glad you're visiting my piece of the internet
              </h3>
              <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                You may be interested in checking my...
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
              <Link href="/projects">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md">
                  Projects
                </button>
              </Link>
              <Link href="/books">
                <button className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium px-8 py-3 rounded-lg transition-colors shadow-md">
                  Book summaries
                </button>
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/5]">
              <Image 
                src="/images/hero.jpeg"
                alt="Mario - Hero Image"
                fill
                className="rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </main>
      <SocialLinks/>
      <InfiniteCarousel items={posts} basePath="blog " />
      <Footer/>
    </div>
  );
}