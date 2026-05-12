import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  gold: {
    name: 'Antique Gold',
    label: '✨',
    primary: '#D4AF37',
    primaryRgb: '212, 175, 55',
    secondary: '#B8860B',
    secondaryRgb: '184, 134, 11',
    bgDark: '#0A0A1A',
    bgDeeper: '#0D0D2B',
    textPrimary: '#F7D774',
    textSecondary: '#D4AF37',
    cardBorder: 'rgba(212, 175, 55, 0.15)',
    cardBorderHover: 'rgba(212, 175, 55, 0.35)',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    buttonBg: 'linear-gradient(135deg, #F7D774 0%, #D4AF37 40%, #B8860B 100%)',
    buttonText: '#0A0A1A',
  },
  green: {
    name: 'Sacred Green',
    label: '🟢',
    primary: '#4CAF50',
    primaryRgb: '76, 175, 80',
    secondary: '#81C784',
    secondaryRgb: '129, 199, 132',
    bgDark: '#0A1A0D',
    bgDeeper: '#0D2B12',
    textPrimary: '#66BB6A',
    textSecondary: '#81C784',
    cardBorder: 'rgba(76, 175, 80, 0.1)',
    cardBorderHover: 'rgba(76, 175, 80, 0.3)',
    glowColor: 'rgba(76, 175, 80, 0.4)',
    buttonBg: 'linear-gradient(135deg, #4CAF50, #81C784)',
    buttonText: '#0A1A0D',
  },
  red: {
    name: 'Divine Red',
    label: '🔴',
    primary: '#E53935',
    primaryRgb: '229, 57, 53',
    secondary: '#FF7043',
    secondaryRgb: '255, 112, 67',
    bgDark: '#1A0A0A',
    bgDeeper: '#2B0D0D',
    textPrimary: '#EF5350',
    textSecondary: '#FF7043',
    cardBorder: 'rgba(229, 57, 53, 0.1)',
    cardBorderHover: 'rgba(229, 57, 53, 0.3)',
    glowColor: 'rgba(229, 57, 53, 0.4)',
    buttonBg: 'linear-gradient(135deg, #E53935, #FF7043)',
    buttonText: '#FFFFFF',
  },
  blue: {
    name: 'Celestial Blue',
    label: '🔵',
    primary: '#42A5F5',
    primaryRgb: '66, 165, 245',
    secondary: '#1E88E5',
    secondaryRgb: '30, 136, 229',
    bgDark: '#0A0A1A',
    bgDeeper: '#0D0D3B',
    textPrimary: '#42A5F5',
    textSecondary: '#64B5F6',
    cardBorder: 'rgba(66, 165, 245, 0.1)',
    cardBorderHover: 'rgba(66, 165, 245, 0.3)',
    glowColor: 'rgba(66, 165, 245, 0.4)',
    buttonBg: 'linear-gradient(135deg, #42A5F5, #1E88E5)',
    buttonText: '#FFFFFF',
  },
  white: {
    name: 'Pure White',
    label: '⚪',
    primary: '#1A1A1A',
    primaryRgb: '26, 26, 26',
    secondary: '#D4A017',
    secondaryRgb: '212, 160, 23',
    bgDark: '#F5F5F0',
    bgDeeper: '#EEEEE8',
    textPrimary: '#B8860B',
    textSecondary: '#D4A017',
    cardBorder: 'rgba(184, 134, 11, 0.15)',
    cardBorderHover: 'rgba(184, 134, 11, 0.35)',
    glowColor: 'rgba(184, 134, 11, 0.3)',
    buttonBg: 'linear-gradient(135deg, #D4A017, #B8860B)',
    buttonText: '#FFFFFF',
    isLight: true,
  },
  black: {
    name: 'Mystic Black',
    label: '⚫',
    primary: '#E0E0E0',
    primaryRgb: '224, 224, 224',
    secondary: '#FFD700',
    secondaryRgb: '255, 215, 0',
    bgDark: '#000000',
    bgDeeper: '#0A0A0A',
    textPrimary: '#FFD700',
    textSecondary: '#FFC107',
    cardBorder: 'rgba(255, 215, 0, 0.08)',
    cardBorderHover: 'rgba(255, 215, 0, 0.25)',
    glowColor: 'rgba(255, 215, 0, 0.3)',
    buttonBg: 'linear-gradient(135deg, #FFD700, #FFC107)',
    buttonText: '#000000',
  },
};

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('gold');
  const theme = themes[themeName];

  // Apply CSS custom properties whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-primary-rgb', theme.primaryRgb);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-secondary-rgb', theme.secondaryRgb);
    root.style.setProperty('--theme-bg-dark', theme.bgDark);
    root.style.setProperty('--theme-bg-deeper', theme.bgDeeper);
    root.style.setProperty('--theme-text-primary', theme.textPrimary);
    root.style.setProperty('--theme-text-secondary', theme.textSecondary);
    root.style.setProperty('--theme-card-border', theme.cardBorder);
    root.style.setProperty('--theme-card-border-hover', theme.cardBorderHover);
    root.style.setProperty('--theme-glow', theme.glowColor);
    root.style.setProperty('--theme-btn-bg', theme.buttonBg);
    root.style.setProperty('--theme-btn-text', theme.buttonText);

    // Update body background
    document.body.style.backgroundColor = theme.bgDark;
    document.body.style.color = theme.isLight ? '#1A1A1A' : '#FAFAFA';
  }, [theme]);

  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setThemeName(themeKeys[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
