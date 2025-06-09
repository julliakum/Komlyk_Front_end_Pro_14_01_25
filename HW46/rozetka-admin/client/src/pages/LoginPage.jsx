import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#44B26F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          width: '500px',
          padding: '40px 0',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="/logo-rozetka-login.png"
          alt="Rozetka Logo"
          style={{
            width: '240px',
            height: '40px',
            objectFit: 'contain',
            marginTop: '20px',
            marginBottom: '60px',
          }}
        />
        <LoginForm />
      </Box>
    </Box>
  );
}
