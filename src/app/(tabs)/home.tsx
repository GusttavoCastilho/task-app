import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createHomeScreenStyles } from './styles';

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to your dashboard</Text>
    </View>
  );
}
