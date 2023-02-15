import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import MovieCastItem from './MovieCastItem/MovieCastItem';
import { List } from './MovieCast.styled';

const MovieCast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const response = await getMovieCast(id);
        setCast(response.data.cast);
      } catch (error) {}
    }
    fetchMovieCast();
  }, [id]);

  return (
    <>
      <List>
        {cast.map(el => {
          return <MovieCastItem key={el.cast_id} cast={el}></MovieCastItem>;
        })}
      </List>
    </>
  );
};

export default MovieCast;
