import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">WayWeb</h3>
            <p className="text-sm text-muted-foreground">
              Creating stunning digital experiences that drive results.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>Web Design</li>
              <li>Development</li>
              <li>SEO Optimization</li>
              <li>Maintenance</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <FaTwitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <FaLinkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <FaGithub className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © 2024 WayWeb. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
