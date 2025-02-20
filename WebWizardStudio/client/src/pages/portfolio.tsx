import { motion } from "framer-motion";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div>
      <section className="bg-muted/20 py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of successful projects and see how we've helped
              businesses achieve their digital goals
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container">
        <Tabs defaultValue="all" className="w-full">
          <div className="text-center mb-12">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Design</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <PortfolioGrid />
          </TabsContent>
          
          <TabsContent value="web">
            <div className="text-center text-muted-foreground py-12">
              Web design projects coming soon...
            </div>
          </TabsContent>
          
          <TabsContent value="ecommerce">
            <div className="text-center text-muted-foreground py-12">
              E-commerce projects coming soon...
            </div>
          </TabsContent>
          
          <TabsContent value="branding">
            <div className="text-center text-muted-foreground py-12">
              Branding projects coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Contact us today to
            discuss your project requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
