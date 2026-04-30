import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const inquirySchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  program: z.string().min(1, "Program required"),
  batchTime: z.string().min(1, "Batch time required"),
});

export const bookingSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  package: z.string().min(1, "Package required"),
  date: z.string().min(1, "Date required"),
  guests: z.string().min(1, "Guest count required"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type InquiryFormData = z.infer<typeof inquirySchema>;
export type BookingFormData = z.infer<typeof bookingSchema>;
