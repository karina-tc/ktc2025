# Referrer Logic System

## Overview
The referrer system tracks how visitors arrive at the site and personalizes their experience. It uses URL parameters and session storage to maintain visitor context across pages.

## Core Parameters

### reader
- Purpose: Identifies the current visitor
- Parameter: ?reader=Name 
- Example: https://karinatovar.com/share?reader=John
- Storage: Persists in session storage

### referrer 
- Purpose: Tracks traffic source
- Parameter: ?referrer=source
- Example: https://karinatovar.com/share?referrer=linkedin
- Storage: Persists in session storage

## Implementation

### Getting Reader Info
ypescript
import { getReader } from '../utils/reader';
// Gets reader name from URL or session storage
const reader = getReader();


### Priority Order
1. URL Parameters (highest priority)
2. Session Storage (fallback)
3. Default Values (lowest priority)

## Usage Examples

### Basic Reader Check
typescript
const reader = getReader();
const greeting = reader ? Hello ${reader} : 'Hello friend';



### With URL Parameters
ypescript
const url = Astro.url;
const referrer = url.searchParams.get("referrer");
const reader = url.searchParams.get("reader");


### Persisting State
typescript
// Save reader info
setReader(readerName);
// Retrieve later
const savedReader = getReader();


## Best Practices

1. Always provide fallback values
2. Clear reader data appropriately
3. Use URL parameters for initial visits
4. Use session storage for maintaining state
5. Handle missing parameters gracefully

## File Structure
rc/
└── utils/
└── reader.ts // Core reader utilities
└── pages/
└── share.astro // Example implementation



## Helper Functions

### getReader()
- Checks URL parameters first
- Falls back to session storage
- Returns null if no reader found

### setReader()
- Saves reader name to session storage
- Used for maintaining state across pages
- Accepts string parameter

## Common Use Cases

### Personalized Greetings
typescript
const greeting = reader ? Hello ${reader} : 'Hello friend';

### Referrer Tracking

typescript
const referrer = url.searchParams.get("referrer");
if (referrer === 'linkedin') {
// Show LinkedIn-specific content
}


### State Management
typescript
// Save on initial visit
if (url.searchParams.has("reader")) {
setReader(url.searchParams.get("reader"));
}
// Use in subsequent visits
const savedReader = getReader();


## Related Files
- src/utils/reader.ts
- src/pages/share.astro
- src/components/Greeting.astro