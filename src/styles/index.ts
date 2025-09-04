import { StyleSheet } from 'react-native';
import { ThemeColors, useTheme } from '../contexts/ThemeContext';

export const createStyles = (theme: ThemeColors) => StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
  },

  // Header styles
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  greetingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: theme.text,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    //backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  filterText: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.text,
  },

  // Tab styles
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  tab: {
    //paddingVertical: 12,
    paddingHorizontal: 8,
    marginRight: 20,
  },
  activeTab: {
    // Active tab styling
  },
  tabText: {
    fontSize: 16,
    color: theme.textTertiary,
    fontWeight: '500',
  },
  activeTabText: {
    color: theme.text,
    fontWeight: '600',
  },
  tabIndicator: {
    height: 3,
    backgroundColor: '#1C385D',
    borderRadius: 2,
    marginTop: 8,
  },

  // Task card styles
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

  // Reminder card styles
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

  // Meeting card styles
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

  // Note card styles
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

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBackdropTouchable: {
    flex: 1,
  },
  bottomSheetContent: {
    backgroundColor: theme.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34, // Safe area for home indicator
    maxHeight: '80%',
    minHeight: 300,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.text,
  },
  closeButton: {
    padding: 4,
  },
  modalBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  saveButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: theme.primary,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: theme.textTertiary,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.background,
  },

  // Select button styles
  selectButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f9fa',
  },
  selectButtonText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    color: '#999',
  },

  // Category modal styles
  categoryModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  categoryModalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '80%',
    maxHeight: '60%',
    paddingBottom: 20,
  },
  categoryModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  categoryModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  categoryList: {
    maxHeight: 250,
    paddingBottom: 10,
  },
  categoryOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryOptionText: {
    fontSize: 16,
    color: '#333',
  },
  categoryModalFooter: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    marginTop: 10,
  },
  categoryDoneButton: {
    backgroundColor: '#0F766E',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  categoryDoneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Date picker styles
  datePickerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  datePickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
    paddingBottom: 20,
  },
  datePickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  datePickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  datePicker: {
    backgroundColor: '#fff',
  },
  datePickerFooter: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  datePickerButton: {
    backgroundColor: '#0F766E',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  datePickerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Loading styles
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },

  // Empty state styles
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

  // Filter modal styles
  filterModal: {
    backgroundColor: theme.background,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 100,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  filterOptionSelected: {
    backgroundColor: theme.primary + '10',
  },
  filterOptionText: {
    fontSize: 16,
    color: theme.text,
  },
  filterOptionTextSelected: {
    color: theme.filterSelected,
    fontWeight: '600',
  },

  // Profile styles
  profileContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 8,
  },
  profileSubtitle: {
    fontSize: 16,
    color: theme.textSecondary,
  },
  settingsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 20,
  },
  themeOptions: {
    gap: 12,
  },
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.surface,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  themeOptionSelected: {
    backgroundColor: theme.primary + '10',
    borderColor: theme.primary,
  },
  themeOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  themeOptionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  themeOptionIconSelected: {
    backgroundColor: theme.primary,
  },
  themeOptionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
  },
  themeOptionLabelSelected: {
    color: theme.primary,
    fontWeight: '600',
  },
  themeOptionDescription: {
    fontSize: 12,
    color: theme.textSecondary,
    marginTop: 2,
  },
  themeInfo: {
    marginBottom: 32,
  },
  themeInfoCard: {
    backgroundColor: theme.surface,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  themeInfoTitle: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  themeInfoValue: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  appInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  appInfoVersion: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 12,
  },
  appInfoDescription: {
    fontSize: 14,
    color: theme.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },

  // Undo notification styles
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

// Hook to use theme-aware styles
export const useStyles = () => {
  const { theme } = useTheme();
  return createStyles(theme);
};

// Legacy styles export for backward compatibility (will be removed)
export const styles = createStyles({
  // Light theme as default for legacy components
  background: '#FFFFFF',
  surface: '#F8F9FA',
  card: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#666666',
  textTertiary: '#999999',
  primary: '#8B5CF6',
  primaryLight: '#A78BFA',
  primaryDark: '#7C3AED',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  border: '#E5E5E5',
  divider: '#F0F0F0',
  overlay: 'rgba(0, 0, 0, 0.5)',
  modalOverlay: 'rgba(0, 0, 0, 0.7)',
  taskCard: '#F8F9FA',
  taskOverdue: '#FEF2F2',
  taskCompleted: '#F0FDF4',
  tabActive: '#1A1A1A',
  tabInactive: '#999999',
  filterSelected: '#8B5CF6',
  filterUnselected: '#1A1A1A',
  white: '#FFFFFF',
});
