export interface PasswordConfig {
  value: string;
  expirationHours: number;
  description?: string;
}

export const passwords: Record<string, PasswordConfig> = {
  'happy-pixels': {
    value: 'happy-pixels',
    expirationHours: 24,
    description: 'Extended access password'
  },
  'cmyk-for-life': {
    value: 'cmyk-for-life',
    expirationHours: 2,
    description: 'Default password for case studies'
  }
};

export function isValidPassword(input: string): PasswordConfig | null {
  const normalizedInput = input.toLowerCase().trim();
  console.log('Checking password:', normalizedInput);
  console.log('Available passwords:', Object.keys(passwords));
  
  // Check if the input matches any password value
  const matchingPassword = Object.values(passwords).find(
    config => config.value.toLowerCase() === normalizedInput
  );
  
  return matchingPassword || null;
} 