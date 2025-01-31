export const config = {
  matcher: '/work/*'  // Only run on /work routes
};

export function onRequest({ request }, next) {
  const url = new URL(request.url);
  
  // Skip middleware for the main work page and other excluded paths
  if (url.pathname === '/work' || 
      url.pathname === '/work/access' || 
      url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/blog/')) {
    return next();
  }

  // Only run middleware for /work/* routes (children pages)
  if (url.pathname.startsWith('/work/')) {
    console.warn('Bypassing authentication, setting temporary access cookie');
    const response = next();
    if (response instanceof Response) {
      response.headers.set('Set-Cookie', 'access_token=true; Path=/; Max-Age=3600; SameSite=Lax');
    }
    return response;
  }

  // For all other routes, just continue
  return next();
} 