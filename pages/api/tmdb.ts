import axios from 'axios';
import { handleAxiosError } from './exceptions';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export enum MediaTypeTMDB {
  MOVIE = 'movie',
  TV = 'tv'
}

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
};

export const getDetails = async (type: MediaTypeTMDB, id: number) => {
  try {
    // Invoke the API call
    const response = await axios.get(`${TMDB_BASE_URL}/${type}/${id}`, {
      headers: HEADERS
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
