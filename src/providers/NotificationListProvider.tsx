'use client';

import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of a single notification
export interface Notification {
  id: number;
  message: string;
  timestamp: Date;
  read: boolean;
  link?: string; // Optional link for navigation
}

// Define the context type
interface NotificationListContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (message: string, link?: string) => void;
  markAsRead: (id: number) => void;
  clearAll: () => void;
}

// Export the context so the hook can use it
export const NotificationListContext = createContext<NotificationListContextType | undefined>(undefined);

// The provider component
export const NotificationListProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'Welcome to the Coffee Shop POS!', timestamp: new Date(), read: false },
    { id: 2, message: 'Daily sales report is ready.', timestamp: new Date(Date.now() - 86400000), read: true },
  ]);

  const addNotification = (message: string, link?: string) => {
    const newNotification: Notification = {
      id: Date.now(), // Simple unique ID
      message,
      timestamp: new Date(),
      read: false,
      link,
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    clearAll,
  };

  return (
    <NotificationListContext.Provider value={value}>
      {children}
    </NotificationListContext.Provider>
  );
};

