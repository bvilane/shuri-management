import { NextRequest } from 'next/server';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Set Next.js config flags
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Define interface for newsletter form data
interface NewsletterData {
  firstName: string;
  email: string;
}

/**
 * POST handler for newsletter subscriptions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = (await request.json()) as NewsletterData;

    // Basic validation for required fields
    const requiredFields = ['firstName', 'email'] as const;
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return Response.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Create response object to return later
    const successResponse = {
      success: true,
      message: 'Newsletter subscription received successfully',
    };

    // Process form submission in the background
    await processNewsletterSubscription(data);

    // Return immediate success to the client
    return Response.json(successResponse);
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);

    // Return error response
    return Response.json({ success: false, error }, { status: 500 });
  }
}

/**
 * OPTIONS handler for CORS support
 */
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

/**
 * Process newsletter subscription asynchronously (doesn't block response)
 */
async function processNewsletterSubscription(data: NewsletterData) {
  try {
    let sheetSuccess = false;
    let emailSuccess = false;

    // Try to save to Google Sheets
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(
        process.env.GOOGLE_SHEET_ID!,
        serviceAccountAuth
      );

      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[2];
      const submissionDate = new Date().toISOString();

      const rowData = {
        submissionDate,
        firstName: data.firstName,
        email: data.email,
      };

      await sheet.addRow(rowData);
      sheetSuccess = true;
    } catch (sheetError) {
      console.error(
        'Error saving newsletter subscription to Google Sheets:',
        sheetError
      );
    }

    // Try to send email notification
    try {
      const mailer = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await mailer.sendMail({
        from: `"${process.env.SMTP_NAME}" <${process.env.SMTP_MAIL}>`,
        to: process.env.RECIPIENT_EMAIL || 'theshuricollection@gmail.com',
        replyTo: process.env.SMTP_REPLY_TO,
        subject: 'New Shuri Management Newsletter Subscription',
        text: `
          New Newsletter Subscription from Shuri Management Website
          
          First Name: ${data.firstName}
          Email: ${data.email}
          
          Submitted on: ${new Date().toLocaleString()}
        `,
        html: `
          <h2>New Newsletter Subscription from Shuri Management Website</h2>
          
          <p><strong>First Name:</strong> ${data.firstName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `,
      });

      emailSuccess = true;
    } catch (emailError) {
      console.error(
        'Error sending email notification for newsletter:',
        emailError
      );
    }

    console.log(
      `Newsletter processing results: Sheets: ${sheetSuccess}, Email: ${emailSuccess}`
    );
    return { sheetSuccess, emailSuccess };
  } catch (error) {
    console.error('Error in newsletter background processing:', error);
    throw error;
  }
}
