'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import SnackbarComponent from '../components/common/SnackbarComponent';
import { AlertProps } from '@mui/material/Alert';

interface NotificationContextType {
  showNotification: (
    message: string,
    severity?: AlertProps['severity']
  ) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertProps['severity']>('success');

  const showNotification = (
    newMessage: string,
    newSeverity: AlertProps['severity'] = 'success'
  ) => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <SnackbarComponent
        open={open}
        message={message}
        severity={severity}
        handleClose={handleClose}
      />
    </NotificationContext.Provider>
  );
};
