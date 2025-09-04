import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '../../contexts/ThemeContext';
import { Task } from '../../types';
import { Icon } from '../icons';
import { createTaskCardStyles } from './TaskCard/styles';

// Constants
const CARD_HEIGHT = 80;
const ANIMATION_DURATION = 400;
const CHECKBOX_ANIMATION_DELAY = 1400;
const DELETE_DELAY = 1800;
const MAX_TASKS = 10;

// Types
interface TaskCardProps {
  task: Task;
  index: number;
  onReorder: (fromIndex: number, toIndex: number) => void;
  onPress?: () => void;
  onDelete?: (taskId: string) => void;
  isNew?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  index, 
  onReorder, 
  onPress, 
  onDelete, 
  isNew = false 
}) => {
  // State
  const [isAnimatingCheckbox, setIsAnimatingCheckbox] = useState(false);
  
  // Theme and styles
  const { theme } = useTheme();
  const styles = createTaskCardStyles(theme);
  
  // Drag animation values
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const isDragging = useSharedValue(false);
  
  // Entry animation values
  const entryTranslateY = useSharedValue(isNew ? -30 : 0);
  const entryOpacity = useSharedValue(isNew ? 0 : 1);
  
  // Checkbox and removal animation values
  const checkboxScale = useSharedValue(1);
  const cardTranslateX = useSharedValue(0);
  const cardOpacity = useSharedValue(1);
  const isAnimating = useSharedValue(false);
  const showCheckIcon = useSharedValue(false);

  // Effects
  useEffect(() => {
    if (isNew) {
      animateEntry();
    }
  }, [isNew]);

  // Animation functions
  const animateEntry = useCallback(() => {
    entryTranslateY.value = -30;
    entryOpacity.value = 0;
    
    setTimeout(() => {
      entryTranslateY.value = withTiming(0, { 
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.quad)
      });
      entryOpacity.value = withTiming(1, { 
        duration: 300,
        easing: Easing.out(Easing.quad)
      });
    }, 50);
  }, []);

  const animateCheckbox = useCallback(() => {
    showCheckIcon.value = true;
    checkboxScale.value = withSequence(
      withTiming(1.3, { duration: 200 }),
      withTiming(1, { duration: 200 })
    );
  }, []);

  const animateCardRemoval = useCallback(() => {
    cardTranslateX.value = withDelay(CHECKBOX_ANIMATION_DELAY, withTiming(-400, { duration: ANIMATION_DURATION }));
    cardOpacity.value = withDelay(CHECKBOX_ANIMATION_DELAY, withTiming(0, { duration: ANIMATION_DURATION }));
  }, []);

  // Handlers
  const handleCheckboxPress = useCallback(() => {
    if (isAnimating.value) return;
    
    isAnimating.value = true;
    setIsAnimatingCheckbox(true);
    
    animateCheckbox();
    
    setTimeout(() => {
      setIsAnimatingCheckbox(false);
    }, 1000);
    
    animateCardRemoval();
    
    setTimeout(() => {
      onDelete?.(task.id);
    }, DELETE_DELAY);
  }, [onDelete, task.id, animateCheckbox, animateCardRemoval]);

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {
      isDragging.value = true;
      scale.value = withSpring(1.05);
      opacity.value = withSpring(0.9);
    },
    onActive: (event) => {
      translateY.value = event.translationY;
    },
    onEnd: (event) => {
      const newIndex = Math.round(index + event.translationY / CARD_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(newIndex, MAX_TASKS));
      
      if (clampedIndex !== index) {
        runOnJS(onReorder)(index, clampedIndex);
      }
      
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
      opacity.value = withSpring(1);
      isDragging.value = false;
    },
  });

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value + entryTranslateY.value },
      { translateX: cardTranslateX.value },
      { scale: scale.value },
    ],
    opacity: (opacity.value * cardOpacity.value * entryOpacity.value),
    zIndex: isDragging.value ? 1000 : 1,
  }));

  const checkboxAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: checkboxScale.value }],
  }));

  // Computed values
  const isCompleted = task.completed || task.status === 'completed';
  const isOverdue = task.status === 'overdue' && !isCompleted;

  // Render functions
  const renderTaskIcon = () => (
    <View style={styles.taskIcon}>
      <Icon name="check1" size={16} color={theme.text} />
    </View>
  );

  const renderTaskContent = () => (
    <View style={styles.taskContent}>
      <Text style={[styles.taskTitle, { color: theme.text }]}>
        {task.title}
      </Text>
      <View style={styles.taskMeta}>
        <View style={styles.taskCategory}>
          <Icon name="folder" size={14} color={theme.textSecondary} />
          <Text style={[styles.categoryText, { color: theme.textSecondary }]}>
            {task.category}
          </Text>
        </View>
      </View>
      <View style={styles.taskDate}>
        <Icon name="calendar" size={14} color={theme.textSecondary} />
        <Text style={[styles.dateText, { color: theme.textSecondary }]}>
          {task.dueDate}
        </Text>
      </View>
      {isOverdue && (
        <View style={styles.overdueStatus}>
          <View style={[styles.overdueDot, { backgroundColor: theme.error }]} />
          <Text style={[styles.overdueText, { color: theme.error }]}>Overdue</Text>
        </View>
      )}
    </View>
  );

  const renderCheckbox = () => (
    <Animated.View style={checkboxAnimatedStyle}>
      <TouchableOpacity 
        style={[
          styles.checkbox, 
          {
            borderColor: theme.border,
            backgroundColor: theme.surface
          },
          (isCompleted || isAnimatingCheckbox) && {
            backgroundColor: theme.success,
            borderColor: theme.success
          }
        ]}
        onPress={handleCheckboxPress}
        activeOpacity={0.7}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        {(isCompleted || isAnimatingCheckbox) && (
          <Icon name="check2" size={10} color={theme.white} />
        )}
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.taskCard, animatedStyle]}>
        <View style={styles.taskCardContent}>
          <TouchableOpacity
            style={styles.taskLeft}
            onPress={onPress}
            activeOpacity={0.7}
          >
            {renderTaskIcon()}
            {renderTaskContent()}
          </TouchableOpacity>
          <View style={styles.taskRight}>
            {renderCheckbox()}
          </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default TaskCard;
