import axios from 'axios';
import { handleAxiosError } from './exceptions';

export enum MediaTypeTRAKT {
  MOVIES = 'movies',
  SHOWS = 'shows'
}

const traktAxios = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-key': process.env.NEXT_PUBLIC_TRAKT_API_KEY,
    'trakt-api-version': 2
  }
});

export const getUserStats = async (user: string) => {
  try {
    // Invoke the API call
    const response = await traktAxios.get(`/users/${user}/stats`);
    console.log(`User Stats Received: ${JSON.stringify(response.data)}`);

    return response.data;

    // Handle errors
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getUserInfo = async (user: string) => {
  try {
    // Invoke the API call
    const response = await traktAxios.get(`/users/${user}`);
    console.log(`User Info response: ${JSON.stringify(response.data)}`);

    return response.data;

    // Handle errors
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getWatched = async (user: string, type: MediaTypeTRAKT, extended: string | null) => {
  try {
    // Invoke the API call
    const response = await traktAxios.get(`/users/${user}/watched/${type}?extended=full`);
    console.log(`Watched ${type} response: ${JSON.stringify(response.data)}`);

    return response.data;

    // Handle errors
  } catch (error) {
    handleAxiosError(error);
  }
};
