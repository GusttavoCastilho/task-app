import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../contexts/ThemeContext';

export const createUndoNotificationStyles = (theme: ThemeColors) => StyleSheet.create({
  undoNotification: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1000,
  },
  undoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  undoTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  undoText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  undoButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  undoButtonText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  undoProgressContainer: {
    height: 3,
    borderRadius: 0,
    overflow: 'hidden',
  },
  undoProgressBar: {
    height: '100%',
    borderRadius: 0,
  },
});
