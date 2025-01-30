export const config = {
  matcher: '/work/*'  // Only run on /work routes
};

export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie');
  
  console.log('Netlify Middleware:', {
    path: url.pathname,
    hasAccess: cookies?.includes('access_token=true'),
    env: process.env.NETLIFY ? 'Netlify' : 'Local'
  });

  // Skip non-work paths
  if (!url.pathname.startsWith('/work') || 
      url.pathname === '/work/access' || 
      url.pathname.startsWith('/api/')) {
    return next();
  }

  // Check for access token
  if (!cookies?.includes('access_token=true')) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/work/access?redirect=${encodeURIComponent(url.pathname)}`
      }
    });
  }

  return next();
} 