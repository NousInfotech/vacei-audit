import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      persona, 
      selectedServices, 
      scaleInfo, 
      contactInfo, 
      additionalDetails 
    } = body;

    // Validate required fields
    if (!persona || !selectedServices || !scaleInfo || !contactInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { fullName, email, company, phone, country } = contactInfo;

    // Validate essential contact fields
    if (!fullName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required contact information' },
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

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content for Vacei team
    const teamEmailContent = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_EMAIL || 'info@vacei.com',
      subject: `New Wizard Flow Submission: ${persona === 'business' ? 'Business Owner' : 'Accounting/Audit Firm'} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00AA00, #90EE90); padding: 25px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 24px;">New Wizard Flow Submission</h1>
            <p style="color: white; margin: 5px 0 0 0; text-align: center; opacity: 0.9;">Personalized onboarding completed</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            
            <!-- Persona & Services Section -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #00AA00;">
              <h2 style="color: #333; margin-top: 0; margin-bottom: 15px;">Client Profile</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Client Type:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">
                    <span style="background: #00AA00; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      ${persona === 'business' ? 'Business Owner' : 'Accounting/Audit Firm'}
                    </span>
                  </td>
                </tr>
                <tr style="background: white;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Services Interest:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${selectedServices.join(', ')}</td>
                </tr>
                <tr style="background: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Scale/Volume:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${scaleInfo}</td>
                </tr>
              </table>
            </div>

            <!-- Contact Information -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #00AA00;">
              <h2 style="color: #333; margin-top: 0; margin-bottom: 15px;">Contact Information</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
                </tr>
                <tr style="background: white;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #00AA00;">${email}</a></td>
                </tr>
                <tr style="background: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${company}</td>
                </tr>
                <tr style="background: white;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
                </tr>
                <tr style="background: #f8f9fa;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Country:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${country || 'Not provided'}</td>
                </tr>
              </table>
            </div>

            ${additionalDetails ? `
            <!-- Additional Details -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #00AA00;">
              <h2 style="color: #333; margin-top: 0; margin-bottom: 15px;">Additional Information</h2>
              
              ${additionalDetails.currentSoftware ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Current Software:</strong>
                <p style="margin: 5px 0 0 0; color: #666; background: #f8f9fa; padding: 10px; border-radius: 4px;">${additionalDetails.currentSoftware}</p>
              </div>
              ` : ''}
              
              ${additionalDetails.timeline ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Timeline:</strong>
                <p style="margin: 5px 0 0 0; color: #666; background: #f8f9fa; padding: 10px; border-radius: 4px;">${additionalDetails.timeline}</p>
              </div>
              ` : ''}
              
              ${additionalDetails.painPoints ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Pain Points:</strong>
                <p style="margin: 5px 0 0 0; color: #666; background: #f8f9fa; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${additionalDetails.painPoints}</p>
              </div>
              ` : ''}
              
              ${additionalDetails.requirements ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Special Requirements:</strong>
                <p style="margin: 5px 0 0 0; color: #666; background: #f8f9fa; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${additionalDetails.requirements}</p>
              </div>
              ` : ''}
            </div>
            ` : ''}

            <!-- Next Steps -->
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 15px 0; color: #00AA00;">Next Steps</h3>
              <ol style="margin: 0; padding-left: 20px; color: #555;">
                <li style="margin-bottom: 8px;">Review this wizard submission and prepare personalized demo</li>
                <li style="margin-bottom: 8px;">Schedule a call with the client within 24 hours</li>
                <li style="margin-bottom: 8px;">Prepare customized proposal based on their needs</li>
                <li>Follow up with demo scheduling and next steps</li>
              </ol>
              
              <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #00AA00;">
                <p style="margin: 0; color: #555;">
                  <strong>Priority:</strong> ${persona === 'business' ? 'Business Lead' : 'Firm Partnership'} 
                  | <strong>Services:</strong> ${selectedServices.join(', ')}
                </p>
              </div>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #888; font-size: 12px;">
              <p>Wizard submission received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply email for the customer
    const customerEmailContent = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank you for completing our wizard! Your personalized demo is being prepared',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00AA00, #90EE90); padding: 25px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Wizard Complete! 🎉</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Hi ${fullName}, we're preparing your personalized demo</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for completing our personalized onboarding wizard! Based on your responses, we're already preparing a customized demo that's perfectly tailored to your ${persona === 'business' ? 'business needs' : 'firm requirements'}.
            </p>
            
            <!-- Summary of their submission -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00AA00;">
              <h3 style="margin: 0 0 15px 0; color: #333;">Your Wizard Summary</h3>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li style="margin-bottom: 8px;"><strong>Client Type:</strong> ${persona === 'business' ? 'Business Owner' : 'Accounting/Audit Firm'}</li>
                <li style="margin-bottom: 8px;"><strong>Services Interest:</strong> ${selectedServices.join(', ')}</li>
                <li style="margin-bottom: 8px;"><strong>Scale:</strong> ${scaleInfo}</li>
                <li style="margin-bottom: 8px;"><strong>Company:</strong> ${company}</li>
              </ul>
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 15px 0; color: #00AA00;">What happens next?</h3>
              <ol style="margin: 0; padding-left: 20px; color: #555;">
                <li style="margin-bottom: 8px;">Our team reviews your wizard responses (within 2 hours)</li>
                <li style="margin-bottom: 8px;">We prepare a personalized demo showcasing relevant features</li>
                <li style="margin-bottom: 8px;">We contact you to schedule your custom demo call</li>
                <li style="margin-bottom: 8px;">You receive a tailored proposal based on your specific needs</li>
                <li>We guide you through the next steps to get started</li>
              </ol>
            </div>
            
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <h3 style="margin: 0 0 10px 0; color: #856404;">⏰ Priority Response</h3>
              <p style="margin: 0; color: #856404;">
                Since you've completed our detailed wizard, you're now in our priority queue. 
                Expect to hear from us within 4-6 hours with demo scheduling options.
              </p>
            </div>
            
            <div style="margin-top: 30px;">
              <h3 style="color: #333; margin-bottom: 15px;">While you wait, explore:</h3>
              <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                <a href="https://vacei.com/features" style="display: inline-block; padding: 12px 24px; background: #00AA00; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Our Features</a>
                <a href="https://vacei.com/pricing" style="display: inline-block; padding: 12px 24px; background: #333; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Pricing</a>
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
      { 
        message: 'Wizard flow submission received successfully',
        status: 'success'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing wizard flow submission:', error);
    return NextResponse.json(
      { error: 'Failed to process wizard flow submission' },
      { status: 500 }
    );
  }
}
