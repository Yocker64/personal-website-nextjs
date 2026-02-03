import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const work_Sans = Work_Sans({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Yocker64",
  description: "Open Source enthusiast and data scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} antialiased bg-white dark:bg-[#242535] text-black dark:text-white mx-auto`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
        
      </body>
    </html>
  );
}
