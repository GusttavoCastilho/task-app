import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

// Types
interface ModalContextType {
  showAddTaskModal: boolean;
  setShowAddTaskModal: (show: boolean) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

// Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Custom hook
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

// Provider component
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  // State
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  // Handlers
  const handleSetShowAddTaskModal = useCallback((show: boolean) => {
    setShowAddTaskModal(show);
  }, []);

  return (
    <ModalContext.Provider value={{ 
      showAddTaskModal, 
      setShowAddTaskModal: handleSetShowAddTaskModal 
    }}>
      {children}
    </ModalContext.Provider>
  );
};
