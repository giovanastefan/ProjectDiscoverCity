import axios from 'axios';

interface User {
  name: string;
  email: string;
  password: string;
}

const API_URL = 'http://localhost:8080';

export const createUser = async (user: User) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred while creating the user.');
    }
  }
};
