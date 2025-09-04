import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createProfileScreenStyles } from './styles';

export default function ProfileScreen() {
  const { theme, themeMode, setThemeMode, isDark } = useTheme();
  const styles = createProfileScreenStyles(theme);

  const themeOptions = [
    { key: 'light', label: 'Light', icon: 'sunny-outline' },
    { key: 'dark', label: 'Dark', icon: 'moon-outline' },
    { key: 'system', label: 'System', icon: 'phone-portrait-outline' },
  ] as const;

  return (
    <ScrollView style={styles.profileContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.profileContainer}>
        {/* Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileAvatar}>
            <Ionicons name="person" size={40} color={theme.primary} />
          </View>
          <Text style={styles.profileTitle}>Profile</Text>
          <Text style={styles.profileSubtitle}>Manage your preferences</Text>
        </View>

        {/* Theme Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          <Text style={styles.sectionSubtitle}>Choose your preferred theme</Text>
          
          <View style={styles.themeOptions}>
            {themeOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.themeOption,
                  themeMode === option.key && styles.themeOptionSelected
                ]}
                onPress={() => setThemeMode(option.key as 'light' | 'dark' | 'system')}
              >
                <View style={styles.themeOptionLeft}>
                  <View style={[
                    styles.themeOptionIcon,
                    themeMode === option.key && styles.themeOptionIconSelected
                  ]}>
                    <Ionicons 
                      name={option.icon} 
                      size={20} 
                      color={themeMode === option.key ? theme.background : theme.textSecondary} 
                    />
                  </View>
                  <View>
                    <Text style={[
                      styles.themeOptionLabel,
                      themeMode === option.key && styles.themeOptionLabelSelected
                    ]}>
                      {option.label}
                    </Text>
                    {option.key === 'system' && (
                      <Text style={styles.themeOptionDescription}>
                        Follows system settings
                      </Text>
                    )}
                  </View>
                </View>
                {themeMode === option.key && (
                  <Ionicons name="checkmark-circle" size={24} color={theme.primary} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Current Theme Info */}
        <View style={styles.themeInfo}>
          <View style={styles.themeInfoCard}>
            <Text style={styles.themeInfoTitle}>Current Theme</Text>
            <Text style={styles.themeInfoValue}>
              {themeMode === 'system' 
                ? `System (${isDark ? 'Dark' : 'Light'})` 
                : themeMode.charAt(0).toUpperCase() + themeMode.slice(1)
              }
            </Text>
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoTitle}>Task App</Text>
          <Text style={styles.appInfoVersion}>Version 1.0.0</Text>
          <Text style={styles.appInfoDescription}>
            A simple and elegant task management app with drag-to-reorder functionality and theme support.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}