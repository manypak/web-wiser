import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Code, Search, Settings } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: "Creating beautiful, intuitive designs that engage your audience",
    icon: Monitor,
  },
  {
    title: "Development",
    description: "Building robust and scalable web applications",
    icon: Code,
  },
  {
    title: "SEO",
    description: "Optimizing your site for maximum visibility",
    icon: Search,
  },
  {
    title: "Maintenance",
    description: "Keeping your website running smoothly and securely",
    icon: Settings,
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="border-2 transition-colors hover:border-primary">
          <CardHeader>
            <service.icon className="h-12 w-12 text-primary mb-4" />
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
