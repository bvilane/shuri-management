# Form Submission Setup Instructions

This document explains how to set up the form submission system to send data to Google Sheets and email notifications.

## Prerequisites

1. Node.js 20.x (required by the project)
2. Google Cloud account with Google Sheets API enabled
3. SMTP email service for sending notifications

## Installation Steps

1. Install required npm packages:
   ```bash
   npm install google-auth-library google-spreadsheet nodemailer @types/nodemailer
   ```

2. Set up a Google Service Account:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Sheets API
   - Create a Service Account with "Editor" permissions
   - Create and download a JSON key for the service account
   - Extract the `client_email` and `private_key` from the JSON file

3. Create Google Sheets:
   - Create new Google Sheets for both the contact form and lead form (you can use the same sheet with different tabs if preferred)
   - Share the sheets with the service account email (with edit permissions)
   - Copy the Sheet IDs from the URLs (the long string between `/d/` and `/edit`)
   
   For the Contact Form sheet, set up the following columns in the first row:
   - fullName
   - email
   - phone
   - country
   - message
   - lodgeType
   - serviceNeeded
   - lodgeSize
   - submissionDate
   
   For the Lead Form sheet, set up the following columns in the first row:
   - submissionDate
   - fullName
   - email
   - whatsapp
   - preferredContact
   - lodgeName
   - location
   - biggestChallenge
   - existingServices
   - timeline
   - areasOfInterest

4. Configure email service:
   - You'll need an SMTP server with credentials
   - For Gmail, you might need to create an app password

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```
# Google Sheets API credentials
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@example.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id
LEAD_FORM_SHEET_ID=your-lead-form-sheet-id  # Optional, uses GOOGLE_SHEET_ID if not specified

# SMTP Email Configuration
SMTP_SERVER=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=your-email@example.com
SMTP_PASSWORD=your-email-password
RECIPIENT_EMAIL=theshuricollection@gmail.com
```

## Important Notes

1. Make sure to properly escape the private key, especially the newline characters
2. For production deployments (like Vercel), add these environment variables in the deployment settings
3. The API routes are set up at:
   - `/api/contact-form` - For the main contact form
   - `/api/lead-form` - For the lead generation form

## Testing the Forms

1. Fill out the contact form on the website
2. Use the "Book a Call" or similar CTA to trigger the lead form
3. Check your Google Sheets for the new entries
4. Check the recipient email for the notifications

If you encounter issues, check the server logs for error messages.

## Security Considerations

- Never commit your `.env` file to version control
- Ensure your Google Service Account has minimal necessary permissions
- Consider adding rate limiting to prevent abuse of the form submission endpoints 
