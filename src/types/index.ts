export interface Task {
  id: string;
  title: string;
  category: string;
  dueDate: string;
  status?: 'overdue' | 'pending' | 'completed';
  completed?: boolean;
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  type: string;
}

export interface Meeting {
  id: string;
  title: string;
  time: string;
  participants: string;
}

export interface Note {
  id: string;
  title: string;
  preview: string;
  date: string;
}

export interface NewTask {
  title: string;
  category: string;
  dueDate: string;
}

export interface CategoryOption {
  key: string;
  value: string;
}

export interface Tab {
  key: string;
  label: string;
}
