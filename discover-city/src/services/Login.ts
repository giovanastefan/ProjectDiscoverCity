import axios from 'axios';

interface User {
  email: string;
  password: string;
}

const API_URL = 'http://localhost:8080';

export const loginUser = async (user: User) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email: user.email,
      senha: user.password,
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred while login the user.');
    }
  }
};
