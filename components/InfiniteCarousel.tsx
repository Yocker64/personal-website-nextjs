"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselItem {
  slug: string;
  thumbnail: string;
  title: string;
  category: string;
}

interface CarouselProps {
  items: CarouselItem[];
  basePath: string;
}

const InfiniteCarousel = ({ items, basePath }: CarouselProps) => {
  // Double the array to create the seamless infinite loop effect
  const doubledItems = [...items, ...items];

  return (
    <div className="w-full py-12 overflow-hidden bg-white dark:bg-transparent">
      {/* Container with gradient mask for "fade" effect on edges */}
      <div className="relative flex max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        
        <div className="flex w-max animate-infinite-scroll gap-8 pr-8">
          {doubledItems.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={`/${basePath}/${item.slug}`}
              className="relative w-[300px] md:w-[400px] flex-shrink-0 group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              {/* Image with subtle zoom on hover */}
              <div className="aspect-video w-full relative overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg md:text-xl line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;