import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import Testimonials from "@/components/sections/testimonials";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-24 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business succeed online
          </p>
        </div>
        <ServicesGrid />
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent projects
            </p>
          </div>
          <PortfolioGrid />
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
