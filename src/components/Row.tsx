import React, { useCallback, useEffect, useState } from "react";
import instance from "../api/axios";
import { IMovie } from "../interfaces/movieInterface";
import "./Row.css";

const Row = ({
  title,
  id,
  fetchUrl,
}: {
  title: string;
  id: string;
  fetchUrl: string;
}) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchMovies = useCallback(async () => {
    const response = await instance.get(fetchUrl);
    console.log(response.data.results);
    setMovies(response.data.results);
    // setMovies(data);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  console.log(document.getElementById(id));

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id)!.scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => {}}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id)!.scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Row;
