import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5; margin-bottom: 20px;">New Contact Form Submission</h2>
        
        <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          ${phone ? `<p style="margin: 0; margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</p>` : ''}
        </div>
        
        <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px;">
          <h3 style="margin: 0 0 10px 0; color: #374151;">Message:</h3>
          <p style="margin: 0; white-space: pre-wrap; color: #4B5563;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
          <p style="margin: 0; font-size: 12px; color: #6B7280;">
            This message was sent from the contact form on your website.
          </p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Update this with your verified domain
      to: ['mohomedrifaz44@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
