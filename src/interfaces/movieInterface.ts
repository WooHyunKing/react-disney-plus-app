export interface IGenres {
  id: number;
  name: string;
}

export interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ICountry {
  iso_3166_1: string;
  name: string;
}

export interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface IResults {
  results: IVideo[];
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: IResults;
  vote_average: number;
  vote_count: number;
}
