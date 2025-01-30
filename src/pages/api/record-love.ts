import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { page_path } = await request.json();
    
    const response = await fetch(`${import.meta.env.PUBLIC_SUPABASE_URL}/rest/v1/page_loves`, {
      method: 'POST',
      headers: {
        'apikey': import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${import.meta.env.PUBLIC_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        page_path,
        love_count: 1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to record love' }),
      { status: 500 }
    );
  }
} 