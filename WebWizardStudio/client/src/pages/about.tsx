import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">About WayWeb</h1>
        <p className="text-xl text-muted-foreground">
          We are a passionate team of designers and developers dedicated to creating
          exceptional digital experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
            alt="Our Team"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            At WayWeb, we believe in the power of exceptional design to
            transform businesses. Our mission is to help companies establish a
            strong digital presence through innovative web solutions.
          </p>
          <p className="text-muted-foreground">
            We combine creativity with technical expertise to deliver websites that
            not only look stunning but also drive real business results.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We stay ahead of the curve with the latest web technologies and design trends.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              Every project is crafted with attention to detail and commitment to excellence.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-2">Results</h3>
            <p className="text-muted-foreground">
              We focus on creating solutions that deliver measurable business outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
