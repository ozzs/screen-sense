export type ShowProps = {
  tmdbId: number;
  title: string;
  status: string;
  network: string;
  year: number;
  rating: number;
};

export type HoverCardProps = {
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
  created_by: {
    id: number;
    name: string;
    profile_path: string;
  }[];
};
