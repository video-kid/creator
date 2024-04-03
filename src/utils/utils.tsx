export const createInitials = (string: string) =>
  string
    .split(' ')
    .map((name) => name.charAt(0))
    .join('');
