import PropTypes from 'prop-types';
import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';

// export const perPage = 12;

const fetchTrends = async () => {
  // return fetch(`${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=1`).then(
  //   response => response.json()
  // );
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=1`
  );
  return response.data;
};

const fetchMovies = async (query, page) => {
  // return fetch(
  //   `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  // ).then(response => response.json());
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
};

const fetchMovieById = async id => {
  // return fetch(
  //   `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&include_adult=false`
  // ).then(response => response.json());
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchCastById = async id => {
  // return fetch(
  //   `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  // ).then(response => response.json());
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchReviewsById = async id => {
  // return fetch(
  //   `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  // ).then(response => response.json());
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export {
  fetchTrends,
  fetchMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
};

fetchMovies.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
};

fetchMovieById.propTypes = {
  id: PropTypes.string,
};

fetchCastById.propTypes = {
  id: PropTypes.string,
};

fetchReviewsById.propTypes = {
  id: PropTypes.string,
};
