import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout';

export const App = () => {
  const Home = lazy(() => import('pages/Home'));
  const MovieDetails = lazy(() => import('pages/MovieDetails'));
  const Movies = lazy(() => import('pages/Movies'));
  const MovieCast = lazy(() => import('./MovieInfo/MovieCast'));
  const MovieReviews = lazy(() => import('./MovieInfo/MovieReviews'));
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="movies" element={<Movies></Movies>}></Route>
        <Route path="movies/:id" element={<MovieDetails></MovieDetails>}>
          <Route path="cast" element={<MovieCast></MovieCast>}></Route>
          <Route path="reviews" element={<MovieReviews></MovieReviews>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
