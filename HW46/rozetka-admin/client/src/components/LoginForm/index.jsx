import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginRequest } from '../../services/auth';

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await loginRequest({ username, password });
      localStorage.setItem('token', data.token);
      navigate('/products');
    } catch (error) {
      setSubmitError('Невірний логін або пароль');
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) errors.username = 'Обовʼязково';
    if (!values.password) errors.password = 'Обовʼязково';
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            width: '277px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <Field name="username">
            {({ input, meta }) => (
              <TextField
                {...input}
                placeholder="User Name"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#D9D9D9',
                  input: {
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#44B26F',
                    height: '56px',
                    padding: '0 14px',
                  },
                  '& fieldset': { border: 'none' },
                }}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>

          <Field name="password">
            {({ input, meta }) => (
              <TextField
                {...input}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#D9D9D9',
                  input: {
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#44B26F',
                    height: '56px',
                    padding: '0 14px',
                  },
                  '& fieldset': { border: 'none' },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                        sx={{ color: '#44B26F' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>

          {submitError && (
            <Typography sx={{ color: 'red', fontSize: '14px' }}>
              {submitError}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#44B26F',
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              height: '56px',
              boxShadow: 'none',
              borderRadius: 0,
              '&:hover': { backgroundColor: '#369c5d' },
              marginBottom: '80px',
            }}
          >
            Login
          </Button>

        </form>
      )}
    />
  );
}
