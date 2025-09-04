import { Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { Note } from '../../types';
import { createNotesTabStyles } from './NotesTab/styles';

// Types
interface NotesTabProps {
  notes: Note[];
}

const NotesTab: React.FC<NotesTabProps> = ({ notes }) => {
  // Theme and styles
  const { theme } = useTheme();
  const styles = createNotesTabStyles(theme);

  // Computed values
  const hasNotes = notes.length > 0;

  // Handlers
  const handleNotePress = useCallback((noteId: string) => {
    // Handle note press if needed
  }, []);

  // Render functions
  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyStateContainer}>
      <Ionicons name="document-text-outline" size={64} color="#ccc" />
      <Text style={styles.emptyStateTitle}>No notes yet</Text>
      <Text style={styles.emptyStateSubtitle}>Create your first note to capture ideas</Text>
    </View>
  ), [styles.emptyStateContainer, styles.emptyStateTitle, styles.emptyStateSubtitle]);

  const renderNoteCard = useCallback((note: Note) => (
    <View key={note.id} style={styles.noteCard}>
      <View style={styles.noteLeft}>
        <View style={styles.noteIcon}>
          <Ionicons name="document-text-outline" size={24} color="#10B981" />
        </View>
        <View style={styles.noteContent}>
          <Text style={styles.noteTitle}>{note.title}</Text>
          <Text style={styles.notePreview}>{note.preview}</Text>
          <Text style={styles.noteDate}>{note.date}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.noteButton}
        onPress={() => handleNotePress(note.id)}
      >
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  ), [styles, handleNotePress]);

  const renderNotes = useCallback(() => (
    notes.map(renderNoteCard)
  ), [notes, renderNoteCard]);
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {hasNotes ? renderNotes() : renderEmptyState()}
    </ScrollView>
  );
};

export default NotesTab;
