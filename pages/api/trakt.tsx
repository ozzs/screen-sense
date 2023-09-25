import axios from 'axios';

const TRAKT_BASE_URL = 'https://api.trakt.tv';
const TRAKT_API_KEY = process.env.NEXT_PUBLIC_TRAKT_API_KEY;
const HEADERS = {
  'Content-Type': 'application/json',
  'trakt-api-key': TRAKT_API_KEY,
  'trakt-api-version': 2
};

export const getUserStats = async (user: string) => {
  try {
    // Invoke the API call
    const response = await axios.get(`${TRAKT_BASE_URL}/users/${user}/stats`, {
      headers: HEADERS
    });
    console.log(`Response: ${JSON.stringify(response.data)}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`User '${user}' not found`);
      }
    } else {
      console.error('Error: ', error);
    }
  }
};

export const getUserInfo = async (user: string) => {
  try {
    // Invoke the API call
    const response = await axios.get(`${TRAKT_BASE_URL}/users/${user}`, {
      headers: HEADERS
    });
    console.log(`Response: ${JSON.stringify(response.data)}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`User '${user}' not found`);
      }
    } else {
      console.error('Error: ', error);
    }
  }
};