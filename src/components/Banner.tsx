import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../api/request";
import { styled } from "styled-components";
import "./Banner.css";

interface IGenres {
  id: number;
  name: string;
}

interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ICountry {
  iso_3166_1: string;
  name: string;
}

interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface IVideo {
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

interface IResults {
  results: IVideo[];
}

interface IMovie {
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

const Banner = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [isClicked, setIsClicked] = useState(false);

  const fetchMovie = async () => {
    const response = await instance.get(requests.fetchNowPlaying);
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    console.log(response);
    console.log(movieId);

    const response2 = await instance.get(`movie/${movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });
    console.log(response2.data);

    setMovie(response2.data);
  };

  const truncate = (str: string, n: number) => {
    if (str && str.length > n) {
      return str.slice(0, n) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents" style={{ fontSize: 10 }}>
        <h1 className="banner__title">{movie?.title}</h1>
        <div className="banner__buttons">
          {movie?.videos?.results[0]?.key && (
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
          )}
        </div>
        <p className="banner__description">{truncate(movie?.overview!, 100)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
