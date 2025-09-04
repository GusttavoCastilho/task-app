import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants';
import { Meeting, Note, Reminder, Task } from '../types';

// Constants
const RETRY_ATTEMPTS = 1;

// Types
type StorageData = {
  tasks: Task[];
  reminders: Reminder[];
  meetings: Meeting[];
  notes: Note[];
};

// Generic storage functions
const saveData = async <T>(key: string, data: T[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
    
    // Verify the data was saved correctly by reading it back
    await verifySavedData(key, jsonValue);
  } catch (error) {
    console.error(`Error saving data to ${key}:`, error);
    throw error;
  }
};

const verifySavedData = async (key: string, expectedValue: string): Promise<void> => {
  try {
    const savedData = await AsyncStorage.getItem(key);
    if (savedData !== expectedValue) {
      console.warn(`Data verification failed for ${key}, retrying...`);
      await AsyncStorage.setItem(key, expectedValue);
    }
  } catch (error) {
    console.error(`Error verifying data for ${key}:`, error);
    throw error;
  }
};

const loadData = async <T>(key: string): Promise<T[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue == null) {
      return [];
    }
    
    const parsedData = JSON.parse(jsonValue);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error(`Error loading data from ${key}:`, error);
    return [];
  }
};

// Task storage functions
export const saveTasks = (tasks: Task[]): Promise<void> => 
  saveData(STORAGE_KEYS.TASKS, tasks);

export const loadTasks = (): Promise<Task[]> => 
  loadData<Task>(STORAGE_KEYS.TASKS);

// Reminder storage functions
export const saveReminders = (reminders: Reminder[]): Promise<void> => 
  saveData(STORAGE_KEYS.REMINDERS, reminders);

export const loadReminders = (): Promise<Reminder[]> => 
  loadData<Reminder>(STORAGE_KEYS.REMINDERS);

// Meeting storage functions
export const saveMeetings = (meetings: Meeting[]): Promise<void> => 
  saveData(STORAGE_KEYS.MEETINGS, meetings);

export const loadMeetings = (): Promise<Meeting[]> => 
  loadData<Meeting>(STORAGE_KEYS.MEETINGS);

// Note storage functions
export const saveNotes = (notes: Note[]): Promise<void> => 
  saveData(STORAGE_KEYS.NOTES, notes);

export const loadNotes = (): Promise<Note[]> => 
  loadData<Note>(STORAGE_KEYS.NOTES);

// Utility functions
const createEmptyStorageData = (): StorageData => ({
  tasks: [],
  reminders: [],
  meetings: [],
  notes: []
});

// Load all data in parallel
export const loadAllData = async (): Promise<StorageData> => {
  try {
    const [tasks, reminders, meetings, notes] = await Promise.all([
      loadTasks(),
      loadReminders(),
      loadMeetings(),
      loadNotes()
    ]);

    return { tasks, reminders, meetings, notes };
  } catch (error) {
    console.error('Error loading all data:', error);
    return createEmptyStorageData();
  }
};
