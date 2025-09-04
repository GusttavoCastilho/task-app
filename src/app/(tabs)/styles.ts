import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../contexts/ThemeContext';

// MyWork Screen Styles
export const createMyWorkScreenStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  contentContainer: {
    flex: 1,
  },
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
    borderRadius: 20,
  },
  filterText: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.text,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  tab: {
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
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
});

// Home Screen Styles
export const createHomeScreenStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
  },
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
    borderRadius: 20,
  },
  filterText: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.text,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  tab: {
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.text,
  },
  subtitle: {
    fontSize: 16,
    color: theme.textSecondary,
  },
});

// Add Screen Styles
export const createAddScreenStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.text,
  },
  subtitle: {
    fontSize: 16,
    color: theme.textSecondary,
  },
});

// Insights Screen Styles
export const createInsightsScreenStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.text,
  },
  subtitle: {
    fontSize: 16,
    color: theme.textSecondary,
  },
});

// Profile Screen Styles
export const createProfileScreenStyles = (theme: ThemeColors) => StyleSheet.create({
  profileContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: theme.background,
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
});