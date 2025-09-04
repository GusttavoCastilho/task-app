// Storage keys
export const STORAGE_KEYS = {
  TASKS: '@tasks_storage',
  REMINDERS: '@reminders_storage',
  MEETINGS: '@meetings_storage',
  NOTES: '@notes_storage',
} as const;

// Category options
export const CATEGORY_OPTIONS = [
  { key: 'work', value: 'Work' },
  { key: 'personal', value: 'Personal' },
  { key: 'maintenance', value: 'Maintenance' },
  { key: 'clients', value: 'Clients' },
  { key: 'warehouse', value: 'Warehouse' },
  { key: 'meetings', value: 'Meetings' },
  { key: 'study', value: 'Study' },
  { key: 'health', value: 'Health' },
  { key: 'finance', value: 'Finance' },
  { key: 'other', value: 'Other' }
] as const;

// Tab configuration
export const TABS = [
  { key: 'Tasks', label: 'Tasks' },
  { key: 'Reminders', label: 'Reminders' },
  { key: 'Meetings', label: 'Meetings' },
  { key: 'Notes', label: 'Notes' }
] as const;

// Animation constants
export const ANIMATION_DURATION = 300;
export const MODAL_MAX_HEIGHT = '80%';
export const CATEGORY_MODAL_MAX_HEIGHT = '60%';
