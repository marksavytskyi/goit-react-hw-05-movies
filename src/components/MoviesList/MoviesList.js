import MoviesItem from './MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <List>
      {films.map(({ id, title }) => (
        <MoviesItem
          key={id}
          id={id}
          title={title}
          location={location}
        ></MoviesItem>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.array,
};
