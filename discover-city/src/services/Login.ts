import axios from 'axios';

interface User {
  email: string;
  password: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}

const API_URL = 'http://localhost:8080';

export const loginUser = async (user: User): Promise<UserResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email: user.email,
      password: user.password,
    });

    return response.data;
  } catch (error: any) {
      throw new Error(error.response.data.message);    
  }
};
