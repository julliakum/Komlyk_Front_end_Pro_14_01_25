import React, { Component } from 'react';
import AuthForm from './components/AuthForm/index';
import TodoList from './components/TodoList/index';

class App extends Component {
  state = {
    isAuthenticated: !!sessionStorage.getItem('login')
  };

  handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      sessionStorage.setItem('login', username);
      this.setState({ isAuthenticated: true });
    } else {
      alert('Невірний логін або пароль');
    }
  };

  render() {
    return this.state.isAuthenticated ? (
      <TodoList />
    ) : (
      <AuthForm onLogin={this.handleLogin} />
    );
  }
}

export default App;
