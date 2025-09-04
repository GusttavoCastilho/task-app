import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createUndoNotificationStyles } from './UndoNotification/styles';

interface UndoNotificationProps {
  visible: boolean;
  taskTitle: string;
  onUndo: () => void;
  onDismiss: () => void;
  duration?: number; // in milliseconds
}

const { width: screenWidth } = Dimensions.get('window');

const UndoNotification: React.FC<UndoNotificationProps> = ({
  visible,
  taskTitle,
  onUndo,
  onDismiss,
  duration = 7000
}) => {
  const { theme } = useTheme();
  const styles = createUndoNotificationStyles(theme);
  
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visible) {
      // Reset progress animation
      progressAnim.setValue(0);
      
      // Slide in animation
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start();

      // Start progress animation (border filling)
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();

      // Auto dismiss after duration
      timeoutRef.current = setTimeout(() => {
        handleDismiss();
      }, duration);
    } else {
      // Slide out animation
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [visible, duration]);

  const handleDismiss = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onDismiss();
  };

  const handleUndo = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onUndo();
  };

  const progressStyle = {
    width: progressAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.undoNotification,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={styles.undoContent}>
        <View style={styles.undoTextContainer}>
          <Text style={[styles.undoText, { color: theme.text }]}>
            Task "{taskTitle}" completed
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.undoButton, { backgroundColor: theme.primary }]}
          onPress={handleUndo}
          activeOpacity={0.8}
          accessibilityLabel={`Undo completion of task: ${taskTitle}`}
          accessibilityRole="button"
          accessibilityHint="Double tap to undo the task completion"
        >
          <Text style={[styles.undoButtonText, { color: theme.white }]}>
            UNDO
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Progress bar at bottom */}
      <View style={[styles.undoProgressContainer, { backgroundColor: theme.border }]}>
        <Animated.View
          style={[
            styles.undoProgressBar,
            {
              backgroundColor: theme.primary,
              ...progressStyle,
            },
          ]}
        />
      </View>
    </Animated.View>
  );
};

export default UndoNotification;
