import { Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { Reminder } from '../../types';
import { createRemindersTabStyles } from './RemindersTab/styles';

// Types
interface RemindersTabProps {
  reminders: Reminder[];
}

const RemindersTab: React.FC<RemindersTabProps> = ({ reminders }) => {
  // Theme and styles
  const { theme } = useTheme();
  const styles = createRemindersTabStyles(theme);

  // Computed values
  const hasReminders = reminders.length > 0;

  // Handlers
  const handleReminderPress = useCallback((reminderId: string) => {
    // Handle reminder press if needed
  }, []);

  // Render functions
  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyStateContainer}>
      <Ionicons name="alarm-outline" size={64} color="#ccc" />
      <Text style={styles.emptyStateTitle}>No reminders yet</Text>
      <Text style={styles.emptyStateSubtitle}>Create your first reminder to stay organized</Text>
    </View>
  ), [styles.emptyStateContainer, styles.emptyStateTitle, styles.emptyStateSubtitle]);

  const renderReminderCard = useCallback((reminder: Reminder) => (
    <View key={reminder.id} style={styles.reminderCard}>
      <View style={styles.reminderLeft}>
        <View style={styles.reminderIcon}>
          <Ionicons name="alarm-outline" size={24} color="#F59E0B" />
        </View>
        <View style={styles.reminderContent}>
          <Text style={styles.reminderTitle}>{reminder.title}</Text>
          <View style={styles.reminderMeta}>
            <Text style={styles.reminderTime}>{reminder.time}</Text>
            <Text style={styles.reminderType}>{reminder.type}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.reminderCheckbox}
        onPress={() => handleReminderPress(reminder.id)}
      >
        <View style={styles.reminderCheckboxInner} />
      </TouchableOpacity>
    </View>
  ), [styles, handleReminderPress]);

  const renderReminders = useCallback(() => (
    reminders.map(renderReminderCard)
  ), [reminders, renderReminderCard]);
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {hasReminders ? renderReminders() : renderEmptyState()}
    </ScrollView>
  );
};

export default RemindersTab;
