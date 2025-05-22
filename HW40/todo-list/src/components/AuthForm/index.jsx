import React, { Component } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

class AuthForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  };

  render() {
    return (
      <Container maxWidth="xs">
        <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom>Авторизація</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Логін"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Пароль"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Увійти
          </Button>
        </Box>
      </Container>
    );
  }
}

export default AuthForm;
