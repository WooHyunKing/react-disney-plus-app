import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../interfaces/movieInterface";
import instance from "../../api/axios";
import { styled } from "styled-components";

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie>({});

  console.log(movie);

  const fetchData = async () => {
    const response = await instance.get(
      `https://api.themoviedb.org/3/movie/${movieId}`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <section>
      <img
        className="modal__poster-img"
        alt="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
    </section>
  );
};

export default DetailPage;
