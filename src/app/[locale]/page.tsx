import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <div className="scanlines scroll-snap-type-y-mandatory">
      <Hero />
      <FeaturedProjects />
      <Skills />
    </div>
  );
}
