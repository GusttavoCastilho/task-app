import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { CATEGORY_OPTIONS } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';
import { NewTask, Task } from '../../types';
import { createAddTaskModalStyles } from './AddTaskModal/styles';

// Constants
const { height: screenHeight } = Dimensions.get('window');
const ANIMATION_DURATION = 300;
const HIDE_ANIMATION_DURATION = 250;
const GESTURE_THRESHOLD = 100;
const VELOCITY_THRESHOLD = 500;

// Types
interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  visible,
  onClose,
  onSave
}) => {
  // State
  const [newTask, setNewTask] = useState<NewTask>({
    title: '',
    category: '',
    dueDate: ''
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  
  // Theme and styles
  const { theme } = useTheme();
  const styles = createAddTaskModalStyles(theme);
  
  // Animation refs
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const panGestureRef = useRef(null);
  const lastGestureY = useRef(0);

  // Animation functions
  const showBottomSheet = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, backdropOpacity]);

  const hideBottomSheet = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: screenHeight,
        duration: HIDE_ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: HIDE_ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  }, [translateY, backdropOpacity, onClose]);

  // Gesture handlers
  const onGestureEvent = useCallback(
    Animated.event(
      [{ nativeEvent: { translationY: translateY } }],
      { useNativeDriver: true }
    ),
    [translateY]
  );

  const onHandlerStateChange = useCallback((event: any) => {
    if (event.nativeEvent.state === State.END) {
      const { translationY, velocityY } = event.nativeEvent;
      
      if (translationY > GESTURE_THRESHOLD || velocityY > VELOCITY_THRESHOLD) {
        hideBottomSheet();
      } else {
        // Snap back to original position
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  }, [hideBottomSheet, translateY]);

  // Effects
  useEffect(() => {
    if (visible) {
      showBottomSheet();
    } else {
      hideBottomSheet();
    }
  }, [visible, showBottomSheet, hideBottomSheet]);

  // Utility functions
  const formatDate = useCallback((date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  }, []);

  const createTask = useCallback((taskData: NewTask): Task => {
    return {
      id: Date.now().toString(),
      title: taskData.title.trim(),
      category: taskData.category || 'General',
      dueDate: taskData.dueDate || 'No due date'
    };
  }, []);

  // Handlers
  const handleDateChange = useCallback((event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    
    if (selectedDate) {
      setSelectedDate(selectedDate);
      const formattedDate = formatDate(selectedDate);
      setNewTask(prev => ({ ...prev, dueDate: formattedDate }));
      
      if (Platform.OS === 'ios') {
        setShowDatePicker(false);
      }
    }
  }, [formatDate]);

  const handleCategorySelect = useCallback((category: string) => {
    setNewTask(prev => ({ ...prev, category }));
  }, []);

  const handleSaveTask = useCallback(() => {
    if (newTask.title.trim()) {
      const task = createTask(newTask);
      onSave(task);
      resetModal();
    }
  }, [newTask, createTask, onSave]);

  const resetModal = useCallback(() => {
    setNewTask({ title: '', category: '', dueDate: '' });
    setShowDatePicker(false);
    setShowCategorySelect(false);
    setSelectedDate(new Date());
  }, []);

  const hideModal = useCallback(() => {
    hideBottomSheet();
    resetModal();
  }, [hideBottomSheet, resetModal]);

  // Computed values
  const isSaveDisabled = !newTask.title.trim();

  // Render functions
  const renderTaskInput = () => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>Task Title *</Text>
      <TextInput
        style={[styles.textInput, { 
          backgroundColor: theme.surface,
          borderColor: theme.border,
          color: theme.text
        }]}
        placeholder="Enter task title"
        placeholderTextColor={theme.textTertiary}
        value={newTask.title}
        onChangeText={(text) => setNewTask(prev => ({ ...prev, title: text }))}
        autoFocus={true}
        accessibilityLabel="Task title input"
        accessibilityHint="Enter the title for your new task"
      />
    </View>
  );

  const renderCategoryInput = () => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>Context/Category</Text>
      <TouchableOpacity 
        style={[styles.selectButton, {
          backgroundColor: theme.surface,
          borderColor: theme.border
        }]}
        onPress={() => setShowCategorySelect(true)}
        accessibilityLabel={`Category selector. Current selection: ${newTask.category || 'None'}`}
        accessibilityRole="button"
        accessibilityHint="Double tap to open category selection"
      >
        <Text style={[styles.selectButtonText, !newTask.category && styles.placeholderText, {
          color: newTask.category ? theme.text : theme.textTertiary
        }]}>
          {newTask.category || 'Select category'}
        </Text>
        <Ionicons name="chevron-down" size={20} color={theme.textSecondary} />
      </TouchableOpacity>
    </View>
  );

  const renderDateInput = () => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>Due Date</Text>
      <TouchableOpacity 
        style={[styles.selectButton, {
          backgroundColor: theme.surface,
          borderColor: theme.border
        }]}
        onPress={() => setShowDatePicker(true)}
        accessibilityLabel={`Due date selector. Current selection: ${newTask.dueDate || 'None'}`}
        accessibilityRole="button"
        accessibilityHint="Double tap to open date picker"
      >
        <Text style={[styles.selectButtonText, !newTask.dueDate && styles.placeholderText, {
          color: newTask.dueDate ? theme.text : theme.textTertiary
        }]}>
          {newTask.dueDate || 'Select due date'}
        </Text>
        <Ionicons name="calendar-outline" size={20} color={theme.textSecondary} />
      </TouchableOpacity>
    </View>
  );

  const renderModalFooter = () => (
    <View style={styles.modalFooter}>
      <TouchableOpacity 
        style={[styles.cancelButton, {
          borderColor: theme.border
        }]} 
        onPress={hideModal}
        accessibilityLabel="Cancel"
        accessibilityRole="button"
        accessibilityHint="Double tap to cancel and close the modal"
      >
        <Text style={[styles.cancelButtonText, { color: theme.textSecondary }]}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.saveButton, isSaveDisabled && styles.saveButtonDisabled]} 
        onPress={handleSaveTask}
        disabled={isSaveDisabled}
        accessibilityLabel="Save task"
        accessibilityRole="button"
        accessibilityState={{ disabled: isSaveDisabled }}
        accessibilityHint={isSaveDisabled ? "Enter a task title to enable saving" : "Double tap to save the task"}
      >
        <Text style={styles.saveButtonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={hideModal}
    >
      <GestureHandlerRootView style={styles.modalOverlay}>
        <Animated.View 
          style={[
            styles.modalBackdrop,
            { 
              opacity: backdropOpacity,
              backgroundColor: theme.modalOverlay
            }
          ]}
        >
          <TouchableOpacity 
            style={styles.modalBackdropTouchable} 
            activeOpacity={1} 
            onPress={hideModal}
            accessibilityLabel="Close modal"
            accessibilityRole="button"
            accessibilityHint="Double tap to close the modal"
          />
        </Animated.View>
        
        <PanGestureHandler
          ref={panGestureRef}
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View 
            style={[
              styles.bottomSheetContent,
              {
                transform: [{ translateY }]
              }
            ]}
          >
            {/* Drag handle */}
            <View style={{ width: 40, height: 4, backgroundColor: theme.border, borderRadius: 2, alignSelf: 'center', marginTop: 8, marginBottom: 8 }} />
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add New Task</Text>
            <TouchableOpacity 
              onPress={hideModal} 
              style={styles.closeButton}
              accessibilityLabel="Close modal"
              accessibilityRole="button"
              accessibilityHint="Double tap to close the modal"
            >
              <Ionicons name="close" size={24} color={theme.textSecondary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.modalBody}>
            {renderTaskInput()}
            {renderCategoryInput()}
            {renderDateInput()}
          </View>
          
          {renderModalFooter()}
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>

      {/* Category Selection Modal */}
      {showCategorySelect && (
        <View style={[styles.categoryModalOverlay, { backgroundColor: theme.modalOverlay }]}>
          <View style={[styles.categoryModalContent, { backgroundColor: theme.background }]}>
            <View style={[styles.categoryModalHeader, { borderBottomColor: theme.border }]}>
              <Text style={[styles.categoryModalTitle, { color: theme.text }]}>Select Category</Text>
              <TouchableOpacity 
                onPress={() => setShowCategorySelect(false)}
                accessibilityLabel="Close category selection"
                accessibilityRole="button"
                accessibilityHint="Double tap to close category selection"
              >
                <Ionicons name="close" size={24} color={theme.textSecondary} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.categoryList}>
              {CATEGORY_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option.key}
                  style={[styles.categoryOption, { borderBottomColor: theme.divider }]}
                  onPress={() => handleCategorySelect(option.value)}
                  accessibilityLabel={`Select category: ${option.value}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: newTask.category === option.value }}
                  accessibilityHint="Double tap to select this category"
                >
                  <Text style={[styles.categoryOptionText, { color: theme.text }]}>{option.value}</Text>
                  {newTask.category === option.value && (
                    <Ionicons name="checkmark" size={20} color={theme.primary} />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={[styles.categoryModalFooter, { borderTopColor: theme.border }]}>
              <TouchableOpacity 
                style={[styles.categoryDoneButton, { backgroundColor: theme.primary }]}
                onPress={() => setShowCategorySelect(false)}
                accessibilityLabel="Done"
                accessibilityRole="button"
                accessibilityHint="Double tap to confirm category selection"
              >
                <Text style={styles.categoryDoneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* Date Picker */}
      {showDatePicker && (
        <View style={[styles.datePickerOverlay, { backgroundColor: theme.modalOverlay }]}>
          <View style={[styles.datePickerContainer, { backgroundColor: theme.background }]}>
            <View style={[styles.datePickerHeader, { borderBottomColor: theme.border }]}>
              <Text style={[styles.datePickerTitle, { color: theme.text }]}>Select Due Date</Text>
              <TouchableOpacity 
                onPress={() => setShowDatePicker(false)}
                accessibilityLabel="Close date picker"
                accessibilityRole="button"
                accessibilityHint="Double tap to close date picker"
              >
                <Ionicons name="close" size={24} color={theme.textSecondary} />
              </TouchableOpacity>
            </View>
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              minimumDate={new Date()}
              style={[styles.datePicker, { backgroundColor: theme.background }]}
              textColor={theme.text}
            />
            {Platform.OS === 'ios' && (
              <View style={styles.datePickerFooter}>
                <TouchableOpacity 
                  style={[styles.datePickerButton, { backgroundColor: theme.primary }]}
                  onPress={() => setShowDatePicker(false)}
                  accessibilityLabel="Done"
                  accessibilityRole="button"
                  accessibilityHint="Double tap to confirm date selection"
                >
                  <Text style={styles.datePickerButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </Modal>
  );
};

export default AddTaskModal;
