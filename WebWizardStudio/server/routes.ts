import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/portfolio", async (_req, res) => {
    const items = await storage.getPortfolioItems();
    res.json(items);
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.post("/api/contact", async (req, res) => {
    const result = insertContactSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ error: "Invalid contact form data" });
    }

    const contact = await storage.createContact(result.data);
    res.status(201).json(contact);
  });

  const httpServer = createServer(app);
  return httpServer;
}
