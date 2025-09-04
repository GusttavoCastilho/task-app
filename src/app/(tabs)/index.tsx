import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AddTaskModal, Icon, MeetingsTab, NotesTab, RemindersTab, TasksTab, UndoNotification } from '../../components';
import { TABS } from '../../constants';
import { useModal } from '../../contexts/ModalContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useTaskStore } from '../../stores';
import { createMyWorkScreenStyles } from './styles';

// Types
type FilterOption = 'All' | 'Today' | 'Overdue';

export default function MyWorkScreen() {
  // State
  const [activeTab, setActiveTab] = useState('Tasks');
  const [filterOption, setFilterOption] = useState<FilterOption>('All');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showUndoNotification, setShowUndoNotification] = useState(false);

  // Contexts and stores
  const { showAddTaskModal, setShowAddTaskModal } = useModal();
  const { 
    tasks, 
    reminders, 
    meetings, 
    notes, 
    isLoading, 
    lastDeletedTask,
    addTask, 
    reorderTasks, 
    deleteTask, 
    undoDeleteTask, 
    loadData 
  } = useTaskStore();
  const { theme } = useTheme();
  const styles = createMyWorkScreenStyles(theme);

  // Effects
  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (lastDeletedTask) {
      setShowUndoNotification(true);
    }
  }, [lastDeletedTask]);

  // Handlers
  const handleSaveTask = useCallback(async (task: any) => {
    await addTask(task);
    setShowAddTaskModal(false);
  }, [addTask, setShowAddTaskModal]);

  const handleDeleteTask = useCallback(async (taskId: string) => {
    await deleteTask(taskId);
  }, [deleteTask]);

  const handleUndoDelete = useCallback(async () => {
    await undoDeleteTask();
    setShowUndoNotification(false);
  }, [undoDeleteTask]);

  const handleDismissUndo = useCallback(() => {
    setShowUndoNotification(false);
  }, []);

  const handleFilterSelect = useCallback((option: FilterOption) => {
    setFilterOption(option);
    setShowFilterModal(false);
  }, []);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const handleOpenFilterModal = useCallback(() => {
    setShowFilterModal(true);
  }, []);

  const handleCloseFilterModal = useCallback(() => {
    setShowFilterModal(false);
  }, []);

  // Utility functions
  const isTaskCompleted = (task: any): boolean => {
    return task.completed || task.status === 'completed';
  };

  const getTodayDate = (): Date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  const isTaskDueToday = (task: any): boolean => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate.getTime() === getTodayDate().getTime();
  };

  const isTaskOverdue = (task: any): boolean => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate.getTime() < getTodayDate().getTime();
  };

  // Computed values
  const filteredTasks = useMemo(() => {
    const incompleteTasks = tasks.filter(task => !isTaskCompleted(task));

    switch (filterOption) {
      case 'Today':
        return incompleteTasks.filter(isTaskDueToday);
      case 'Overdue':
        return incompleteTasks.filter(isTaskOverdue);
      case 'All':
      default:
        return incompleteTasks;
    }
  }, [tasks, filterOption]);

  // Render functions
  const renderLoadingState = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );

  const renderTabContent = () => {
    if (isLoading) {
      return renderLoadingState();
    }

    const tabProps = {
      tasks: filteredTasks,
      onTaskAdd: handleSaveTask,
      onReorder: reorderTasks,
      onDelete: handleDeleteTask,
    };

    switch (activeTab) {
      case 'Tasks':
        return <TasksTab {...tabProps} />;
      case 'Reminders':
        return <RemindersTab reminders={reminders} />;
      case 'Meetings':
        return <MeetingsTab meetings={meetings} />;
      case 'Notes':
        return <NotesTab notes={notes} />;
      default:
        return <TasksTab {...tabProps} />;
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>My Work</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity 
            style={styles.iconButton}
            accessibilityLabel="Notifications"
            accessibilityRole="button"
            accessibilityHint="Double tap to view notifications"
          >
            <Icon name="notification" size={24} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            accessibilityLabel="History"
            accessibilityRole="button"
            accessibilityHint="Double tap to view task history"
          >
            <Icon name="history" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.greetingSection}>
        <Text style={styles.greeting}>Good morning, Louis!</Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={handleOpenFilterModal}
          accessibilityLabel={`Filter tasks. Current filter: ${filterOption}`}
          accessibilityRole="button"
          accessibilityHint="Double tap to open filter options"
        >
          <Icon name="folder" size={16} color={theme.text} />
          <Text style={styles.filterText}>{filterOption}</Text>
          <Ionicons name="chevron-down" size={16} color={theme.text} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderTabs = () => (
    <View style={styles.tabsContainer}>
      {TABS.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[styles.tab, activeTab === tab.key && styles.activeTab]}
          onPress={() => handleTabChange(tab.key)}
          accessibilityLabel={`${tab.label} tab`}
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === tab.key }}
          accessibilityHint={`Double tap to switch to ${tab.label} tab`}
        >
          <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabText]}>
            {tab.label}
          </Text>
          {activeTab === tab.key && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderFilterModal = () => (
    <Modal
      visible={showFilterModal}
      transparent={true}
      animationType="fade"
      onRequestClose={handleCloseFilterModal}
    >
      <TouchableOpacity 
        style={[styles.modalOverlay, { backgroundColor: theme.modalOverlay }]}
        activeOpacity={1}
        onPress={handleCloseFilterModal}
        accessibilityLabel="Close filter modal"
        accessibilityRole="button"
        accessibilityHint="Double tap to close the filter modal"
      >
        <View style={styles.filterModal}>
          <Text style={styles.filterModalTitle}>Filter Tasks</Text>
          {(['All', 'Today', 'Overdue'] as const).map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.filterOption,
                filterOption === option && styles.filterOptionSelected
              ]}
              onPress={() => handleFilterSelect(option)}
              accessibilityLabel={`Filter by ${option}`}
              accessibilityRole="button"
              accessibilityState={{ selected: filterOption === option }}
              accessibilityHint="Double tap to apply this filter"
            >
              <Text style={[
                styles.filterOptionText,
                filterOption === option && styles.filterOptionTextSelected
              ]}>
                {option}
              </Text>
              {filterOption === option && (
                <Ionicons name="checkmark" size={20} color={theme.filterSelected} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        
        {renderHeader()}
        {renderTabs()}
        
        <View style={styles.contentContainer}>
          {renderTabContent()}
        </View>

        <AddTaskModal
          visible={showAddTaskModal}
          onClose={() => setShowAddTaskModal(false)}
          onSave={handleSaveTask}
        />

        {renderFilterModal()}

        <UndoNotification
          visible={showUndoNotification}
          taskTitle={lastDeletedTask?.title || ''}
          onUndo={handleUndoDelete}
          onDismiss={handleDismissUndo}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}


