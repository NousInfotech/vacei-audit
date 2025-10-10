# Environment Variables Setup

To enable email functionality for both the Contact Form and Wizard Flow, you need to set up environment variables.

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Email Configuration for Contact Form and Wizard Flow
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@vacei.com
```

## Setup Instructions

### 1. Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password (not your regular Gmail password) in `SMTP_PASSWORD`

### 2. Alternative SMTP Providers
You can use any SMTP provider by modifying the transporter configuration in the API routes:

**SendGrid:**
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

**Mailgun:**
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASSWORD,
  },
});
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_EMAIL` | Your sending email address | `your-email@gmail.com` |
| `SMTP_PASSWORD` | Your email password/app password | `your-app-password` |
| `CONTACT_EMAIL` | Where to send form submissions | `info@vacei.com` |

## Testing

After setting up the environment variables:

1. Restart your development server
2. Test the contact form at `/contact`
3. Test the wizard flow at `/wizard-flow`

Both forms will send emails to the `CONTACT_EMAIL` address and auto-reply to the user.
