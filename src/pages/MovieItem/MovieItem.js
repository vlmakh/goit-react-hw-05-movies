import css from './MovieItem.module.css';
import { Box } from 'components/Box/Box';
import { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import PageError from 'pages/PageError/PageError';
import Modal from 'components/Modal/Modal';
import imageplaceholder from 'images/noposter.jpg';

export default function MovieItem() {
  const [movieItem, setMovieItem] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const params = useParams();
  const backLink = useRef(location.state?.from ?? '/');

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetchMovieById(params.movieId)
      .then(data => {
        setMovieItem(data);
        // console.log(data);
      })
      .catch(error => {
        // console.log(error.message);
        // alert(error.message);
        setError(true);
      });
  }, [params.movieId]);

  return (
    <Box p={3} mt="48px" textAlign="left">
      <NavLink to={backLink.current} className={css.goback__btn}>
        Go Back
      </NavLink>

      {error && <PageError />}

      {movieItem && (
        <>
          <h2 className={css.movie__title}>{movieItem.original_title}</h2>
          <Box display="flex" mt={3}>
            <Box
              width="200px"
              height="300px"
              boxShadow="0 0 8px rgba(0, 0, 0, 0.6)"
            >
              <img
                className={css.movie__img}
                width="200"
                src={
                  movieItem.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                    : imageplaceholder
                }
                alt={`${movieItem.original_title}`}
                onClick={toggleModal}
              />
            </Box>

            <Box ml={3}>
              <p className={css.movie__descr}>
                {movieItem.genres.map(genre => genre.name).join(', ')}
              </p>
              <p className={css.movie__descr}>
                {(movieItem.release_date ?? movieItem.first_air_date).slice(
                  0,
                  4
                )}
              </p>
              <p className={css.movie__over}>{movieItem.overview}</p>
              <Box mt={3}>
                {/* <NavLink
                  className={css.movie__add}
                  to={`/movies/${movieItem.id}`}
                >
                  Overview
                </NavLink> */}
                <NavLink className={css.movie__add} to="cast">
                  Cast
                </NavLink>
                <NavLink className={css.movie__add} to="reviews">
                  Reviews
                </NavLink>
              </Box>
              {/* <p className={css.movie__over}>{movieItem.overview}</p> */}
              <Outlet />
            </Box>
          </Box>

          {showModal && (
            <Modal onClose={toggleModal}>
              <img
                src={
                  movieItem.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`
                    : imageplaceholder
                }
                alt={`${movieItem.original_title}`}
              />
            </Modal>
          )}
        </>
      )}
    </Box>
  );
}
