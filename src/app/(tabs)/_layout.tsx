import { Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../../components';
import AddTaskModal from '../../components/modals/AddTaskModal';
import { ModalProvider, useModal } from '../../contexts/ModalContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useTaskStore } from '../../stores';
import { Task } from '../../types';

const TabLayoutContent = () => {
  const { showAddTaskModal, setShowAddTaskModal } = useModal();
  const { addTask } = useTaskStore();
  const { theme } = useTheme();

  const handleSaveTask = (task: Task) => {
    addTask(task);
    setShowAddTaskModal(false);
  };

  const handleCloseModal = () => {
    setShowAddTaskModal(false);
  };

  const handleAddButtonPress = () => {
    setShowAddTaskModal(true);
  };

  const tabBarStyle = {
    backgroundColor: theme.background,
    borderTopColor: theme.border,
    borderTopWidth: 1,
    paddingBottom: 20,
    paddingTop: 8,
    elevation: 0,
    shadowOpacity: 0,
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
  };

  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          tabBarStyle,
          tabBarActiveTintColor: theme.tabActive,
          tabBarInactiveTintColor: theme.tabInactive,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        }}>
        
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={28} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="index"
          options={{
            title: 'My Work',
            tabBarIcon: ({ color }) => (
              <Icon name="work" size={24} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="add"
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: theme.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: theme.text,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                  marginTop: -20,
                }}
                onPress={handleAddButtonPress}
                activeOpacity={0.8}
                accessibilityLabel="Add new task"
                accessibilityRole="button"
                accessibilityHint="Double tap to open the add task modal"
              >
                <Icon name="plus" size={36} color={theme.white} />
              </TouchableOpacity>
            ),
          }}
        />
        
        <Tabs.Screen
          name="insights"
          options={{
            title: 'Insights',
            tabBarIcon: ({ color }) => (
              <Icon name="insights" size={24} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="profile" size={24} color={color} />
            ),
          }}
        />
      </Tabs>

      <AddTaskModal
        visible={showAddTaskModal}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </>
  );
};

export default function TabLayout() {
  return (
    <ModalProvider>
      <TabLayoutContent />
    </ModalProvider>
  );
}
