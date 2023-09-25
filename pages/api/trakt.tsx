import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const TRAKT_BASE_URL = 'https://api.trakt.tv';
const TRAKT_API_KEY = process.env.TRAKT_API_KEY;

export const getUserStats = async (user: string) => {
  try {
    const response = await axios.get(`${TRAKT_BASE_URL}/users/${user}/stats`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-key': TRAKT_API_KEY,
        'trakt-api-version': 2
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(404).json({ error: 'Endpoint not found' });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await handler(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
