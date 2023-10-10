export type MovieProps = {
  tmdbId: number;
  title: string;
  year: number;
  rating: number;
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
