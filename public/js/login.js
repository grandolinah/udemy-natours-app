/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      // TODO localhost url: 'http://localhost:8000/api/v1/users/login',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully.');

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      // TODO localhost url: 'http://localhost:8000/api/v1/users/logout'
      url: '/api/v1/users/logout'
    });

    if (res.data.status === 'success') location.reload(true);
  } catch (err) {
    show('error', 'Error loggin out! Try again.');
  }
};
