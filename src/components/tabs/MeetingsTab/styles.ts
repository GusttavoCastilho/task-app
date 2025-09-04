import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../contexts/ThemeContext';

export const createMeetingsTabStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  meetingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  meetingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  meetingIcon: {
    marginRight: 12,
  },
  meetingContent: {
    flex: 1,
  },
  meetingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  meetingMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  meetingTime: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  meetingParticipants: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
  meetingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});
