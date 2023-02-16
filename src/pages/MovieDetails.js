import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { Oval } from 'react-loader-spinner';

import MovieInfo from 'components/MovieInfo';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <main>
      <BackLink to={backLinkHref.current}>Back</BackLink>

      <MovieInfo></MovieInfo>

      <Suspense
        fallback={<Oval width={200} height={200} wrapperClass="oval-loader" />}
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
