import React from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ProductCard({ product }) {
  const { title, price, quantity, photo } = product;

  return (
    <Box
      sx={{
        width: '273px',
        height: '376px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Inter',
        overflow: 'hidden',
        p: 2,
      }}
    >
      {photo && (
        <Box
          component="img"
          src={`http://localhost:5000${photo}`}
          alt={title}
          sx={{
            width: '100%',
            height: '139px',
            objectFit: 'contain',
            mb: 1,
          }}
        />
      )}

      <Typography
        sx={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          textAlign: 'center',
          color: '#000',
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '100%',
            textAlign: 'center',
            color: '#FC5B00',
          }}
        >
          {Number(price).toLocaleString()}₴
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '100%',
            textAlign: 'center',
            color: '#000000',
          }}
        >
          Кількість: {quantity}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 1,
          gap: 1,
          color: '#05BC52',
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '100%',
            textAlign: 'center',
          }}
        >
          Готовий до відправки
        </Typography>
      </Box>
    </Box>
  );
}
