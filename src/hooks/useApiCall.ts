import axios from 'axios';
import { API_READ_ACCESS_TOKEN } from './env';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
});

export async function filmApi(endpoint:string) {
  try {
    const response = await axiosInstance.get(
      endpoint
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
