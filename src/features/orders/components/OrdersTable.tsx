'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Order } from '@/types';
import { Paper, Typography } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order ID', width: 150 },
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'total', headerName: 'Total', type: 'number', width: 130 },
  { field: 'status', headerName: 'Status', width: 160 },
];

const rows: Order[] = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    date: '2024-07-28',
    total: 12.5,
    status: 'Completed',
  },
  {
    id: 'ORD002',
    customer: 'Jane Smith',
    date: '2024-07-28',
    total: 8.75,
    status: 'In Progress',
  },
  {
    id: 'ORD003',
    customer: 'Mike Johnson',
    date: '2024-07-27',
    total: 22.0,
    status: 'Completed',
  },
  {
    id: 'ORD004',
    customer: 'Emily Davis',
    date: '2024-07-27',
    total: 5.5,
    status: 'Pending',
  },
  {
    id: 'ORD005',
    customer: 'Chris Brown',
    date: '2024-07-26',
    total: 15.0,
    status: 'Cancelled',
  },
];

export default function OrdersTable() {
  return (
    <Paper style={{ height: 600, width: '100%' }}>
      <Typography variant="h4" component="h1" sx={{ p: 2 }} gutterBottom>
        Manage Orders
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </Paper>
  );
}
