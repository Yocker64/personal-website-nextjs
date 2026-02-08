import Image from "next/image";
import Link from "next/link";

// Define an interface so TypeScript (and you) knows what data is required
interface GridItem {
  slug: string;
  thumbnail: string;
  title: string;
  category: string;
  author: string;
  date: string;
}

interface ContentGridProps {
  items: GridItem[];
  basePath: string; // e.g., "blog", "projects", or "books"
}

export default function ContentGrid({ items, basePath }: ContentGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8 justify-center">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={`/${basePath}/${item.slug}`}
          className="group flex flex-col w-full max-w-[450px] mx-auto rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-lg"
        >
          <div className="h-52 w-full relative overflow-hidden">
            <Image
              src={item.thumbnail}
              alt={`${item.title} - thumbnail`}
              fill
              className="object-cover group-hover:scale-105 duration-500 transition-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <p className="text-xs uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold mb-3 w-fit px-2 py-1 rounded">
              {item.category}
            </p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h2>

            <div className="flex-grow mt-4" />

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.author}</span>
              <span>{item.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}