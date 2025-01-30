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

  // Always allow access to these paths
  if (url.pathname === '/work/access' || url.pathname.startsWith('/api/')) {
    return next();
  }

  // If trying to access /work/* without access token
  if (url.pathname.startsWith('/work') && !cookies?.includes('access_token=true')) {
    // Use full URL for Netlify redirects
    const baseUrl = process.env.NETLIFY 
      ? 'https://' + request.headers.get('host')
      : '';
    
    return redirect(
      `${baseUrl}/work/access?redirect=${encodeURIComponent(url.pathname)}`,
      {
        status: 302
      }
    );
  }

  return next();
} 