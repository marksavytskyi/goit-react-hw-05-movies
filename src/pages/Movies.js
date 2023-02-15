import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { MoviesList } from 'components/MoviesList';
import SearchFilms from '../components/SearchFilms';

import { getSearchingMovie } from 'services/api';

const Movies = () => {
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('quaryName') ?? '';

  useEffect(() => {
    if (productName === '') return;

    async function fetchMovies() {
      const {
        data: { results },
      } = await getSearchingMovie(productName);
      setFilms(results);
    }
    fetchMovies();
  }, [productName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ quaryName: form.elements.quaryName.value });
    form.reset();
  };

  return (
    <main>
      <SearchFilms onSubmit={handleSubmit}></SearchFilms>
      {films && <MoviesList films={films}></MoviesList>}
    </main>
  );
};

export default Movies;
