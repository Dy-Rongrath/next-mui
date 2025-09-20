'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Button, Box } from '@mui/material';
import { useNotificationList } from '@/hooks/useNotificationList';
import { useLanguage } from '@/providers/LanguageProvider';

// Mock data
const summaryData = [
  { title: 'Total Revenue', value: '$1,250.75' },
  { title: "Today's Orders", value: '32' },
  { title: 'Pending Orders', value: '5' },
  { title: 'Best Selling Item', value: 'Espresso' },
];

export default function Dashboard() {
  const { addNotification } = useNotificationList();
  const { t } = useLanguage();

  const handleNewOrder = () => {
    const orderId = Math.floor(1000 + Math.random() * 9000);
    addNotification(`New order #${orderId} has been placed.`, '/orders');
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          {t('dashboard')}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleNewOrder}>
          Simulate New Order
        </Button>
      </Box>
      <Grid container spacing={3}>
        {summaryData.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h4" component="div">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            {/* You can add a list of recent activities here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
