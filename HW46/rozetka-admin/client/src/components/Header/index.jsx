import React from 'react';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: '#44B26F',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        px: 2,
      }}
    >
      <img
        src="/logo-rozetka.png"
        alt="Rozetka Logo"
        style={{ height: '40px', objectFit: 'contain' }}
      />
    </Box>
  );
}
