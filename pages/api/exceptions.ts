import axios from 'axios';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      throw new Error('Data not found');
    }
  } else {
    console.error('Error: ', error);
  }
};
