export const config = {
  matcher: '/work/*'  // Only run on /work routes
};

export function onRequest({ request }, next) {
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie');
  
  console.log('Netlify Middleware:', {
    path: url.pathname,
    hasAccess: cookies?.includes('access_token=true'),
    env: process.env.NETLIFY ? 'Netlify' : 'Local'
  });

  // Skip access check for these paths
  if (url.pathname === '/work/access' || 
      url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/blog/')) {
    return next();
  }

  // Check if Supabase is available
  if (!process.env.PUBLIC_SUPABASE_URL) {
    console.warn('Supabase is down, bypassing authentication');
    return next();
  }

  // Check for access token on protected paths
  if (url.pathname.startsWith('/work')) {
    if (!cookies?.includes('access_token=true')) {
      const redirectUrl = `/work/access?redirect=${url.pathname}`;
      return new Response(null, {
        status: 302,
        headers: {
          'Location': redirectUrl
        }
      });
    }
  }

  return next();
} 