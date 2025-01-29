import { isValidPassword } from '../../config/passwords';

export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const password = body?.password?.toLowerCase()?.trim();
    
    console.log('API: received password:', password);
    const passwordConfig = isValidPassword(password);
    
    if (passwordConfig) {
      const response = new Response(
        JSON.stringify({
          valid: true,
          message: 'Password accepted'
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `access_token=true; Path=/; Max-Age=${passwordConfig.expirationHours * 3600}; SameSite=Lax`
          }
        }
      );
      
      console.log('API: setting cookie and returning response');
      return response;
    }

    return new Response(
      JSON.stringify({
        valid: false,
        message: 'Invalid password'
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        valid: false,
        message: 'Server error',
        error: error.toString()
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}; 