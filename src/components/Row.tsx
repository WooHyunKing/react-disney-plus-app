import React, { useCallback, useEffect, useState } from "react";
import instance from "../api/axios";
import { IMovie } from "../interfaces/movieInterface";
import "./Row.css";
import MovieModal from "./MovieModal/MovieModal";

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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [movieSelected, setMovieSelected] = useState<IMovie>({});

  const fetchMovies = useCallback(async () => {
    const response = await instance.get(fetchUrl);
    console.log(response.data.results);
    setMovies(response.data.results);
    // setMovies(data);
  }, [fetchUrl]);

  const handleClick = (movie: IMovie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  console.log(movies);

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
              onClick={() => {
                handleClick(movie);
              }}
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
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Row;
