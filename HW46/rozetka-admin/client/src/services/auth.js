export const loginRequest = async ({ username, password }) => {
  // Логин "admin", пароль "12345"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '12345') {
        resolve({ token: 'mocked-jwt-token' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
};
