# Personal Metadata System

## Overview
The personal metadata system provides a centralized configuration for managing personal information, social links, and contact details across the website. This ensures consistency and makes updates easier to maintain.

## Structure

### Basic Information
typescript
personalInfo.name.first // "Karina"
personalInfo.name.last // "Tovar"
personalInfo.name.full // "Karina Tovar"
personalInfo.name.formal // "Karina Tovar Castro"
personalInfo.role // "Lead Product Designer"
personalInfo.location // "East Coast, USA"

### Contact Information
personalInfo.contact.email // "hello@karinatovar.com"
personalInfo.contact.phone // "(123) 456-7890"

### Social Links
typescript
// Full URLs

personalInfo.social.linkedin.url // LinkedIn profile URL
personalInfo.social.github.url // GitHub profile URL
personalInfo.social.threads.url // Threads profile URL

// Handles
personalInfo.social.linkedin.handle // "karina-tovar-castro"
personalInfo.social.github.handle // "karina-tc"
personalInfo.social.threads.handle // "karinatovar"

## Usage Examples

### In Astro Components
astro
---
import { personalInfo, getEmailLink } from '../data/metadata';
---
<h1>{personalInfo.name.full}</h1>
<p>{personalInfo.role}</p>
<a href={personalInfo.social.linkedin.url}>LinkedIn</a>

### Email Helper Function

typescript
// Basic email link
getEmailLink()
// "mailto:hello@karinatovar.com"
// With subject
getEmailLink("Hello!")
// "mailto:hello@karinatovar.com?subject=Hello!"
// With subject and body
getEmailLink("Hello!", "I saw your website...")
// "mailto:hello@karinatovar.com?subject=Hello!&body=I%20saw%20your%20website..."

### Common Use Cases

#### Page Titles
astro
<BaseLayout
title={${personalInfo.name.full} | Resume}
description={${personalInfo.name.full}'s professional experience}
>

#### Social Links
astro
<footer>
<a href={personalInfo.social.linkedin.url}>LinkedIn</a>
<a href={personalInfo.social.github.url}>GitHub</a>
</footer>

#### Contact Information

Information
astro
<div class="contact">
<a href={getEmailLink("Hello!", "I'd like to connect")}>
{personalInfo.contact.email}
</a>
</div>



## File Location
The metadata configuration is stored in:

src/
└── data/
└── metadata.ts


## Best Practices

1. **Always Import from Source**
   - Import from `metadata.ts` rather than hardcoding values
   - Use the provided helper functions for consistent formatting

2. **Type Safety**
   - The configuration uses TypeScript's `as const` for type safety
   - Take advantage of TypeScript's autocompletion

3. **Maintenance**
   - Update values only in `metadata.ts`
   - Add new properties to the metadata file rather than creating one-off values

4. **Extensibility**
   - When adding new social platforms or contact methods, follow the existing pattern
   - Document new additions in this file

## Updates and Modifications

To update any personal information:

1. Open `src/data/metadata.ts`
2. Modify the relevant values
3. Changes will automatically propagate throughout the site
4. No need to update individual components

## Related Files
- `src/data/metadata.ts` - Main configuration file
- `src/pages/resume.astro` - Example of extensive metadata usage
- `src/components/Footer.astro` - Social links implementation
- `src/pages/share.astro` - Contact information usage