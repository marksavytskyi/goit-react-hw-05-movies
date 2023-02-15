import { useEffect, useState } from 'react';

import { getTrendingFilms } from 'services/api';
import { MoviesList } from 'components/MoviesList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchTrandingFilms() {
      const response = await getTrendingFilms();
      setFilms(response);
    }
    fetchTrandingFilms();
  }, []);

  return (
    <main>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Tranding today
      </h1>
      <MoviesList films={films}></MoviesList>
    </main>
  );
};

export default Home;
