import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    await resend.emails.send({
      from: 'Feedback Form <onboarding@resend.dev>',
      to: 'hello@karinatovar.com', 
      subject: `New Feedback from ${data.name}`,
      html: `
        <h2>New Feedback Received</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Page:</strong> ${data.page_url}</p>
        <h3>What worked well:</h3>
        <p>${data.feedback_positive}</p>
        <h3>What could be improved:</h3>
        <p>${data.feedback_improvement}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return new Response(JSON.stringify({ error: 'Failed to process feedback' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 