import type { APIRoute } from 'astro';
import { isValidPassword, incrementPasswordUsage } from '../../config/passwords';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check if Supabase environment variables are set
    if (!import.meta.env.PUBLIC_SUPABASE_URL || !import.meta.env.PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase environment variables');
      return new Response(
        JSON.stringify({
          valid: false,
          message: 'Server configuration error'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const body = await request.json();
    const password = body?.password?.toLowerCase()?.trim();
    
    console.log('API: received password:', password);
    const passwordConfig = await isValidPassword(password);
    
    if (!passwordConfig) {
      console.log('API: Invalid password, returning 401');
      return new Response(
        JSON.stringify({
          valid: false,
          message: 'Oops! That password is not valid.'
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': 'access_token=false; Path=/; Max-Age=0'
          }
        }
      );
    }

    // Increment usage count for valid passwords using the ID
    await incrementPasswordUsage(passwordConfig.id);

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
        message: 'Something went wrong. Please try again.',
        error: String(error)
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