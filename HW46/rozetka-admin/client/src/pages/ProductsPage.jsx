import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductTable from '../components/ProductTable';
import EditProductModal from '../components/Modals/EditProductModal';
import AddProductModal from '../components/Modals/AddProductModal';
import DeleteConfirmModal from '../components/Modals/DeleteConfirmModal';
import {
  addProductToServer,
  deleteProductFromServer,
  updateProductOnServer,
} from '../redux/thunks/productsThunks';
import { Box, Button, Typography } from '@mui/material';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedProduct?.id) {
      dispatch(deleteProductFromServer(selectedProduct.id));
    }
    setIsDeleteOpen(false);
  };

  const handleUpdate = (updatedValues) => {
    dispatch(updateProductOnServer(updatedValues));
    setIsEditOpen(false);
  };

  const handleAdd = (formData) => {
    dispatch(addProductToServer(formData));
    setIsAddOpen(false);
  };

  const goToPreview = () => {
    navigate('/preview');
  };

  return (
    <Box sx={{ backgroundColor: '#44B26F', minHeight: '100vh', pb: 6 }}>
      <Header />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: '40px',
          mt: 2,
          mb: 4,
        }}
      >
        <Button
          onClick={goToPreview}
          sx={{
            width: '179px',
            height: '52px',
            backgroundColor: '#FFFFFF',
            color: '#05BC52',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '100%',
            textTransform: 'none',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          startIcon={<span role="img" aria-label="preview">👤</span>}
        >
          Preview
        </Button>

        <Button
          onClick={() => setIsAddOpen(true)}
          sx={{
            width: '179px',
            height: '52px',
            backgroundColor: '#FFFFFF',
            color: '#05BC52',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '100%',
            textTransform: 'none',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          startIcon={<span style={{ fontSize: '24px' }}>＋</span>}
        >
          Add product
        </Button>
      </Box>

      <Typography
        variant="h3"
        align="center"
        color="#FFFFFF"
        mb={4}
        fontWeight={700}
      >
        Products
      </Typography>

      <ProductTable onEdit={handleEdit} onDelete={handleDeleteClick} />

      <EditProductModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        initialValues={selectedProduct || {}}
        onSubmit={handleUpdate}
      />

      <AddProductModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAdd}
      />

      <DeleteConfirmModal
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </Box>
  );
}
