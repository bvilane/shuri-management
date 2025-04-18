import { NextRequest } from 'next/server';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Set Next.js config flags
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * POST handler for contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Create response object to return later
    const successResponse = {
      success: true,
      message: 'Form submission received successfully'
    };
    
    // Process form submission in the background
    processSubmission(data).catch(err => {
      console.error('Background submission processing error:', err);
    });
    
    // Return immediate success to the client
    return Response.json(successResponse);
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    // Return error response
    return Response.json(
      { success: false, error: 'Server error processing your request' },
      { status: 500 }
    );
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
 * Process form submission asynchronously (doesn't block response)
 */
async function processSubmission(data: any) {
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
      
      const sheet = doc.sheetsByIndex[0];
      const submissionDate = new Date().toISOString();
      
      await sheet.addRow({
        ...data,
        submissionDate,
      });
      
      sheetSuccess = true;
    } catch (sheetError) {
      console.error('Error saving to Google Sheets:', sheetError);
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
      
      await mailer.sendMail({
        from: process.env.SMTP_USERNAME,
        to: process.env.RECIPIENT_EMAIL || 'theshuricollection@gmail.com',
        subject: 'New Shuri Management Contact Form Submission',
        text: `
          New Contact Form Submission from Shuri Management Website
          
          Full Name: ${data.fullName || 'Not provided'}
          Email: ${data.email || 'Not provided'}
          Phone: ${data.phone || 'Not provided'}
          Country/Region: ${data.country || 'Not provided'}
          Lodge Type: ${data.lodgeType || 'Not specified'}
          Lodge Size: ${data.lodgeSize || 'Not specified'}
          Service Needed: ${data.serviceNeeded || 'Not specified'}
          
          Message:
          ${data.message || 'No message provided'}
          
          Submitted on: ${new Date().toLocaleString()}
        `,
        html: `
          <h2>New Contact Form Submission from Shuri Management Website</h2>
          
          <p><strong>Full Name:</strong> ${data.fullName || 'Not provided'}</p>
          <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Country/Region:</strong> ${data.country || 'Not provided'}</p>
          <p><strong>Lodge Type:</strong> ${data.lodgeType || 'Not specified'}</p>
          <p><strong>Lodge Size:</strong> ${data.lodgeSize || 'Not specified'}</p>
          <p><strong>Service Needed:</strong> ${data.serviceNeeded || 'Not specified'}</p>
          
          <p><strong>Message:</strong><br>
          ${(data.message || 'No message provided').replace(/\n/g, '<br>')}</p>
          
          <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        `,
      });
      
      emailSuccess = true;
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
    }
    
    console.log(`Form processing results: Sheets: ${sheetSuccess}, Email: ${emailSuccess}`);
    return { sheetSuccess, emailSuccess };
  } catch (error) {
    console.error('Error in background processing:', error);
    throw error;
  }
} 