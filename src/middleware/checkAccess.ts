export function checkAccess(url: string): boolean {
  // List of protected case studies
  const protectedPaths = [
    '/work/ask-tropic',
    '/work/beyond-contracts',
    '/work/supplier-intelligence',
    // Add more protected paths as needed
  ];

  // Check if the current path is protected
  return protectedPaths.some(path => url.startsWith(path));
}

export function hasValidAccessToken(cookies: string): boolean {
  return cookies.includes('access_token=true');
} 