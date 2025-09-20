'use client';

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

interface SnackbarComponentProps {
  open: boolean;
  message: string;
  severity: AlertProps['severity'];
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export default function SnackbarComponent({
  open,
  message,
  severity,
  handleClose,
}: SnackbarComponentProps) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
