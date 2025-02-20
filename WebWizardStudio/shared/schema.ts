import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  liveUrl: text("live_url"),
  tags: text("tags").array(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).omit({ id: true });
export const insertContactSchema = createInsertSchema(contacts).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });

export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
