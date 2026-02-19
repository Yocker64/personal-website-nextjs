export interface IPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
}

export const posts: IPost[] = [
  {
    title: "Kansai Explorer Official Page",
    slug: "kansaiexplorer",
    author: "Mario Sandoval",
    date: "2025-11-05",
    category: "Tourism",
    thumbnail: "/images/thumbnails/kansaiexplorer.png",
  },
  {
    title: "How to take Smart Notes - Yocker64",
    slug: "how-to-take-smart-notes",
    author: "Sönke Ahrens",
    date: "2026-02-18",
    category: "Productivity, Learning",
    thumbnail: "/images/thumbnails/how-to-take-smart-notes.jpg",
  },
];
