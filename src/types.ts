export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images?: string[] | null;
  totalSeasons?: string | null;
  ComingSoon?: boolean | null;
}

//overview => Movies : list of movies
//            Cast: list of cast
export type Mode = 'overview' | 'cast' | 'characters';
