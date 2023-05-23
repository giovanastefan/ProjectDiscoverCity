import axios from 'axios';

interface User {
  name: string;
  email: string;
  password: string;
}

const API_URL = 'http://localhost:8080';

export const createUser = async (userData: User) => {
  try {
    const response = await axios.post(`${API_URL}/usuario`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
