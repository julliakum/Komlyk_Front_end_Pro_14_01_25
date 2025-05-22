import React, { Component } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

class TodoForm extends Component {
  state = {
    title: '',
    priority: 'Low',
    done: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({ title: '', priority: 'Low', done: false });
  };

  render() {
    return (
      <Box component="form" onSubmit={this.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="title"
          label="Назва задачі"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <TextField
          select
          fullWidth
          margin="normal"
          name="priority"
          label="Пріоритет"
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Додати задачу
        </Button>
      </Box>
    );
  }
}

export default TodoForm;
