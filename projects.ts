export interface IPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    category: string;
    thumbnail: string;
  }
  
  export const projects: IPost[] = [
    {
      title: "Chalinked",
      slug: "chalinked",
      author: "Mario Sandoval, Ivan Matusevich, Bat-Iredui Davaa",
      date: "2024-04-05",
      category: "Navigation, Maps, Bicycles",
      thumbnail: "/images/thumbnails/chalinked.png",
    },
    {
      title: "Kansai Explorer Official Page",
      slug: "kansaiexplorer",
      author: "Mario Sandoval",
      date: "2025-11-05",
      category: "Tourism",
      thumbnail: "/images/thumbnails/kansaiexplorer.png",
    },
    {
      title: "Why TypeScript Will Transform Your JavaScript Development",
      slug: "why-typescript-will-transform-your-javascript-development",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "TypeScript",
      thumbnail: "/images/thumbnails/typescript.jpg",
    },
    {
      title: "Optimizing Next.js Applications for Maximum Performance",
      slug: "chalinked",
      author: "David Kim",
      date: "2024-04-05",
      category: "Performance",
      thumbnail: "/images/thumbnails/nextjs-optimizing.jpg",
    },
    
  ];
  