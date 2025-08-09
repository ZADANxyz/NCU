import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDistanceToNow(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    if (isNaN(date.getTime())) {
      return dateString;
    }

    const days = differenceInDays(now, date);
    
    if (days < 1) return 'today';
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;

    const weeks = differenceInWeeks(now, date);
    if (weeks < 5) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;

    const months = differenceInMonths(now, date);
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;

    const years = differenceInYears(now, date);
    return `${years} year${years > 1 ? 's' : ''} ago`;

  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}