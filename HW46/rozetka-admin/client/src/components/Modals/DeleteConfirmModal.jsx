import React from 'react';
import { Dialog, Box, Typography, Button } from '@mui/material';

export default function DeleteConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          width: '480px',
          backgroundColor: '#FFFFFF',
          padding: '32px 24px',
          textAlign: 'center',
          boxShadow: 24,
        }}
      >
        <Typography
          sx={{
            color: '#05BC52',
            fontWeight: 700,
            fontSize: '20px',
            fontFamily: 'Inter',
            mb: 4,
          }}
        >
          Are u sure you want to delete this product?
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
          <Button
            onClick={onClose}
            sx={{
              width: '130px',
              height: '56px',
              backgroundColor: '#D9D9D9',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '20px',
              textTransform: 'none',
              fontFamily: 'Inter',
              '&:hover': { backgroundColor: '#b9b9b9' },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            sx={{
              width: '130px',
              height: '56px',
              backgroundColor: '#FF0000',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '20px',
              textTransform: 'none',
              fontFamily: 'Inter',
              '&:hover': { backgroundColor: '#cc0000' },
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
