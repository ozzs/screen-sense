import { CommonProps } from './common-type';

export type ShowProps = CommonProps & {
  status: string;
  network: string;
};

export type ShowHoverCardProps = {
  name: string;
  poster_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  first_air_date: string;
  last_air_date: string;
};
