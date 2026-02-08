import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContentGrid from "@/components/ContentGrid";
import { projects } from "@/projects";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-6 py-10 md:px-10">
        <ContentGrid items={projects} basePath="projects" />
      </main>
      <Footer />
    </div>
  );
}