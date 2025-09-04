# 📱 Task App - Productivity Manager

<div align="center">

**A modern task management application built with React Native and Expo**

[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Zustand](https://img.shields.io/badge/Zustand-FF6B6B?style=for-the-badge&logo=zustand&logoColor=white)](https://zustand-demo.pmnd.rs)

[🚀 Try it on Expo Snack](#-try-it-now) • [📖 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🏗️ Architecture](#️-architecture)

</div>

---

## ✨ Features

### 🎯 **Core Functionality**
- **Task Management**: Create, edit, complete, and delete tasks with ease
- **Smart Categories**: Organize tasks by work, personal, shopping, and more
- **Due Date Tracking**: Set and manage task deadlines with visual indicators
- **Status Management**: Track task progress with pending, completed, and overdue states

### 📅 **Productivity Tools**
- **Reminders**: Set up timely notifications for important tasks
- **Meetings**: Schedule and manage meetings with participant tracking
- **Notes**: Quick note-taking with preview functionality
- **Undo Functionality**: Accidentally deleted something? Undo it instantly!

### 🎨 **User Experience**
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Dark/Light Theme**: Automatic theme switching based on system preferences
- **Drag & Drop**: Reorder tasks by simply dragging them
- **Haptic Feedback**: Tactile responses for better user interaction
- **Responsive Design**: Works perfectly on phones and tablets

### 🔧 **Technical Features**
- **Offline First**: All data is stored locally using AsyncStorage
- **State Management**: Efficient state management with Zustand
- **Type Safety**: Full TypeScript support for better development experience
- **Cross-Platform**: Runs on iOS, Android, and Web
- **Performance Optimized**: Smooth 60fps animations and interactions

---

## 🛠️ Tech Stack

### **Frontend**
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **React Native Reanimated** - Smooth animations
- **React Native Gesture Handler** - Touch interactions

### **State Management**
- **Zustand** - Lightweight state management
- **AsyncStorage** - Local data persistence

### **UI/UX**
- **Expo Vector Icons** - Icon library
- **Custom Theme System** - Dark/light mode support
- **React Native Blur** - Visual effects
- **Expo Haptics** - Tactile feedback

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Expo Router** - File-based routing

---

## 🚀 Try it Now

### **Expo Snack (Recommended)**
[![Open in Snack](https://img.shields.io/badge/Open%20in%20Snack-000000?style=for-the-badge&logo=expo&logoColor=white)](https://snack.expo.dev)

Click the button above to try the app directly in your browser or on your mobile device using the Expo Go app.

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-app.git
   cd task-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS Simulator
   npm run ios
   
   # Android Emulator
   npm run android
   
   # Web Browser
   npm run web
   ```

---

## 🏗️ Architecture

### **Project Structure**

```
task-app/
├── src/
│   ├── app/                    # Expo Router pages
│   │   ├── (tabs)/            # Tab navigation screens
│   │   │   ├── home.tsx       # Home dashboard
│   │   │   ├── add.tsx        # Add new items
│   │   │   ├── insights.tsx   # Analytics & insights
│   │   │   └── profile.tsx    # User profile
│   │   └── _layout.tsx        # Root layout
│   ├── components/            # Reusable components
│   │   ├── icons/            # Custom icon components
│   │   ├── modals/           # Modal components
│   │   ├── notifications/    # Notification components
│   │   └── tabs/             # Tab-specific components
│   ├── contexts/             # React contexts
│   │   ├── ModalContext.tsx  # Modal state management
│   │   └── ThemeContext.tsx  # Theme management
│   ├── hooks/                # Custom React hooks
│   ├── services/             # External services
│   │   └── storageService.ts # Local storage management
│   ├── stores/               # Zustand stores
│   │   └── taskStore.ts      # Main app state
│   ├── styles/               # Global styles
│   └── types/                # TypeScript type definitions
├── assets/                   # Static assets
├── .github/workflows/        # CI/CD workflows
└── docs/                     # Documentation
```

### **Key Design Decisions**

- **Expo Router**: File-based routing for better organization and type safety
- **Zustand**: Lightweight state management with minimal boilerplate
- **TypeScript**: Full type safety across the entire application
- **Context API**: Theme and modal state management
- **AsyncStorage**: Local data persistence for offline-first experience
- **Custom Hooks**: Reusable logic for animations and state management

---

## 🎯 Usage Guide

### **Creating Tasks**
1. Tap the **+** button on the home screen
2. Fill in the task details:
   - **Title**: What needs to be done
   - **Category**: Work, Personal, Shopping, etc.
   - **Due Date**: When it needs to be completed
3. Tap **Save** to create the task

### **Managing Tasks**
- **Complete**: Tap the circle next to the task
- **Edit**: Long press on a task to edit
- **Delete**: Swipe left and tap delete
- **Reorder**: Drag tasks up or down to reorder

### **Using Other Features**
- **Reminders**: Set up notifications for important tasks
- **Meetings**: Schedule meetings with participants
- **Notes**: Take quick notes with preview functionality
- **Undo**: Accidentally deleted something? Use the undo notification

---

## 🔧 Configuration

### **Environment Setup**
The app works out of the box with no additional configuration required. All data is stored locally on the device.

### **Customization**
- **Themes**: Modify `src/contexts/ThemeContext.tsx` to customize colors
- **Categories**: Update `src/constants/index.ts` to add new task categories
- **Icons**: Add new icons in `src/components/icons/`

---

## 🚀 Deployment

### **Web Deployment**
```bash
# Build for web
npm run build:web

# The build will be in the 'dist' folder
# Deploy the contents to any static hosting service
```

### **Mobile Deployment**
```bash
# Build for production
expo build:android
expo build:ios

# Or use EAS Build
eas build --platform all
```

---

## 🚀 Development Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### **Getting Started**
```bash
# Clone the repository
git clone https://github.com/yourusername/task-app.git
cd task-app

# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platform
npm run ios     # iOS Simulator
npm run android # Android Emulator
npm run web     # Web Browser
```

### **Code Quality**
- **ESLint**: Configured with Expo rules
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting (recommended)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Built with React Native, Expo, and TypeScript**

</div>