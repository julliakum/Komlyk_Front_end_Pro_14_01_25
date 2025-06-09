import React, { useState } from 'react';
import {
  Dialog,
  IconButton,
  Typography,
  Button,
  Box,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form, Field } from 'react-final-form';

export default function AddProductModal({ open, onClose, onSubmit }) {
  const [photoFile, setPhotoFile] = useState(null);

  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      formData.append(key, val);
    });
    if (photoFile) {
      formData.append('photo', photoFile);
    }
    onSubmit(formData);
    setPhotoFile(null);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '429px',
          height: '600px',
          backgroundColor: '#D9D9D9',
          borderRadius: 0,
          overflow: 'hidden',
          boxSizing: 'border-box',
        },
      }}
    >
      {/* Header */}

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '43px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            pl: '16px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '100%',
              color: '#D9D9D9',
            }}
          >
            Add product
          </Typography>
          
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: '9px',
              right: '30px',
              padding: 0,
              color: '#000000',
            }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Box>


      <Form
        onSubmit={handleSubmit}
        initialValues={{ category: '', title: '', quantity: '', price: '', description: '' }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} style={{ overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
              }}
            >

              {["category", "title", "quantity", "price"].map((name) => (
                <Box key={name}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#FFFFFF',
                      mb: '4px',
                    }}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Typography>
                  <Field name={name}>
                    {({ input }) => (
                      <TextField
                        {...input}
                        type={["quantity", "price"].includes(name) ? "number" : "text"}
                        variant="outlined"
                        fullWidth
                        sx={{
                          width: '360px',
                          height: '29px',
                          backgroundColor: '#FFFFFF',
                          borderRadius: 0,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 0,
                            padding: 0,
                            '& fieldset': { border: 'none' },
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                          },
                          '& input': {
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            fontSize: '14px',
                            color: '#05BC52',
                            padding: '6px 8px',
                          },
                        }}
                      />
                    )}
                  </Field>
                </Box>
              ))}


              {/* Description */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    mb: '4px',
                  }}
                >
                  Description
                </Typography>
                <Field name="description">
                  {({ input }) => (
                    <TextField
                      {...input}
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      sx={{
                        width: '361px',
                        height: '80px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 0,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 0,
                          padding: 0,
                          '& fieldset': { border: 'none' },
                          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        },
                        '& textarea': {
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '14px',
                          color: '#05BC52',
                          padding: '8px',
                          textAlign: 'left',
                        },
                      }}
                    />
                  )}
                </Field>
              </Box>

              {/* Photo upload */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    mb: '4px',
                  }}
                >
                  Photo
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoFile(e.target.files[0])}
                  style={{ backgroundColor: '#FFFFFF', padding: '8px' }}
                />
              </Box>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                mt: '4px',
                mb: '16px',
              }}
            >
              <Button
                onClick={onClose}
                sx={{
                  width: '115px',
                  height: '33px',
                  backgroundColor: '#726969',
                  color: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: '#5a5a5a' },
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                sx={{
                  width: '115px',
                  height: '33px',
                  backgroundColor: '#44B26F',
                  color: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: '#369c5d' },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      />
    </Dialog>
  );
}
