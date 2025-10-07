# Email Setup Instructions

## Contact Form Email Configuration

To enable the contact form email functionality, you need to configure your email settings:

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Email Configuration
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@vacei.com
```

### 2. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASSWORD`

### 3. Alternative Email Providers

If you want to use a different email provider, update the transporter configuration in `src/app/api/contact/route.ts`:

```typescript
// For Outlook/Hotmail
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// For custom SMTP
const transporter = nodemailer.createTransporter({
  host: 'smtp.yourprovider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});
```

### 4. Features Included

✅ **Professional HTML Emails**: Beautiful, responsive email templates
✅ **Auto-Reply**: Customers receive confirmation email
✅ **Team Notification**: Form submissions sent to your team
✅ **Form Validation**: Client and server-side validation
✅ **Error Handling**: Graceful error handling with user feedback
✅ **24-Hour Response Guarantee**: Mentioned in all communications

### 5. Email Templates

The system sends two emails:
1. **Team Email**: Detailed form submission with all customer information
2. **Customer Auto-Reply**: Professional confirmation with next steps

### 6. Security Notes

- Never commit `.env.local` to version control
- Use app passwords instead of regular passwords
- Consider using a dedicated email service for production

### 7. Testing

1. Fill out the contact form
2. Check your email for the team notification
3. Verify the customer received the auto-reply
4. Test error handling with invalid inputs

The contact form is now fully functional with professional email handling!
