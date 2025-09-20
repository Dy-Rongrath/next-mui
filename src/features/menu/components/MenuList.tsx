'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { MenuItem as MenuItemType } from '@/types';
import { useLanguage } from '@/providers/LanguageProvider';
import { useNotification } from '@/providers/NotificationProvider';


const initialMenuItems: MenuItemType[] = [
  { id: 'M001', name: 'Espresso', category: 'Coffee', price: 2.5, stock: 100 },
  { id: 'M002', name: 'Latte', category: 'Coffee', price: 3.5, stock: 80 },
  { id: 'M003', name: 'Croissant', category: 'Pastry', price: 2.75, stock: 50 },
];

export default function MenuList() {
  const [menuItems, setMenuItems] = React.useState<MenuItemType[]>(initialMenuItems);
  const [open, setOpen] = React.useState(false);
  const [newItem, setNewItem] = React.useState<Omit<MenuItemType, 'id'>>({ name: '', category: '', price: 0, stock: 0 });
  const { t } = useLanguage();
  const { showNotification } = useNotification();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset form
    setNewItem({ name: '', category: '', price: 0, stock: 0 });
  };

  const handleAddItem = () => {
    const newMenuItem: MenuItemType = {
        id: `M${String(menuItems.length + 1).padStart(3, '0')}`,
        ...newItem
    }
    setMenuItems(prevItems => [...prevItems, newMenuItem]);
    showNotification(`Successfully added "${newMenuItem.name}" to the menu!`, 'success');
    handleClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewItem(prev => ({ ...prev, [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value }));
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
          {t('menu')}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add New Item
        </Button>
      </Box>
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
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
                <Typography variant="body2">Stock: {item.stock}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Item Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Menu Item</DialogTitle>
        <DialogContent>
            <TextField autoFocus margin="dense" name="name" label="Item Name" type="text" fullWidth variant="outlined" value={newItem.name} onChange={handleInputChange}/>
            <TextField margin="dense" name="category" label="Category" type="text" fullWidth variant="outlined" value={newItem.category} onChange={handleInputChange}/>
            <TextField margin="dense" name="price" label="Price" type="number" fullWidth variant="outlined" value={newItem.price} onChange={handleInputChange}/>
            <TextField margin="dense" name="stock" label="Stock" type="number" fullWidth variant="outlined" value={newItem.stock} onChange={handleInputChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddItem}>Add Item</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

