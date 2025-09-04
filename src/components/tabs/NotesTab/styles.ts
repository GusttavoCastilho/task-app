import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../contexts/ThemeContext';

export const createNotesTabStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  noteCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d1fae5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  noteLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  noteIcon: {
    marginRight: 12,
  },
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  notePreview: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  noteDate: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
  },
  noteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
