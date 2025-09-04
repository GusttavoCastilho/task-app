import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

// Constants
const THEME_STORAGE_KEY = '@task_app_theme_mode';
const VALID_THEME_MODES = ['light', 'dark', 'system'] as const;

// Types
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  // Background colors
  background: string;
  surface: string;
  card: string;
  
  // Text colors
  text: string;
  textSecondary: string;
  textTertiary: string;
  
  // Primary colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  
  // Status colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Border and divider colors
  border: string;
  divider: string;
  
  // Overlay colors
  overlay: string;
  modalOverlay: string;
  
  // Task specific colors
  taskCard: string;
  taskOverdue: string;
  taskCompleted: string;
  
  // Tab colors
  tabActive: string;
  tabInactive: string;
  
  // Filter colors
  filterSelected: string;
  filterUnselected: string;

  white: string;
}

const lightTheme: ThemeColors = {
  // Background colors
  background: '#FFFFFF',
  surface: '#F8F9FA',
  card: '#FFFFFF',
  
  // Text colors
  text: '#161616',
  textSecondary: '#666666',
  textTertiary: '#999999',
  
  // Primary colors
  primary: '#064148',
  primaryLight: '#A78BFA',
  primaryDark: '#7C3AED',
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border and divider colors
  border: '#E5E5E5',
  divider: '#F0F0F0',
  
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  modalOverlay: 'rgba(0, 0, 0, 0.7)',
  
  // Task specific colors
  taskCard: '#F8F9FA',
  taskOverdue: '#FEF2F2',
  taskCompleted: '#F0FDF4',
  
  // Tab colors
  tabActive: '#1A1A1A',
  tabInactive: '#999999',
  
  // Filter colors
  filterSelected: '#8B5CF6',
  filterUnselected: '#1A1A1A',

  white: '#FFFFFF',
};

const darkTheme: ThemeColors = {
  // Background colors
  background: '#0F0F0F',
  surface: '#1A1A1A',
  card: '#2A2A2A',
  
  // Text colors
  text: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textTertiary: '#999999',
  
  // Primary colors
  primary: '#064148',
  primaryLight: '#C4B5FD',
  primaryDark: '#8B5CF6',
  
  // Status colors
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',
  
  // Border and divider colors
  border: '#404040',
  divider: '#2A2A2A',
  
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.7)',
  modalOverlay: 'rgba(0, 0, 0, 0.9)',
  
  // Task specific colors
  taskCard: '#2A2A2A',
  taskOverdue: '#3A1A1A',
  taskCompleted: '#1A3A1A',
  
  // Tab colors
  tabActive: '#FFFFFF',
  tabInactive: '#999999',
  
  // Filter colors
  filterSelected: '#A78BFA',
  filterUnselected: '#FFFFFF',

  white: '#FFFFFF',
};

interface ThemeContextType {
  theme: ThemeColors;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [systemColorScheme, setSystemColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  // Computed values
  const isDark = themeMode === 'dark' || (themeMode === 'system' && systemColorScheme === 'dark');
  const theme = isDark ? darkTheme : lightTheme;

  // Utility functions
  const isValidThemeMode = (mode: string): mode is ThemeMode => {
    return VALID_THEME_MODES.includes(mode as ThemeMode);
  };

  const handleError = (operation: string, error: unknown) => {
    console.error(`Error ${operation}:`, error);
  };

  // Handlers
  const loadThemeMode = useCallback(async () => {
    try {
      const savedThemeMode = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedThemeMode && isValidThemeMode(savedThemeMode)) {
        setThemeModeState(savedThemeMode);
      }
    } catch (error) {
      handleError('loading theme mode', error);
    }
  }, []);

  const setThemeMode = useCallback(async (mode: ThemeMode) => {
    try {
      setThemeModeState(mode);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      handleError('saving theme mode', error);
    }
  }, []);

  const handleSystemThemeChange = useCallback(({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    setSystemColorScheme(colorScheme);
  }, []);

  // Effects
  useEffect(() => {
    loadThemeMode();

    const subscription = Appearance.addChangeListener(handleSystemThemeChange);
    return () => subscription?.remove();
  }, [loadThemeMode, handleSystemThemeChange]);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, setThemeMode, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
