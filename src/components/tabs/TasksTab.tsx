import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { Task } from '../../types';
import TaskCard from './TaskCard';
import { createTasksTabStyles } from './TasksTab/styles';

// Constants
const NEW_TASK_ANIMATION_DURATION = 1000;

// Types
interface TasksTabProps {
  tasks: Task[];
  onTaskAdd: (task: Task) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
  onDelete?: (taskId: string) => void;
}

const TasksTab: React.FC<TasksTabProps> = ({ 
  tasks, 
  onTaskAdd, 
  onReorder, 
  onDelete 
}) => {
  // State
  const [newTaskIds, setNewTaskIds] = useState<Set<string>>(new Set());
  const [lastTaskCount, setLastTaskCount] = useState(0);

  // Theme and styles
  const { theme } = useTheme();
  const styles = createTasksTabStyles(theme);

  // Effects
  useEffect(() => {
    trackNewTasks();
  }, [tasks, lastTaskCount]);

  // Utility functions
  const trackNewTasks = useCallback(() => {
    if (tasks.length > lastTaskCount && tasks.length > 0) {
      const newestTask = tasks[0]; // Assuming newest task is at the top
      
      setNewTaskIds(new Set([newestTask.id]));
      
      // Clear the new task flag after animation duration
      setTimeout(() => {
        setNewTaskIds(new Set());
      }, NEW_TASK_ANIMATION_DURATION);
    }
    
    setLastTaskCount(tasks.length);
  }, [tasks, lastTaskCount]);

  // Handlers
  const handleTaskPress = useCallback(() => {
    // Handle task press if needed
  }, []);

  // Render functions
  const renderTask = useCallback(({ item, index }: { item: Task; index: number }) => {
    const isNew = newTaskIds.has(item.id);
    
    return (
      <TaskCard
        task={item}
        index={index}
        onReorder={onReorder}
        onPress={handleTaskPress}
        onDelete={onDelete}
        isNew={isNew}
      />
    );
  }, [newTaskIds, onReorder, onDelete, handleTaskPress]);

  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyStateContainer}>
      <Ionicons name="checkmark-circle-outline" size={64} color="#ccc" />
      <Text style={styles.emptyStateTitle}>No tasks yet</Text>
      <Text style={styles.emptyStateSubtitle}>Tap the + button to create your first task</Text>
    </View>
  ), [styles.emptyStateContainer, styles.emptyStateTitle, styles.emptyStateSubtitle]);

  // Computed values
  const hasTasks = tasks.length > 0;
  const contentContainerStyle = hasTasks ? { paddingHorizontal: 16 } : styles.emptyStateContainer;

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyState}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default TasksTab;