import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@shared/schema";

export default function PortfolioGrid() {
  const { data: items, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  if (isLoading || !items) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {item.liveUrl && (
              <CardFooter>
                <Button
                  variant="ghost"
                  className="gap-2"
                  onClick={() => window.open(item.liveUrl, "_blank")}
                >
                  View Live <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
