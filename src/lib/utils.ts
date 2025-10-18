import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
  })
}

export function formatPhoneNumber(phone: string): string {
  // Format: +216 23 17 77 05
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`
  }
  return phone
}

export function formatEmail(email: string): string {
  return email.toLowerCase().trim()
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function capitalizeWords(str: string): string {
  return str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text)
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
    document.body.removeChild(textArea)
    return Promise.resolve()
  }
}

export function downloadFile(url: string, filename: string): void {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function getRandomColor(): string {
  const colors = [
    '#00ffff', // neon-blue
    '#ff0080', // neon-pink
    '#00ff00', // neon-green
    '#8000ff', // neon-purple
    '#ff8000', // neon-orange
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export function getContrastColor(hexColor: string): string {
  // Convert hex to RGB
  const r = parseInt(hexColor.substr(1, 2), 16)
  const g = parseInt(hexColor.substr(3, 2), 16)
  const b = parseInt(hexColor.substr(5, 2), 16)
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  return luminance > 0.5 ? '#000000' : '#ffffff'
}

export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`
  } else {
    return `${secs}s`
  }
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function getGreeting(): string {
  const hour = new Date().getHours()
  
  if (hour < 12) {
    return 'Bonjour'
  } else if (hour < 18) {
    return 'Bon après-midi'
  } else {
    return 'Bonsoir'
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  return fn().catch(err => {
    if (retries > 0) {
      return sleep(delay).then(() => retry(fn, retries - 1, delay))
    }
    throw err
  })
}

export function createEventEmitter() {
  const events: { [key: string]: Function[] } = {}
  
  return {
    on(event: string, callback: Function) {
      if (!events[event]) {
        events[event] = []
      }
      events[event].push(callback)
    },
    
    off(event: string, callback: Function) {
      if (events[event]) {
        events[event] = events[event].filter(cb => cb !== callback)
      }
    },
    
    emit(event: string, ...args: any[]) {
      if (events[event]) {
        events[event].forEach(callback => callback(...args))
      }
    }
  }
}

export function createLocalStorage<T>(key: string, defaultValue: T) {
  return {
    get(): T {
      if (typeof window === 'undefined') return defaultValue
      
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
      } catch {
        return defaultValue
      }
    },
    
    set(value: T): void {
      if (typeof window === 'undefined') return
      
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // Handle error silently
      }
    },
    
    remove(): void {
      if (typeof window === 'undefined') return
      
      try {
        window.localStorage.removeItem(key)
      } catch {
        // Handle error silently
      }
    }
  }
}

export function createSessionStorage<T>(key: string, defaultValue: T) {
  return {
    get(): T {
      if (typeof window === 'undefined') return defaultValue
      
      try {
        const item = window.sessionStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
      } catch {
        return defaultValue
      }
    },
    
    set(value: T): void {
      if (typeof window === 'undefined') return
      
      try {
        window.sessionStorage.setItem(key, JSON.stringify(value))
      } catch {
        // Handle error silently
      }
    },
    
    remove(): void {
      if (typeof window === 'undefined') return
      
      try {
        window.sessionStorage.removeItem(key)
      } catch {
        // Handle error silently
      }
    }
  }
}
