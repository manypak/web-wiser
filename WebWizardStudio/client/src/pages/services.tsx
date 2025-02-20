import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesGrid from "@/components/sections/services-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Custom Website Design",
  "Mobile-First Development",
  "E-commerce Solutions",
  "Content Management Systems",
  "Performance Optimization",
  "SEO & Analytics",
  "Website Maintenance",
  "Security Updates",
];

const processes = [
  {
    title: "Discovery",
    description: "We analyze your business needs and target audience to create a tailored strategy.",
    image: "https://images.unsplash.com/photo-1590905652146-8e169292f5de",
  },
  {
    title: "Design",
    description: "Our team creates stunning, user-friendly designs that align with your brand.",
    image: "https://images.unsplash.com/photo-1590905666454-d24131c16f3e",
  },
  {
    title: "Development",
    description: "We build your website using the latest technologies and best practices.",
    image: "https://images.unsplash.com/photo-1667707961991-c0f63a63cfb6",
  },
  {
    title: "Launch",
    description: "Your website goes live with comprehensive testing and optimization.",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-muted/20 py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer comprehensive web solutions to help your business thrive in the digital world
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web design and development services tailored to your needs
          </p>
        </div>
        <ServicesGrid />
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground">
              We combine creativity with technical expertise to deliver websites
              that not only look stunning but also drive real business results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/contact">
              <Button size="lg">Start Your Project</Button>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Web Design Process"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
