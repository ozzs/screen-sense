import { CommonProps } from './common-type';

export type MovieProps = CommonProps & {
  certification: string;
};

export type MovieHoverCardProps = {
  title: string;
  poster_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  runtime: number;
};
