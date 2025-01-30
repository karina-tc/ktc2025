import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

export interface PasswordConfig {
  id: string;
  value: string;
  expiration_hours: number;
  description?: string;
}

export async function isValidPassword(input: string): Promise<PasswordConfig | null> {
  if (!input) return null;
  
  const normalizedInput = input.toLowerCase().trim();
  console.log('Checking password:', normalizedInput);
  
  try {
    // Get all active passwords and find a match
    const { data: passwords, error } = await supabase
      .from('access_passwords')
      .select('*')
      .eq('active', true);
    
    if (error) {
      console.error('Supabase error:', error);
      return null;
    }

    console.log('Available passwords:', passwords);
    console.log('Looking for match with:', normalizedInput);
    
    // Find matching password with debug logging
    const match = passwords.find(p => {
      console.log('Comparing with:', p.value);
      return p.value.toLowerCase() === normalizedInput;
    });
    
    if (match) {
      console.log('Valid password found:', match);
      return {
        id: match.id,
        value: match.value,
        expiration_hours: match.expiration_hours,
        description: match.description
      };
    }
    
    console.log('No valid password found');
    return null;
    
  } catch (error) {
    console.error('Error checking password:', error);
    return null;
  }
}

export async function incrementPasswordUsage(passwordId: string) {
  try {
    console.log('Incrementing usage for password ID:', passwordId);
    const { data, error } = await supabase
      .rpc('increment_password_usage', { 
        password_id: passwordId 
      });

    if (error) {
      console.error('RPC error:', error);
      throw error;
    }
    console.log('Increment result:', data);
    return data;
  } catch (error) {
    console.error('Error incrementing password usage:', error);
  }
} 