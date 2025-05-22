import React, { Component } from 'react';
import { Box, TextField, MenuItem, Checkbox, FormControlLabel, Button } from '@mui/material';

class TodoItem extends Component {
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const updated = { ...this.props.todo, [name]: newValue };
    this.props.onUpdate(this.props.index, updated);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.index);
  };

  render() {
    const { title, priority, done } = this.props.todo;

    return (
      <Box
        sx={{
          p: 2,
          mb: 2,
          border: '1px solid #ccc',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <TextField
          name="title"
          label="Назва"
          value={title}
          onChange={this.handleChange}
        />
        <TextField
          name="priority"
          label="Пріоритет"
          select
          value={priority}
          onChange={this.handleChange}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              name="done"
              checked={done}
              onChange={this.handleChange}
            />
          }
          label="Завершено"
        />
        <Button variant="outlined" color="error" onClick={this.handleDelete}>
          Видалити
        </Button>
      </Box>
    );
  }
}

export default TodoItem;
