import { NextRequest } from 'next/server';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Set Next.js config flags
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Define interface for lead form data
interface LeadFormData {
  fullName: string;
  email: string;
  whatsapp?: string;
  preferredContact?: string;
  lodgeName?: string;
  location?: string;
  biggestChallenge?: string;
  existingServices?: string;
  timeline?: string;
  areasOfInterest?: string[];
  areas?: {
    [key: string]: boolean;
  };
  [key: string]:
    | string
    | string[]
    | boolean
    | { [key: string]: boolean }
    | undefined;
}

/**
 * POST handler for lead form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = (await request.json()) as LeadFormData;

    // Basic validation for required fields
    const requiredFields = ['fullName', 'email'];
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
      message: 'Lead submission received successfully',
    };

    // Process form submission in the background
    await processLeadSubmission(data);

    // Return immediate success to the client
    return Response.json(successResponse);
  } catch (error) {
    console.error('Error processing lead form submission:', error);

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
 * Process lead submission asynchronously (doesn't block response)
 */
async function processLeadSubmission(data: LeadFormData) {
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

      const sheet = doc.sheetsByIndex[1];
      const submissionDate = new Date().toISOString();

      // Format areas of interest
      const areas = data.areas || {};
      const selectedAreas = Object.keys(areas)
        .filter((key) => areas[key] === true)
        .join(', ');

      // Prepare row data
      const rowData = {
        submissionDate,
        fullName: data.fullName,
        email: data.email,
        whatsapp: data.whatsapp || 'Not provided',
        preferredContact: data.preferredContact || 'email',
        lodgeName: data.lodgeName || 'Not provided',
        location: data.location || 'Not provided',
        biggestChallenge: data.biggestChallenge || 'Not provided',
        existingServices: data.existingServices || 'Not provided',
        timeline: data.timeline || 'Not provided',
        areasOfInterest: selectedAreas,
      };

      await sheet.addRow(rowData);
      sheetSuccess = true;
    } catch (sheetError) {
      console.error('Error saving lead to Google Sheets:', sheetError);
    }

    // Try to send email
    try {
      const mailer = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Format areas of interest for email
      const areas = data.areas || {};
      const selectedAreas = Object.keys(areas)
        .filter((key) => areas[key] === true)
        .join(', ');

      await mailer.sendMail({
        from: process.env.SMTP_USERNAME,
        to: process.env.RECIPIENT_EMAIL || 'theshuricollection@gmail.com',
        subject: 'New Shuri Management Lead Form Submission',
        text: `
          New Lead Form Submission from Shuri Management Website
          
          Full Name: ${data.fullName}
          Email: ${data.email}
          WhatsApp: ${data.whatsapp || 'Not provided'}
          Preferred Contact Method: ${data.preferredContact || 'email'}
          
          Lodge Name: ${data.lodgeName || 'Not provided'}
          Location: ${data.location || 'Not provided'}
          
          Areas of Interest: ${selectedAreas}
          
          Biggest Challenge: ${data.biggestChallenge || 'Not provided'}
          Existing Services: ${data.existingServices || 'Not provided'}
          Timeline: ${data.timeline || 'Not provided'}
          
          Submitted on: ${new Date().toLocaleString()}
        `,
        html: `
          <h2>New Lead Form Submission from Shuri Management Website</h2>
          
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>WhatsApp:</strong> ${data.whatsapp || 'Not provided'}</p>
          <p><strong>Preferred Contact Method:</strong> ${
            data.preferredContact || 'email'
          }</p>
          
          <p><strong>Lodge Name:</strong> ${
            data.lodgeName || 'Not provided'
          }</p>
          <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
          
          <p><strong>Areas of Interest:</strong> ${selectedAreas}</p>
          
          <p><strong>Biggest Challenge:</strong><br>
          ${(data.biggestChallenge || 'Not provided').replace(
            /\n/g,
            '<br>'
          )}</p>
          
          <p><strong>Existing Services:</strong><br>
          ${(data.existingServices || 'Not provided').replace(
            /\n/g,
            '<br>'
          )}</p>
          
          <p><strong>Timeline:</strong> ${data.timeline || 'Not provided'}</p>
          
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `,
      });

      emailSuccess = true;
    } catch (emailError) {
      console.error('Error sending lead email notification:', emailError);
    }

    console.log(
      `Lead form processing results: Sheets: ${sheetSuccess}, Email: ${emailSuccess}`
    );
    return { sheetSuccess, emailSuccess };
  } catch (error) {
    console.error('Error in lead form background processing:', error);
    throw error;
  }
}
