import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow as formatDistanceToNowFns } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDistanceToNow(dateString: string): string {
  try {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // Return original string or a default message if date is invalid
      return dateString;
    }
    return formatDistanceToNowFns(date, { addSuffix: true });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString; // Fallback to original string
  }
}