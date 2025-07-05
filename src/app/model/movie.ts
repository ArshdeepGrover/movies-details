export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rating?: string;
  active?: boolean;
  // Additional properties from OMDB API
  Plot?: string;
  Director?: string;
  Language?: string;
  Released?: string;
  imdbRating?: string;
  Runtime?: string;
  Genre?: string;
  Actors?: string;
  Writer?: string;
  Awards?: string;
  Country?: string;
  Metascore?: string;
  Response?: string;
  Error?: string;
}
