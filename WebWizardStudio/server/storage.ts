import {
  type PortfolioItem,
  type Contact,
  type Testimonial,
  type InsertPortfolioItem,
  type InsertContact,
  type InsertTestimonial,
} from "@shared/schema";

export interface IStorage {
  getPortfolioItems(): Promise<PortfolioItem[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured online shopping experience",
      imageUrl: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      liveUrl: "https://example.com",
      tags: ["E-commerce", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Professional Portfolio",
      description: "Sleek portfolio for a creative agency",
      imageUrl: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
      liveUrl: "https://example.com",
      tags: ["Portfolio", "Design", "Animation"],
    },
    {
      id: 3,
      title: "Restaurant Booking System",
      description: "Interactive restaurant reservation platform",
      imageUrl: "https://images.unsplash.com/photo-1487611459768-bd414656ea10",
      liveUrl: "https://example.com",
      tags: ["Booking", "UX/UI", "Frontend"],
    },
  ];

  private testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovators",
      content: "Pixel Perfect transformed our digital presence with their exceptional design work.",
      imageUrl: "https://images.unsplash.com/photo-1739292774739-ee38cd9a5735",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Growth Startup",
      content: "The team's attention to detail and creative solutions exceeded our expectations.",
      imageUrl: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7",
    },
    {
      id: 3,
      name: "Emily Davis",
      company: "Creative Co",
      content: "Working with Pixel Perfect was a game-changer for our brand's online presence.",
      imageUrl: "https://images.unsplash.com/photo-1579389082978-de4aece6f446",
    },
  ];

  private contacts: Contact[] = [];
  private nextId = 1;

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return this.portfolioItems;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact = { ...contact, id: this.nextId++ };
    this.contacts.push(newContact);
    return newContact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }
}

export const storage = new MemStorage();
