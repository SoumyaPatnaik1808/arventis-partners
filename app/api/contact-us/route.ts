import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_hAMpwt8y_3yWAULKoA7V6rPPvgm6PQNAK');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organisation, email, phone, message, captchaToken } = body;

    if (!captchaToken) {
      return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Verify token with Google API
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is missing from environment variables');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success) {
      console.error('reCAPTCHA validation failed:', recaptchaJson);
      return NextResponse.json({ success: false, error: 'Invalid reCAPTCHA' }, { status: 400 });
    }

    // 1. Send email to internal team
    const internalHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 4px; background-color: #ffffff;">
        <div style="background-color: #000000; color: #ffffff; padding: 20px; text-align: center; border-radius: 4px 4px 0 0;">
          <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px;">ARVENTIS PARTNERS</h1>
          <p style="margin: 5px 0 0 0; font-style: italic; font-size: 12px; color: #0a0862;">New Client Mandate Enquiry</p>
        </div>
        <div style="padding: 20px; color: #000000; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Organisation:</td>
              <td style="padding: 8px 0;">${organisation || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #0a0862; border-radius: 2px;">
            <strong style="display: block; margin-bottom: 8px; color: #000000;">Enquiry Parameters / Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #333333;">${message}</p>
          </div>
        </div>
        <div style="padding: 15px; text-align: center; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; margin-top: 20px;">
          Processed under strict NDA protocols. © 2026 Arventis Partners.
        </div>
      </div>
    `;

    // Fire email
    const internalRes = await resend.emails.send({
      from: 'contact@arventispartners.com',
      to: 'arventis-partners@googlegroups.com',
      subject: `[New Mandate Enquiry] ${name}`,
      html: internalHtmlContent,
    });

    if (internalRes.error) {
      console.error('Failed to send internal email:', internalRes.error);
    }

    return NextResponse.json({ success: true, internalId: internalRes.data?.id });
  } catch (error: any) {
    console.error('Resend Email Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
