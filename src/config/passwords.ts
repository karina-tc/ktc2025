import { supabase } from '../lib/supabase';

export interface PasswordConfig {
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