import { useContext } from 'react';
import { NotificationListContext } from '@/providers/NotificationListProvider';

// Custom hook for easy access
export const useNotificationList = () => {
  const context = useContext(NotificationListContext);
  if (!context) {
    throw new Error(
      'useNotificationList must be used within a NotificationListProvider'
    );
  }
  return context;
};
    