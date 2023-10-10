import axios from 'axios';
import http from 'http';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === http.STATUS_CODES.NOT_FOUND) {
      throw new Error('Data not found');
    }
  } else {
    console.error('Error: ', error);
  }
};
