import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { posts } from "@/posts";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow px-10 pt-6 md:p-10">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8 justify-center">
          {posts.map((p, idx) => (
            <Link
              key={idx}
              href={`/books/${p.slug}`}
              className="group flex flex-col w-full max-w-[450px] mx-auto rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="h-52 w-full relative overflow-hidden">
                <Image
                  src={p.thumbnail}
                  alt={`${p.title} - thumbnail`}
                  fill
                  className="object-cover group-hover:scale-105 duration-500 transition-transform"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Wrapper */}
              <div className="p-5 flex flex-col flex-grow">
                {/* category */}
                <p className="text-xs uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold mb-3 w-fit px-2 py-1 rounded">
                  {p.category}
                </p>

                {/* title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h2>

                {/* spacer to push footer down */}
                <div className="flex-grow mt-4" />

                {/* author and date */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{p.author}</span>
                  <span>{p.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}