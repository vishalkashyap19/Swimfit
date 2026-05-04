import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = inquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, program, batchTime } = result.data;

    await resend.emails.send({
      from: "swimfit <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "info@swimfit.com",
      reply_to: email,
      subject: `[Batch Inquiry] ${program} — ${name}`,
      html: `
        <h2>New Batch Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Program:</strong> ${program}</p>
        <p><strong>Batch Time:</strong> ${batchTime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
