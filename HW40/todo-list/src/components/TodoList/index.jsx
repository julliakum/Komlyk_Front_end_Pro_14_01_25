import React, { Component } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
  };

  updateTodo = (index, updated) => {
    const todos = [...this.state.todos];
    todos[index] = updated;
    this.setState({ todos });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Список справ
        </Typography>

        <TodoForm onAdd={this.addTodo} />

        <Box sx={{ mt: 3 }}>
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              index={i}
              todo={todo}
              onUpdate={this.updateTodo}
              onDelete={this.deleteTodo}
            />
          ))}
        </Box>

        <Typography sx={{ mt: 2 }}>
          Усього задач: {todos.length}
        </Typography>
      </Container>
    );
  }
}

export default TodoList;
