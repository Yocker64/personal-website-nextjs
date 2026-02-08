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
      title: "Optimizing Next.js Applications for Maximum Performance",
      slug: "chalinked",
      author: "David Kim",
      date: "2024-04-05",
      category: "Performance",
      thumbnail: "/images/thumbnails/nextjs-optimizing.jpg",
    },
    
  ];
  