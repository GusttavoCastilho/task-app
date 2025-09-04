import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createAddScreenStyles } from './styles';

export default function AddScreen() {
  const { theme } = useTheme();
  const styles = createAddScreenStyles(theme);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add</Text>
      <Text style={styles.subtitle}>Add new items here</Text>
    </View>
  );
}
