// Get reader name from URL or session storage
export const getReader = () => {
  if (typeof window === 'undefined') return null;
  
  // First check URL
  const urlReader = new URLSearchParams(window.location.search).get("reader");
  if (urlReader) return urlReader;
  
  // Then check session storage
  return sessionStorage.getItem('reader');
};

// Save reader name to session storage
export function setReader(name: string): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('reader', name);
} 