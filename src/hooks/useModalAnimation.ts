import { useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { ANIMATION_DURATION } from '../constants';

export const useModalAnimation = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  const showModal = () => {
    setShowAddTaskModal(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setShowAddTaskModal(false);
    });
  };

  return {
    showAddTaskModal,
    setShowAddTaskModal,
    slideAnim,
    showModal,
    hideModal
  };
};
