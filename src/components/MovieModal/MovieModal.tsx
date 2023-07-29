import React, { useEffect } from "react";
import { IMovie } from "../../interfaces/movieInterface";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  vote_average,
  setModalOpen,
}: IMovie) => {
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span
            className="modal-close"
            onClick={() => (setModalOpen ? setModalOpen(false) : null)}
          >
            X
          </span>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">100% for you</span>{" "}
              {release_date}
            </p>
            <h2 className="modal__title">{title}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
