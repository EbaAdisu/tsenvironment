import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Calculate years in business dynamically
export function getYearsInBusiness(foundingYear: number = 2005): string {
    const currentYear = new Date().getFullYear()
    const years = currentYear - foundingYear
    return `${years}+`
}

// Get the current year for dynamic calculations
export function getCurrentYear(): number {
    return new Date().getFullYear()
}
