import { Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { Meeting } from '../../types';
import { createMeetingsTabStyles } from './MeetingsTab/styles';

// Types
interface MeetingsTabProps {
  meetings: Meeting[];
}

const MeetingsTab: React.FC<MeetingsTabProps> = ({ meetings }) => {
  // Theme and styles
  const { theme } = useTheme();
  const styles = createMeetingsTabStyles(theme);

  // Computed values
  const hasMeetings = meetings.length > 0;

  // Handlers
  const handleMeetingPress = useCallback((meetingId: string) => {
    // Handle meeting press if needed
  }, []);

  // Render functions
  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyStateContainer}>
      <Ionicons name="people-outline" size={64} color="#ccc" />
      <Text style={styles.emptyStateTitle}>No meetings scheduled</Text>
      <Text style={styles.emptyStateSubtitle}>Schedule your first meeting to get started</Text>
    </View>
  ), [styles.emptyStateContainer, styles.emptyStateTitle, styles.emptyStateSubtitle]);

  const renderMeetingCard = useCallback((meeting: Meeting) => (
    <View key={meeting.id} style={styles.meetingCard}>
      <View style={styles.meetingLeft}>
        <View style={styles.meetingIcon}>
          <Ionicons name="people-outline" size={24} color="#3B82F6" />
        </View>
        <View style={styles.meetingContent}>
          <Text style={styles.meetingTitle}>{meeting.title}</Text>
          <View style={styles.meetingMeta}>
            <Text style={styles.meetingTime}>{meeting.time}</Text>
            <Text style={styles.meetingParticipants}>{meeting.participants}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.meetingButton}
        onPress={() => handleMeetingPress(meeting.id)}
      >
        <Ionicons name="videocam-outline" size={20} color="#3B82F6" />
      </TouchableOpacity>
    </View>
  ), [styles, handleMeetingPress]);

  const renderMeetings = useCallback(() => (
    meetings.map(renderMeetingCard)
  ), [meetings, renderMeetingCard]);
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {hasMeetings ? renderMeetings() : renderEmptyState()}
    </ScrollView>
  );
};

export default MeetingsTab;
