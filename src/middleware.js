export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie');
  
  console.log('Middleware:', {
    path: url.pathname,
    cookies: cookies,
    hasAccess: cookies?.includes('access_token=true')
  });

  // Always allow access to these paths
  if (url.pathname === '/work/access' || url.pathname.startsWith('/api/')) {
    return next();
  }

  // If trying to access /work/* without access token
  if (url.pathname.startsWith('/work') && !cookies?.includes('access_token=true')) {
    return redirect(`/work/access?redirect=${encodeURIComponent(url.pathname)}`);
  }

  return next();
} 