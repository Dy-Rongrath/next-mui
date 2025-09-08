'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="lg">
          <Box
            sx={{
              my: 4,
              py: 8,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
              Welcome to Your New App
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
              This page is built with Next.js and your custom Material-UI theme.
              Start building your next great project.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
              <Button variant="outlined" color="secondary" size="large">
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
}

