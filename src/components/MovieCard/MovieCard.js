import {
  MovieThumb,
  MovieImg,
  MovieTitle,
  MovieYear,
} from 'components/MovieCard/MovieCard.styled';
import imageplaceholder from 'images/noposter.jpg';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  let movieYear = '';
  if (movie.release_date ?? movie.first_air_date) {
    movieYear = (movie.release_date ?? movie.first_air_date).slice(0, 4);
  }

  return (
    <MovieThumb>
      <MovieImg
        width="200"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : imageplaceholder
        }
        alt={movie.original_title ?? movie.name}
        loading="lazy"
      />
      <MovieTitle>
        <p>{movie.title ?? movie.name}</p>
        <MovieYear>{movieYear}</MovieYear>
      </MovieTitle>
    </MovieThumb>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
