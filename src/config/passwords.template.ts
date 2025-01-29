export interface PasswordConfig {
  value: string;
  expirationHours: number;
  description?: string;
}

export const passwords: Record<string, PasswordConfig> = {
  'example-password': {
    value: 'example-password',
    expirationHours: 24,
    description: 'Example password configuration'
  }
};

export function isValidPassword(input: string): PasswordConfig | null {
  const normalizedInput = input.toLowerCase().trim();
  const matchingPassword = Object.values(passwords).find(
    config => config.value.toLowerCase() === normalizedInput
  );
  return matchingPassword || null;
} 