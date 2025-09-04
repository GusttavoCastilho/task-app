import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../contexts/ThemeContext';

export const createRemindersTabStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  reminderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reminderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reminderIcon: {
    marginRight: 12,
  },
  reminderContent: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  reminderMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  reminderTime: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  reminderType: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: '500',
  },
  reminderCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#F59E0B',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reminderCheckboxInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#F59E0B',
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
