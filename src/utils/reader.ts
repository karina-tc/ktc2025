// Get reader name from URL or session storage
export function getReader(): string | null {
  if (typeof window === 'undefined') return null;
  
  // Try URL first
  const urlParams = new URLSearchParams(window.location.search);
  const urlReader = urlParams.get('reader');
  
  // Then try session storage
  const sessionReader = sessionStorage.getItem('reader');
  
  // Return first available value
  return urlReader || sessionReader || null;
}

// Save reader name to session storage
export function setReader(name: string): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('reader', name);
} 