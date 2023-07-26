import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../api/request";
import { styled } from "styled-components";
import "./Banner.css";
import { IMovie } from "../interfaces/movieInterface";

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

  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos?.results[0]?.key}`}
              width="640"
              height="360"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  } else {
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
          <p className="banner__description">
            {truncate(movie?.overview!, 100)}
          </p>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  }
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
