export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieRating {
  Source: string;
  Value: string;
}

export interface IFullMovie extends IMovie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: IMovieRating[];
  Released: string;
  Runtime: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
}
