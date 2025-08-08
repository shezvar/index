# Project Lock System

This document explains how the project lock system works in the portfolio website.

## Overview

The lock system allows you to protect certain projects with a password, making them accessible only to users who have the correct password.

## How to Lock a Project

### 1. Update the JSON Configuration

In `src/app/data/project.json`, add the `isLock: true` property to any project you want to lock:

```json
{
  "id": 3,
  "src": "/assets/dtalearner/fme-cover.png",
  "alt": "FME-DTA Learner Platform",
  "type": "Case Study",
  "title": "FME Digital Training Academy: Empowering 20,000 Nigerian Learners",
  "description": "A personalized learning platform that bridges the digital skills gap through blended learning and real-time support",
  "link": "/projects/dtalearner",
  "highlightWord": "Digital Training Academy",
  "tags": ["Learning Platform", "UX Research"],
  "isLock": true  // This locks the project
}
```

### 2. Update Project Pages

For any project page that should have lock functionality, wrap the content with the `ProjectLockWrapper` component:

```tsx
import ProjectLockWrapper from "@/components/ProjectLockWrapper";

export default function MyProject() {
  return (
    <ProjectLockWrapper projectId={3}> {/* Use the project ID */}
      <div className="min-h-screen flex flex-col w-full">
        {/* Your project content here */}
      </div>
    </ProjectLockWrapper>
  );
}
```

## Features

### Visual Indicators

- **Project Cards**: Locked projects show a "Locked" badge with a lock icon on the project cards
- **Lock Screen**: When accessing a locked project, users see a clean lock screen with password input

### Lock Screen Features

- **Password Input**: Secure password field with show/hide toggle
- **Error Handling**: Clear error messages for incorrect passwords
- **Keyboard Support**: Press Enter to submit password
- **Responsive Design**: Works on all device sizes
- **Consistent Styling**: Matches the overall design system

### Default Password

The default password is `12345`. You can change this in the `LockedPage` component:

```tsx
// In src/components/LockedPage.tsx
const correctPassword = 'your-custom-password'; // Change this
```

## Components

### ProjectLockWrapper

A reusable wrapper component that:
- Finds project data by ID
- Handles project not found scenarios
- Wraps content with lock functionality

### LockedPage

The core lock component that:
- Manages password state
- Handles authentication
- Shows lock screen or project content

### Updated ProjectItem

The project card component now supports:
- `isLock` property display
- Lock badge with icon
- Consistent styling with existing badges

## Usage Examples

### Locking Multiple Projects

You can lock multiple projects by setting `isLock: true` in the JSON:

```json
[
  {
    "id": 1,
    "title": "Project 1",
    "isLock": false  // Unlocked
  },
  {
    "id": 2,
    "title": "Project 2", 
    "isLock": true   // Locked
  },
  {
    "id": 3,
    "title": "Project 3",
    "isLock": true   // Locked
  }
]
```

### Adding Lock to New Projects

1. Add project data to `project.json` with `isLock: true`
2. Create project page file (e.g., `src/app/projects/myproject/page.tsx`)
3. Wrap content with `ProjectLockWrapper`
4. Set the correct `projectId` in the wrapper

## Security Notes

- The password is currently stored in the client-side code
- For production use, consider implementing server-side authentication
- The lock system is primarily for portfolio presentation purposes
- Consider using environment variables for passwords in production

## Customization

### Changing Password

Edit `src/components/LockedPage.tsx`:

```tsx
const correctPassword = 'your-new-password';
```

### Customizing Lock Screen

Modify the lock screen UI in `src/components/LockedPage.tsx`:

```tsx
// Customize the lock screen appearance
<div className="min-h-screen flex items-center justify-center bg-stone-50">
  <Card className="p-8 max-w-md w-full mx-4 shadow-xl">
    {/* Your custom lock screen content */}
  </Card>
</div>
```

### Styling Lock Badge

Modify the lock badge in `src/components/portfolioCard.tsx`:

```tsx
{isLock && (
  <span className="absolute top-2 right-2 text-xs bg-stone-600 px-2 py-1 rounded-md text-stone-100 font-semibold flex items-center gap-1">
    <Lock size={12} />
    Locked
  </span>
)}
```
