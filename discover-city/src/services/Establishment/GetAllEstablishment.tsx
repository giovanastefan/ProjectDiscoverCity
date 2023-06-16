import axios from 'axios';
import { Establishment } from '../../types/Establishment';

const API_URL = 'http://localhost:8080';

export const getAllEstablishment = async (): Promise<Array<Establishment>> => {
    try {
      const response = await axios.get(`${API_URL}/establishments`);
  
      return response.data as Array<Establishment>; // Cast response.data to an array of Establishments
    } catch (error: any) {
      throw new Error('An error occurred while getting all establishments.');
    }
  };
  