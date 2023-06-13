import axios from 'axios';
import { Establishment } from '../../types/Establishment';

const API_URL = 'http://localhost:8080';

export const loginUser = async (categories: string[]): Promise<Establishment[]> => {
  try {
    const response = await axios.post(`${API_URL}/search//establishmentsByCategories?categories=`, {
      categories: categories
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred while search the establishment');
    }
  }
};
