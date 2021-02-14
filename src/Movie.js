import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Component(e) {
  if ( e.length > 280 ) {
    return <span>{e.slice(0, 280)}...</span>;
  } else {
    return <span>{e}</span>;
  }
} 

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie_list">
      <div className="movie_poster">
        <img src={poster} alt={title} />
      </div>
      <div className="movie_contents">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">{genres.map((genres, index) => <li key={index} className="genres_list"> {genres} </li>)}</ul>
        <p className="movie_summary">{Component(summary)}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.array.isRequired
};

export default Movie;
