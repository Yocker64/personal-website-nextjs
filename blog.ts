export interface IPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    category: string;
    thumbnail: string;
  }
  
  export const blog: IPost[] = [
    {
      title: "How to take Smart Notes - Yocker64",
      slug: "how-to-take-smart-notes",
      author: "Sönke Ahrens",
      date: "2026-02-18",
      category: "Productivity, Learning",
      thumbnail: "/images/thumbnails/how-to-take-smart-notes.jpg",
    },
  ];
  