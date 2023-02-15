import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';
import { Oval } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import MovieAdditionalInfo from './MovieAdditionalInfo';
import MovieDescription from './MovieDescription';

const STATUS = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
};

const MovieInfo = () => {
  const [film, setFilm] = useState({});
  const [id] = useState(useParams().id);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    setStatus(STATUS.pending);

    async function fetchMovie() {
      try {
        const response = await getFilmById(id);
        setFilm(response.data);
        setStatus(STATUS.resolved);
      } catch (error) {
        setStatus(STATUS.idle);
        toast.error('Film not found!');
        setTimeout(() => {
          setStatus(STATUS.rejected);
        }, 3000);
      }
    }
    fetchMovie();
  }, [id]);

  const containerStyle = {
    top: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      {status === STATUS.pending && (
        <Oval width={200} height={200} wrapperClass="oval-loader" />
      )}
      {status === STATUS.resolved && (
        <>
          <MovieDescription film={film}></MovieDescription>
          <MovieAdditionalInfo></MovieAdditionalInfo>
        </>
      )}
      {status === STATUS.rejected && <Navigate to="/"></Navigate>}
      <Toaster containerStyle={containerStyle} />
    </>
  );
};

export default MovieInfo;
