import type { APIRoute } from 'astro';
import { isValidPassword } from '../../config/passwords';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const password = body?.password?.toLowerCase()?.trim();
    
    console.log('API: received password:', password);
    const passwordConfig = await isValidPassword(password);
    
    if (!passwordConfig) {
      console.log('API: Invalid password, returning 401');
      return new Response(
        JSON.stringify({
          valid: false,
          message: "That ain't it, friend. Try again."
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            // Clear any existing access token
            'Set-Cookie': 'access_token=false; Path=/; Max-Age=0'
          }
        }
      );
    }

    console.log('API: Valid password, setting cookie');
    return new Response(
      JSON.stringify({
        valid: true,
        message: 'Password accepted'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `access_token=true; Path=/; Max-Age=${passwordConfig.expiration_hours * 3600}; SameSite=Lax`
        }
      }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        valid: false,
        message: 'Something went wrong. Please try again.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};