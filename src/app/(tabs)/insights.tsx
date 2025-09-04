import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createInsightsScreenStyles } from './styles';

export default function InsightsScreen() {
  const { theme } = useTheme();
  const styles = createInsightsScreenStyles(theme);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insights</Text>
      <Text style={styles.subtitle}>Analytics and reports</Text>
    </View>
  );
}
