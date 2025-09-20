'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Order } from '@/types';
import { Paper, Typography, Button, Box } from '@mui/material';
import { useLanguage } from '@/providers/LanguageProvider';

const initialRows: Order[] = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    date: new Date().toLocaleDateString(),
    total: 12.5,
    status: 'Completed',
  },
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    date: new Date().toLocaleDateString(),
    total: 8.75,
    status: 'In Progress',
  },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order ID', width: 150 },
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'total', headerName: 'Total', type: 'number', width: 130 },
  { field: 'status', headerName: 'Status', width: 160 },
];

export default function OrdersTable() {
  const [rows, setRows] = React.useState<Order[]>(initialRows);
  const { t } = useLanguage();

  const handleAddOrder = () => {
    const newOrderId = `ORD${String(rows.length + 1).padStart(3, '0')}`;
    const newOrder: Order = {
      id: newOrderId,
      customer: 'New Customer',
      date: new Date().toLocaleDateString(),
      total: Math.round((Math.random() * 20 + 5) * 100) / 100,
      status: 'Pending',
    };
    setRows((prevRows) => [...prevRows, newOrder]);
  };

  return (
    <Paper style={{ height: 600, width: '100%' }}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1">
          {t('orders')}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddOrder}>
          Add New Order
        </Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </Paper>
  );
}
