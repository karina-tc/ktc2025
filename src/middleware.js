export const config = {
  matcher: '/work/*'  // Only run on /work routes
};

export function onRequest({ request }, next) {
  const url = new URL(request.url);
  
  console.log('Middleware running for:', url.pathname);
  console.log('Debug token from URL:', url.searchParams.get('debug_token'));
  console.log('Expected token:', import.meta.env.PUBLIC_DEBUG_ACCESS_TOKEN);
  
  // Skip middleware for excluded paths
  if (url.pathname === '/work' || 
      url.pathname === '/work/access' || 
      url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/blog/')) {
    console.log('Skipping middleware for excluded path');
    return next();
  }

  // Import checkAccess using the correct path
  const { checkAccess } = require("../middleware/checkAccess");
  if (!checkAccess(url.pathname)) {
    return next();
  }

  // Check for debug parameter with a secure value
  const debugToken = url.searchParams.get('debug_token');
  const cookies = request.headers.get('cookie') || '';
  
  if (debugToken === import.meta.env.PUBLIC_DEBUG_ACCESS_TOKEN) {
    console.warn('Debug access granted, creating new response with cookie');
    return new Response(null, {
      status: 302,
      headers: {
        'Location': url.pathname,
        'Set-Cookie': 'access_token=true; Path=/; Max-Age=3600; SameSite=Lax'
      }
    });
  }

  // Check for existing cookie
  if (cookies.includes('access_token=true')) {
    return next();
  }

  // If no valid token or cookie, redirect to access page
  return new Response(null, {
    status: 302,
    headers: {
      'Location': `/work/access?redirect=${url.pathname}`
    }
  });
} 