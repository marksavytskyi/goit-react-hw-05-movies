import axios from 'axios';

const API_KEY = 'a2e09a9932668fabc233f9c3d63a2fc0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getFilmById = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response;
};

export const getSearchingMovie = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response;
};
