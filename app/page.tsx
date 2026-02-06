import Image from "next/image";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* Hero section */}
      <div className='flex items-center justify-around my-10'>
        <div className=''>
        <h1 className='text-6xl'>Hello there!</h1>
        <h2 className='text-5xl'>Mario here.</h2>
        <br />
        <h3 className='text-2xl'>Data scientist & opensource enthusiast</h3>
        <br />
        <h3 className='text-2xl'> I'm glad your visiting my piece of the internet</h3>
        <h3 className='text-2xl'>You may be interested in checking my...</h3>
        <br />
        <div className='flex items-center justify-evenly p-10'>
         
        <button className='bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors'>
  Projects
</button>

<button className='bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium px-6 py-3 rounded-lg transition-colors'>
  Book summaries
</button>
        </div>
        </div>
        <div>
          <Image src="/images/hero.jpeg"
              alt="theme toggle"
              width={480}
              height={600}
  className="rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-lg"

              priority/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
