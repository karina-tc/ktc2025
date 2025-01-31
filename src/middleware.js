export const config = {
  matcher: '/work/*'  // Only run on /work routes
};

export function onRequest({ request }, next) {
  const url = new URL(request.url);
  
  // Only run middleware for /work/* routes
  if (!url.pathname.startsWith('/work')) {
    return next();
  }

  const cookies = request.headers.get('cookie');
  
  console.log('Netlify Middleware:', {
    path: url.pathname,
    hasAccess: cookies?.includes('access_token=true'),
    env: process.env.NETLIFY ? 'Netlify' : 'Local',
    supabaseAvailable: !!process.env.PUBLIC_SUPABASE_URL
  });

  // Skip access check for these paths
  if (url.pathname === '/work/access' || 
      url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/blog/')) {
    return next();
  }

  // Check if Supabase is available
  if (!process.env.PUBLIC_SUPABASE_URL) {
    console.warn('Supabase is down, setting temporary access cookie');
    // Set a temporary access cookie and continue to the requested page
    const response = next();
    if (response instanceof Response) {
      response.headers.set('Set-Cookie', 'access_token=true; Path=/; Max-Age=3600; SameSite=Lax');
    }
    return response;
  }

  // Check for access token on protected paths
  if (!cookies?.includes('access_token=true')) {
    const redirectUrl = `/work/access?redirect=${url.pathname}`;
    return new Response(null, {
      status: 302,
      headers: {
        'Location': redirectUrl
      }
    });
  }

  return next();
} 