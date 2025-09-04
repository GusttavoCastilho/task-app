import { create } from 'zustand';
import { loadAllData, saveMeetings, saveNotes, saveReminders, saveTasks } from '../services/storageService';
import { Meeting, Note, Reminder, Task } from '../types';

// Types
interface TaskState {
  // Data
  tasks: Task[];
  reminders: Reminder[];
  meetings: Meeting[];
  notes: Note[];
  isLoading: boolean;
  lastDeletedTask: Task | null;

  // Actions
  loadData: () => Promise<void>;
  addTask: (task: Task) => Promise<void>;
  reorderTasks: (fromIndex: number, toIndex: number) => Promise<void>;
  updateTask: (taskId: string, updates: Partial<Task>) => Promise<void>;
  toggleTaskComplete: (taskId: string) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
  undoDeleteTask: () => Promise<void>;
  addReminder: (reminder: Reminder) => Promise<void>;
  updateReminder: (reminderId: string, updates: Partial<Reminder>) => Promise<void>;
  deleteReminder: (reminderId: string) => Promise<void>;
  addMeeting: (meeting: Meeting) => Promise<void>;
  updateMeeting: (meetingId: string, updates: Partial<Meeting>) => Promise<void>;
  deleteMeeting: (meetingId: string) => Promise<void>;
  addNote: (note: Note) => Promise<void>;
  updateNote: (noteId: string, updates: Partial<Note>) => Promise<void>;
  deleteNote: (noteId: string) => Promise<void>;
}

// Utility functions
const createInitialState = () => ({
  tasks: [],
  reminders: [],
  meetings: [],
  notes: [],
  isLoading: true,
  lastDeletedTask: null,
});

const handleError = (operation: string, error: unknown) => {
  console.error(`Error ${operation}:`, error);
};

export const useTaskStore = create<TaskState>((set, get) => ({
  // Initial state
  ...createInitialState(),

  // Load all data from storage
  loadData: async () => {
    try {
      set({ isLoading: true });
      const data = await loadAllData();
      set({
        tasks: data.tasks,
        reminders: data.reminders,
        meetings: data.meetings,
        notes: data.notes,
        isLoading: false,
      });
    } catch (error) {
      handleError('loading data', error);
      set({ isLoading: false });
    }
  },

  // Task actions
  addTask: async (task: Task) => {
    try {
      const { tasks } = get();
      const updatedTasks = [task, ...tasks];
      
      set({ tasks: updatedTasks });
      await saveTasks(updatedTasks);
    } catch (error) {
      handleError('adding task', error);
    }
  },

  reorderTasks: async (fromIndex: number, toIndex: number) => {
    try {
      const { tasks } = get();
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(fromIndex, 1);
      updatedTasks.splice(toIndex, 0, movedTask);
      
      set({ tasks: updatedTasks });
      await saveTasks(updatedTasks);
    } catch (error) {
      handleError('reordering tasks', error);
    }
  },

  updateTask: async (taskId: string, updates: Partial<Task>) => {
    try {
      const { tasks } = get();
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      );
      
      set({ tasks: updatedTasks });
      await saveTasks(updatedTasks);
    } catch (error) {
      handleError('updating task', error);
    }
  },

  toggleTaskComplete: async (taskId: string) => {
    try {
      const { tasks } = get();
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          const isCompleted = task.completed || task.status === 'completed';
          return {
            ...task,
            completed: !isCompleted,
            status: (!isCompleted ? 'completed' : 'pending') as 'completed' | 'pending'
          };
        }
        return task;
      });
      
      set({ tasks: updatedTasks });
      await saveTasks(updatedTasks);
    } catch (error) {
      handleError('toggling task completion', error);
    }
  },

  deleteTask: async (taskId: string) => {
    try {
      const { tasks } = get();
      const taskToDelete = tasks.find(task => task.id === taskId);
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      
      set({ 
        tasks: updatedTasks,
        lastDeletedTask: taskToDelete || null
      });
      await saveTasks(updatedTasks);
    } catch (error) {
      handleError('deleting task', error);
    }
  },

  undoDeleteTask: async () => {
    try {
      const { tasks, lastDeletedTask } = get();
      if (lastDeletedTask) {
        const updatedTasks = [lastDeletedTask, ...tasks];
        set({ 
          tasks: updatedTasks,
          lastDeletedTask: null
        });
        await saveTasks(updatedTasks);
      }
    } catch (error) {
      handleError('undoing task deletion', error);
    }
  },

  // Reminder actions
  addReminder: async (reminder: Reminder) => {
    try {
      const { reminders } = get();
      const updatedReminders = [reminder, ...reminders];
      
      set({ reminders: updatedReminders });
      await saveReminders(updatedReminders);
    } catch (error) {
      handleError('adding reminder', error);
    }
  },

  updateReminder: async (reminderId: string, updates: Partial<Reminder>) => {
    try {
      const { reminders } = get();
      const updatedReminders = reminders.map(reminder =>
        reminder.id === reminderId ? { ...reminder, ...updates } : reminder
      );
      
      set({ reminders: updatedReminders });
      await saveReminders(updatedReminders);
    } catch (error) {
      handleError('updating reminder', error);
    }
  },

  deleteReminder: async (reminderId: string) => {
    try {
      const { reminders } = get();
      const updatedReminders = reminders.filter(reminder => reminder.id !== reminderId);
      
      set({ reminders: updatedReminders });
      await saveReminders(updatedReminders);
    } catch (error) {
      handleError('deleting reminder', error);
    }
  },

  // Meeting actions
  addMeeting: async (meeting: Meeting) => {
    try {
      const { meetings } = get();
      const updatedMeetings = [meeting, ...meetings];
      
      set({ meetings: updatedMeetings });
      await saveMeetings(updatedMeetings);
    } catch (error) {
      handleError('adding meeting', error);
    }
  },

  updateMeeting: async (meetingId: string, updates: Partial<Meeting>) => {
    try {
      const { meetings } = get();
      const updatedMeetings = meetings.map(meeting =>
        meeting.id === meetingId ? { ...meeting, ...updates } : meeting
      );
      
      set({ meetings: updatedMeetings });
      await saveMeetings(updatedMeetings);
    } catch (error) {
      handleError('updating meeting', error);
    }
  },

  deleteMeeting: async (meetingId: string) => {
    try {
      const { meetings } = get();
      const updatedMeetings = meetings.filter(meeting => meeting.id !== meetingId);
      
      set({ meetings: updatedMeetings });
      await saveMeetings(updatedMeetings);
    } catch (error) {
      handleError('deleting meeting', error);
    }
  },

  // Note actions
  addNote: async (note: Note) => {
    try {
      const { notes } = get();
      const updatedNotes = [note, ...notes];
      
      set({ notes: updatedNotes });
      await saveNotes(updatedNotes);
    } catch (error) {
      handleError('adding note', error);
    }
  },

  updateNote: async (noteId: string, updates: Partial<Note>) => {
    try {
      const { notes } = get();
      const updatedNotes = notes.map(note =>
        note.id === noteId ? { ...note, ...updates } : note
      );
      
      set({ notes: updatedNotes });
      await saveNotes(updatedNotes);
    } catch (error) {
      handleError('updating note', error);
    }
  },

  deleteNote: async (noteId: string) => {
    try {
      const { notes } = get();
      const updatedNotes = notes.filter(note => note.id !== noteId);
      
      set({ notes: updatedNotes });
      await saveNotes(updatedNotes);
    } catch (error) {
      handleError('deleting note', error);
    }
  },
}));
