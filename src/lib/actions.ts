"use server";

import { contactSchema, inquirySchema, bookingSchema } from "./schemas";
import { Resend } from "resend";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_EMAIL ?? "info@swimfit.com";

export async function sendContactEmail(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { name, email, subject, message, phone } = result.data;

  try {
    // Send email and save to Firebase concurrently
    await Promise.all([
      resend.emails.send({
        from: "swimfit Contact <onboarding@resend.dev>",
        to: TO,
        reply_to: email,
        subject: `[Contact] ${subject} — ${name}`,
        html: `
          <h2>New contact from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
      }),
      addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        subject,
        message,
        createdAt: serverTimestamp()
      })
    ]);
    return { success: true };
  } catch (error) {
    console.error("Error saving contact:", error);
    return { success: false, error: { _form: ["Failed to send message. Please try again."] } };
  }
}

export async function sendInquiryEmail(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    program: formData.get("program"),
    batchTime: formData.get("batchTime"),
  };

  const result = inquirySchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { name, email, phone, program, batchTime } = result.data;

  try {
    await resend.emails.send({
      from: "swimfit Inquiry <onboarding@resend.dev>",
      to: TO,
      reply_to: email,
      subject: `[Inquiry] ${program} — ${name}`,
      html: `
        <h2>New batch inquiry from ${name}</h2>
        <p><strong>Program:</strong> ${program}</p>
        <p><strong>Batch:</strong> ${batchTime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });
    return { success: true };
  } catch {
    return { success: false, error: { _form: ["Failed to send inquiry."] } };
  }
}

export async function sendBookingEmail(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    package: formData.get("package"),
    date: formData.get("date"),
    guests: formData.get("guests"),
    message: formData.get("message"),
  };

  const result = bookingSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const d = result.data;

  try {
    await resend.emails.send({
      from: "swimfit Booking <onboarding@resend.dev>",
      to: TO,
      reply_to: d.email,
      subject: `[Pool Party] ${d.package} — ${d.name}`,
      html: `
        <h2>Pool Party Booking from ${d.name}</h2>
        <p><strong>Package:</strong> ${d.package}</p>
        <p><strong>Date:</strong> ${d.date}</p>
        <p><strong>Guests:</strong> ${d.guests}</p>
        <p><strong>Email:</strong> ${d.email}</p>
        <p><strong>Phone:</strong> ${d.phone}</p>
        ${d.message ? `<p><strong>Notes:</strong> ${d.message}</p>` : ""}
      `,
    });
    return { success: true };
  } catch {
    return { success: false, error: { _form: ["Failed to send booking."] } };
  }
}
