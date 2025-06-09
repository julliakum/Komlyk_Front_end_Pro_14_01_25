import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/thunks/productsThunks';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Box } from '@mui/material';

export default function PreviewPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: '#44B26F', minHeight: '100vh', pb: 6 }}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          rowGap: '50px',
          columnGap: '95px',
          px: '130px',
          pt: '80px',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
