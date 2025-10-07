import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message, serviceType } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Create transporter (using Gmail as example - you can use any SMTP service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, // Your email
        pass: process.env.SMTP_PASSWORD, // Your app password
      },
    });

    // Email content for Vacei team
    const teamEmailContent = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_EMAIL || 'info@vacei.com', // Where to send inquiries
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00AA00, #90EE90); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background: white;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr style="background: #f5f5f5;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #00AA00;">${email}</a></td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
              </tr>
              <tr style="background: #f5f5f5;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
              </tr>
              <tr style="background: white;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Service Interest:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${serviceType || 'Not specified'}</td>
              </tr>
              <tr style="background: #f5f5f5;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${subject}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin-top: 30px;">Message</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00AA00;">
              <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #00AA00;">
              <h4 style="margin: 0 0 10px 0; color: #00AA00;">Next Steps</h4>
              <p style="margin: 0; color: #555;">
                Please respond to this inquiry within 24 hours as per our service guarantee.
                <br><br>
                <strong>Reply directly to:</strong> <a href="mailto:${email}" style="color: #00AA00;">${email}</a>
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #888; font-size: 12px;">
              <p>This message was sent from the Vacei contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply email for the customer
    const customerEmailContent = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank you for contacting Vacei - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00AA00, #90EE90); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You, ${name}!</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to Vacei! We're excited to learn more about your accounting and audit needs.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00AA00;">
              <h3 style="margin: 0 0 15px 0; color: #333;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li style="margin-bottom: 8px;">Our team will review your inquiry within 24 hours</li>
                <li style="margin-bottom: 8px;">We'll prepare a personalized response tailored to your needs</li>
                <li style="margin-bottom: 8px;">If appropriate, we'll schedule a free consultation call</li>
                <li>We'll provide you with a customized proposal and timeline</li>
              </ul>
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin: 0 0 10px 0; color: #00AA00;">24-Hour Response Guarantee</h3>
              <p style="margin: 0; color: #555;">
                We pride ourselves on quick response times. You'll hear from us within 24 hours, guaranteed.
              </p>
            </div>
            
            <div style="margin-top: 30px;">
              <h3 style="color: #333; margin-bottom: 15px;">In the meantime, explore:</h3>
              <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                <a href="https://vacei.com/features" style="display: inline-block; padding: 10px 20px; background: #00AA00; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Our Services</a>
                <a href="https://vacei.com/wizard-flow" style="display: inline-block; padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Take Our Assessment</a>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="margin: 0; color: #888; font-size: 14px;">
                <strong>Vacei Audit</strong><br>
                Licensed Audit & Accounting Firm<br>
                Malta Registration: AB/2/22/01<br><br>
                Email: info@vacei.com | Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(teamEmailContent);
    await transporter.sendMail(customerEmailContent);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
