export const colors = {
  neon: {
    blue: '#00ffff',
    pink: '#ff0080',
    green: '#00ff00',
    purple: '#8000ff',
    orange: '#ff8000',
    yellow: '#ffff00',
    red: '#ff0000',
    cyan: '#00ffff',
  },
  dark: {
    bg: '#0a0a0a',
    card: '#1a1a1a',
    border: '#333333',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    textMuted: '#666666',
  },
  gradients: {
    primary: 'from-neon-blue to-neon-pink',
    secondary: 'from-neon-purple to-neon-orange',
    success: 'from-green-400 to-green-600',
    warning: 'from-yellow-400 to-yellow-600',
    error: 'from-red-400 to-red-600',
    info: 'from-blue-400 to-blue-600',
  },
  glass: {
    bg: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)',
    backdrop: 'blur-md',
  },
}

export const shadows = {
  glow: {
    blue: '0 0 20px rgba(0, 255, 255, 0.3)',
    pink: '0 0 20px rgba(255, 0, 128, 0.3)',
    green: '0 0 20px rgba(0, 255, 0, 0.3)',
    purple: '0 0 20px rgba(128, 0, 255, 0.3)',
    orange: '0 0 20px rgba(255, 128, 0, 0.3)',
  },
  card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
}

export const animations = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  keyframes: {
    glow: {
      '0%': { boxShadow: '0 0 5px currentColor' },
      '100%': { boxShadow: '0 0 20px currentColor' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
  },
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
}

export const typography = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['Orbitron', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
}

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

export const theme = {
  colors,
  shadows,
  animations,
  breakpoints,
  spacing,
  typography,
  borderRadius,
  zIndex,
}

export default theme
