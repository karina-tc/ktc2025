// Remove the import and use a local interface that matches MiniShowcaseCard.astro
interface MiniShowcase {
  thumbnail: string;
  targetUrl?: string;
  content?: {
    title?: string;
    metadata?: string;
  }[]
}

export const miniShowcases: MiniShowcase[] = [
  {
    thumbnail: 'https://cdn.prod.website-files.com/63bc24277d11efd498c4b12c/675ff3ff4726e2249fbf8540_www.freelancefounders.com_%201-thumbnail.avif',
    content: [
      {
        title: 'The Sidecar',
        metadata: 'Created this container to keep our chat engine consistent across all Tropic\'s pages'
      }
    ]
  },
  {
    thumbnail: 'https://cdn.prod.website-files.com/63bc24277d11efd498c4b12c/675ff3ff4726e2249fbf8540_www.freelancefounders.com_%201-thumbnail.avif',
    content: [
      {
        title: 'Contextual Input',
        metadata: 'Created this field to help users understand what context is available'
      }
    ]
  },
  {
    thumbnail: 'https://cdn.prod.website-files.com/63bc24277d11efd498c4b12c/675ff3ff4726e2249fbf8540_www.freelancefounders.com_%201-thumbnail.avif',
    content: [
      {
        title: 'Suggestions Panel',
        metadata: 'Created this panel to give 1st time users quick tips and tricks'
      }
    ]
  },
  {
    thumbnail: 'https://cdn.prod.website-files.com/63bc24277d11efd498c4b12c/675ff3ff4726e2249fbf8540_www.freelancefounders.com_%201-thumbnail.avif',
    content: [
      {
        title: 'Tutorials Panel',
        metadata: 'Created this panel to help users learn how to use our AI'
      }
    ]
  },
]; 