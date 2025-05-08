import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rat-intent-hideously.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2UyYjI3NTBlNTQwNTc4MWE5NjY4ZGQiLCJpYXQiOjE3NDI5MTAwNjl9.C-9rPuboxwKy6ufgn2diZ3ULkWUIsINzV9ttDAh0570',
    'ngrok-skip-browser-warning': true
  },
});

export default api;
