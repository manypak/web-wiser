import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Crafting Digital Excellence for Your Business
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your online presence with our expert web design and development services.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 10 0 L 0 0 0 10" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
