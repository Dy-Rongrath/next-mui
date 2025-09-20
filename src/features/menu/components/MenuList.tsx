'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import { MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  { id: 'M001', name: 'Espresso', category: 'Coffee', price: 2.5, stock: 100 },
  { id: 'M002', name: 'Latte', category: 'Coffee', price: 3.5, stock: 80 },
  { id: 'M003', name: 'Croissant', category: 'Pastry', price: 2.75, stock: 50 },
  { id: 'M004', name: 'Muffin', category: 'Pastry', price: 2.25, stock: 60 },
  { id: 'M005', name: 'Iced Tea', category: 'Beverage', price: 2.0, stock: 120 },
];

export default function MenuList() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Menu Items
        </Typography>
        <Button variant="contained" color="primary">
          Add New Item
        </Button>
      </Box>
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.category}
                </Typography>
                <Typography variant="body2">
                  Price: ${item.price.toFixed(2)}
                </Typography>
                <Typography variant="body2">
                  Stock: {item.stock}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

