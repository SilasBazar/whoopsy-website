/**
 * Combines class names with Tailwind CSS support
 * Simple utility to merge class names without dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}