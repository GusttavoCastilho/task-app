import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../contexts/ThemeContext';

export const createTaskCardStyles = (theme: ThemeColors) => StyleSheet.create({
  taskCard: {
    backgroundColor: theme.taskCard,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: '100%',
  },
  taskCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  taskLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  taskRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dragHandle: {
    padding: 4,
  },
  taskIcon: {
    marginRight: 12,
    marginTop: 4,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  taskMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 4,
  },
  taskCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '400',
    color: theme.textSecondary,
  },
  taskDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontSize: 11,
    fontWeight: '400',
    color: theme.textSecondary,
  },
  overdueStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  overdueDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.error,
  },
  overdueText: {
    fontSize: 12,
    color: theme.error,
    fontWeight: '500',
  },
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.border,
    backgroundColor: theme.surface,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 1,
  },
  checkboxCompleted: {
    backgroundColor: theme.success,
    borderColor: theme.success,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
});
