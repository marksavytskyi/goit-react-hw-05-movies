import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import MovieInfo from 'components/MovieInfo';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <main>
      <BackLink to={backLinkHref}>Back</BackLink>
      <MovieInfo></MovieInfo>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
